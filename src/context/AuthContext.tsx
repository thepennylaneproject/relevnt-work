/**
 * ============================================================================
 * AUTHENTICATION CONTEXT
 * ============================================================================
 * 🎓 LEARNING NOTE: This provides authentication state to your entire app
 * 
 * React Context Pattern:
 * 1. Create context with createContext()
 * 2. Provide context value with <AuthProvider>
 * 3. Consume context with useAuth() hook
 * 
 * This avoids "prop drilling" - passing auth state through many components
 * ============================================================================
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

/**
 * 🎓 TypeScript Interface: Defines the shape of our context
 * This gives us autocomplete and type checking
 */
interface AuthContextType {
  // State
  user: User | null;           // Current logged-in user (null if not logged in)
  session: Session | null;     // User's session (includes JWT token)
  loading: boolean;            // True while checking auth status

  // Actions
  signUp: (email: string, password: string, metadata?: any) => Promise<{ error: AuthError | null }>;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<{ error: AuthError | null }>;
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>;
}

// 🎓 Create the context with undefined default
// We use undefined to force consumers to use the provider
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * 🎓 CUSTOM HOOK: useAuth()
 * 
 * This is how components access the auth context
 * Throws error if used outside AuthProvider (helpful debugging!)
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

/**
 * 🎓 AUTH PROVIDER COMPONENT
 * 
 * Wrap your app with this to provide auth to all components
 * 
 * Example:
 * <AuthProvider>
 *   <App />
 * </AuthProvider>
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  // 🎓 State Management
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  /**
   * 🎓 useEffect: Runs when component mounts
   * 
   * This:
   * 1. Checks if user is already logged in (from localStorage)
   * 2. Sets up listener for auth changes (login, logout, etc.)
   * 3. Cleans up listener when component unmounts
   */
  useEffect(() => {
    // Check active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes (login, logout, token refresh, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // 🎓 Cleanup function: Remove listener when component unmounts
    return () => subscription.unsubscribe();
  }, []); // Empty dependency array = run once on mount

  /**
   * 🎓 SIGN UP FUNCTION
   * 
   * Creates new user account
   * Automatically signs them in on success
   */
  const signUp = async (email: string, password: string, metadata?: any) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata, // Optional: store extra data like name, etc.
        },
      });

      return { error };
    } catch (error) {
      console.error('Sign up error:', error);
      return { error: error as AuthError };
    }
  };

  /**
   * 🎓 SIGN IN FUNCTION
   * 
   * Logs user in with email/password
   * Session stored automatically in localStorage
   */
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      return { error };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error: error as AuthError };
    }
  };

  /**
   * 🎓 SIGN OUT FUNCTION
   * 
   * Logs user out
   * Clears session from localStorage
   */
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      return { error };
    } catch (error) {
      console.error('Sign out error:', error);
      return { error: error as AuthError };
    }
  };

  /**
   * 🎓 RESET PASSWORD FUNCTION
   * 
   * Sends password reset email
   * User clicks link in email to set new password
   */
  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      return { error };
    } catch (error) {
      console.error('Reset password error:', error);
      return { error: error as AuthError };
    }
  };

  /**
   * 🎓 CONTEXT VALUE
   * 
   * This object is what all consumers of useAuth() will receive
   */
  const value: AuthContextType = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
  };

  /**
   * 🎓 PROVIDER
   * 
   * Makes auth available to all children components
   * Children can access auth with: const { user, signIn } = useAuth()
   */
  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        // 🎓 Show loading spinner while checking auth status
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '18px',
          color: '#4E808D'
        }}>
          Loading...
        </div>
      ) : (
        // Once loaded, show the app
        children
      )}
    </AuthContext.Provider>
  );
}

/**
 * 🎓 HOW TO USE IN YOUR APP:
 * 
 * 1. Wrap your app:
 * ```tsx
 * import { AuthProvider } from './context/AuthContext';
 * 
 * function App() {
 *   return (
 *     <AuthProvider>
 *       <YourApp />
 *     </AuthProvider>
 *   );
 * }
 * ```
 * 
 * 2. Use in any component:
 * ```tsx
 * import { useAuth } from './context/AuthContext';
 * 
 * function MyComponent() {
 *   const { user, signIn, signOut } = useAuth();
 *   
 *   if (!user) {
 *     return <div>Please log in</div>;
 *   }
 *   
 *   return (
 *     <div>
 *       <p>Hello, {user.email}!</p>
 *       <button onClick={signOut}>Log Out</button>
 *     </div>
 *   );
 * }
 * ```
 */