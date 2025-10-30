/**
 * ============================================================================
 * SUPABASE CLIENT UTILITY
 * ============================================================================
 * ðŸŽ“ LEARNING NOTE: This file creates a Supabase client that can be used
 * in all your Netlify Functions. We create two versions:
 * 1. Client with user auth (for user-specific operations)
 * 2. Admin client (for operations that bypass RLS)
 * ============================================================================
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

/**
 * Create a Supabase client with user authentication
 * Use this for operations that respect Row Level Security (RLS)
 * 
 * @param accessToken - The user's JWT token from the Authorization header
 * @returns Supabase client with user context
 */
export function createAuthenticatedClient(accessToken: string): SupabaseClient {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  });
}

/**
 * Create a Supabase admin client
 * Use this for operations that need to bypass Row Level Security
 * âš ï¸ WARNING: This has full admin access - use carefully!
 * 
 * @returns Supabase client with admin privileges
 */
export function createAdminClient(): SupabaseClient {
  return createClient(supabaseUrl, supabaseServiceKey);
}

/**
 * Create a regular Supabase client (no auth)
 * Use this for public operations like checking if email exists
 * 
 * @returns Basic Supabase client
 */
export function createPublicClient(): SupabaseClient {
  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Database type definitions
 * ðŸŽ“ These help TypeScript understand your database structure
 * You can generate these automatically with: supabase gen types typescript
 */
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          tier: 'starter' | 'pro' | 'premium';
          theme_preference: string;
          timezone: string;
          onboarding_completed: boolean;
          onboarding_step: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>;
      };
      resumes: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          is_default: boolean;
          version_number: number;
          personal_info: any;
          summary: string | null;
          work_experience: any[];
          education: any[];
          skills: any[];
          certifications: any[];
          projects: any[];
          languages: any[];
          ats_score: number | null;
          ats_suggestions: any[];
          keywords: any[];
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['resumes']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['resumes']['Insert']>;
      };
      jobs: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          company: string;
          location: string | null;
          job_type: string | null;
          salary_range: string | null;
          description: string | null;
          requirements: any[];
          responsibilities: any[];
          benefits: any[];
          external_job_id: string | null;
          external_source: string | null;
          external_url: string | null;
          company_logo_url: string | null;
          match_score: number | null;
          match_reasons: any[];
          status: string;
          posted_date: string | null;
          saved_date: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['jobs']['Row'], 'id' | 'created_at' | 'updated_at' | 'saved_date'>;
        Update: Partial<Database['public']['Tables']['jobs']['Insert']>;
      };
      applications: {
        Row: {
          id: string;
          user_id: string;
          job_id: string | null;
          resume_id: string | null;
          company: string;
          position: string;
          location: string | null;
          status: string;
          cover_letter: string | null;
          notes: string | null;
          salary_expectation: string | null;
          recruiter_name: string | null;
          recruiter_email: string | null;
          recruiter_phone: string | null;
          applied_date: string;
          follow_up_date: string | null;
          interview_date: string | null;
          offer_date: string | null;
          response_deadline: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['applications']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['applications']['Insert']>;
      };
      // Add more table types as needed...
    };
  };
}
