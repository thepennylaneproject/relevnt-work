/**
 * ============================================================================
 * LIST RESUMES ENDPOINT
 * ============================================================================
 * GET /api/resumes/list
 * 
 * Returns all resumes for the authenticated user with pagination support
 * ============================================================================
 */

import { Handler, HandlerEvent } from '@netlify/functions';
import { createAuthenticatedClient } from '../utils/supabase';
import { requireAuth, extractToken } from '../utils/auth';
import { ok, handleOptions, internalServerError, unauthorized } from '../utils/response';
import { validatePaginationParams } from '../utils/validation';

export const handler: Handler = async (event: HandlerEvent) => {
  try {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
      return handleOptions();
    }
    
    // Only allow GET requests
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' })
      };
    }
    
    // Authenticate user
    const user = await requireAuth(event);
    if (!user) {
      return unauthorized('You must be logged in to view resumes');
    }
    
    // Get pagination parameters from query string
    const { page, limit } = validatePaginationParams(
      event.queryStringParameters?.page,
      event.queryStringParameters?.limit
    );
    
    // Calculate offset for pagination
    const offset = (page - 1) * limit;
    
    // Create Supabase client with user's auth token
    const token = extractToken(event);
    if (!token) {
      return unauthorized();
    }
    
    const supabase = createAuthenticatedClient(token);
    
    // Get total count
    const { count, error: countError } = await supabase
      .from('resumes')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('Error counting resumes:', countError);
      return internalServerError('Failed to count resumes');
    }
    
    // Fetch resumes with pagination
    const { data: resumes, error } = await supabase
      .from('resumes')
      .select(`
        id,
        title,
        is_default,
        version_number,
        ats_score,
        created_at,
        updated_at
      `)
      .order('updated_at', { ascending: false })
      .range(offset, offset + limit - 1);
    
    if (error) {
      console.error('Error fetching resumes:', error);
      return internalServerError('Failed to fetch resumes');
    }
    
    // Return paginated response
    return ok({
      resumes,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
        hasMore: offset + limit < (count || 0)
      }
    });
    
  } catch (error) {
    console.error('Unexpected error:', error);
    return internalServerError('An unexpected error occurred');
  }
};
