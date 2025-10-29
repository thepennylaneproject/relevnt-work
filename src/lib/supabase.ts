/**
 * ============================================================================
 * SUPABASE CLIENT FOR REACT FRONTEND
 * ============================================================================
 * 🎓 LEARNING NOTE: This creates a Supabase client for your React app
 * 
 * Different from netlify/functions/utils/supabase.js because:
 * - This runs in the browser (client-side)
 * - That runs on the server (Netlify Functions)
 * - This uses VITE_ environment variables (exposed to browser)
 * - That uses regular process.env (server-only secrets)
 * ============================================================================
 */

import { createClient } from '@supabase/supabase-js';
// import type { Database } from '../types/database'; // TODO: Generate from Supabase // We'll create this later

// 🎓 Environment Variables in Vite:
// - Must be prefixed with VITE_ to be exposed to the browser
// - Access with import.meta.env (not process.env)
// - Safe to expose anon key (RLS protects your data)

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 🎓 Error Handling: Fail fast if config is missing
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env file'
  );
}

/**
 * Create and export the Supabase client
 * 
 * 🎓 WHY THIS WORKS:
 * - createClient sets up connection to Supabase
 * - Automatically handles authentication state
 * - Stores session in localStorage
 * - Includes auth token in all requests
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // 🎓 Where to store the user's session
    // - localStorage: Persists across browser tabs/windows
    // - sessionStorage: Only for current tab
    // - cookie: For SSR (Server-Side Rendering)
    storage: window.localStorage,

    // 🎓 Auto-refresh tokens before they expire
    autoRefreshToken: true,

    // 🎓 Detect when user's session changes (login, logout, etc.)
    detectSessionInUrl: true,

    // 🎓 Persist session across page reloads
    persistSession: true,
  }
});

/**
 * 🎓 HOW TO USE THIS:
 * 
 * In any component:
 * ```typescript
 * import { supabase } from './lib/supabase';
 * 
 * // Sign up
 * const { data, error } = await supabase.auth.signUp({
 *   email: 'user@example.com',
 *   password: 'password123'
 * });
 * 
 * // Sign in
 * const { data, error } = await supabase.auth.signInWithPassword({
 *   email: 'user@example.com',
 *   password: 'password123'
 * });
 * 
 * // Get current user
 * const { data: { user } } = await supabase.auth.getUser();
 * 
 * // Sign out
 * await supabase.auth.signOut();
 * 
 * // Query database
const { data, error } = await supabase
  .from('jobs')
  .insert({
    title: 'Product Designer',
    company: 'Relevnt Labs',
    location: 'Remote',
    description: 'Design sleek, AI-powered job interfaces.'
  })
  .select()

    .order('created_at', { ascending: false });
 *   .single();
 * ```
 */