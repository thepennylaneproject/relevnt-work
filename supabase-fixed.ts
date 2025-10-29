/**
 * ============================================================================
 * SUPABASE CLIENT
 * ============================================================================
 * 🎓 LEARNING NOTE: This creates a Supabase client that your app uses to
 * interact with your database and authentication.
 * ============================================================================
 */

import { createClient } from '@supabase/supabase-js'

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file'
  )
}

// Create and export the Supabase client
// 🎓 This client handles authentication, database queries, and real-time subscriptions
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * 🎓 HOW TO USE:
 * 
 * Import this in any component:
 * import { supabase } from '@/lib/supabase'
 * 
 * Then use it for:
 * - Authentication: supabase.auth.signIn(...)
 * - Database: supabase.from('table').select(...)
 * - Storage: supabase.storage.from('bucket')...
 */
