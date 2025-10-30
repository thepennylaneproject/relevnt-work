/**
 * ============================================================================
 * CREATE RESUME ENDPOINT
 * ============================================================================
 * POST /api/resumes/create
 * 
 * Creates a new resume for the authenticated user
 * Checks tier limits before allowing creation
 * ============================================================================
 */

import { Handler, HandlerEvent } from '@netlify/functions';
import { createAuthenticatedClient } from '../utils/supabase';
import { requireAuth, extractToken, verifyTierLimit } from '../utils/auth';
import { 
  created, 
  handleOptions, 
  internalServerError, 
  unauthorized, 
  badRequest,
  forbidden,
  validationErrorResponse
} from '../utils/response';
import { validateResumeData } from '../utils/validation';

export const handler: Handler = async (event: HandlerEvent) => {
  try {
    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
      return handleOptions();
    }
    
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' })
      };
    }
    
    // Authenticate user
    const user = await requireAuth(event);
    if (!user) {
      return unauthorized('You must be logged in to create resumes');
    }
    
    // Parse request body
    let resumeData;
    try {
      resumeData = JSON.parse(event.body || '{}');
    } catch (parseError) {
      return badRequest('Invalid JSON in request body');
    }
    
    // Validate resume data
    const validation = validateResumeData(resumeData);
    if (!validation.isValid) {
      return validationErrorResponse(validation.errors);
    }
    
    // Check tier limits
    const tierLimitError = await verifyTierLimit(user.id, 'create_resume');
    if (tierLimitError) {
      return forbidden(tierLimitError);
    }
    
    // Create Supabase client with user's auth token
    const token = extractToken(event);
    if (!token) {
      return unauthorized();
    }
    
    const supabase = createAuthenticatedClient(token);
    
    // If this is being set as default, unset other defaults
    if (resumeData.is_default) {
      await supabase
        .from('resumes')
        .update({ is_default: false })
        .eq('user_id', user.id)
        .eq('is_default', true);
    }
    
    // Prepare resume data
    const newResume = {
      user_id: user.id,
      title: resumeData.title,
      is_default: resumeData.is_default || false,
      version_number: resumeData.version_number || 1,
      personal_info: resumeData.personal_info || {},
      summary: resumeData.summary || null,
      work_experience: resumeData.work_experience || [],
      education: resumeData.education || [],
      skills: resumeData.skills || [],
      certifications: resumeData.certifications || [],
      projects: resumeData.projects || [],
      languages: resumeData.languages || [],
      ats_score: resumeData.ats_score || null,
      ats_suggestions: resumeData.ats_suggestions || [],
      keywords: resumeData.keywords || []
    };
    
    // Insert resume into database
    const { data: resume, error } = await supabase
      .from('resumes')
      .insert(newResume)
      .select()
      .single();
    
    if (error) {
      console.error('Error creating resume:', error);
      return internalServerError('Failed to create resume', error);
    }
    
    // Return created resume
    return created(resume);
    
  } catch (error) {
    console.error('Unexpected error:', error);
    return internalServerError('An unexpected error occurred');
  }
};
