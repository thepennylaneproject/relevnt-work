/**
 * ============================================================================
 * LOGIN PAGE
 * ============================================================================
 * 🎓 LEARNING NOTE: This is a complete login form with:
 * - Form state management
 * - Error handling
 * - Loading states
 * - Navigation after login
 * ============================================================================
 */

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  
  // 🎓 Form State: Store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // 🎓 UI State: Track loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * 🎓 FORM SUBMIT HANDLER
   * 
   * Async function that:
   * 1. Prevents default form submission
   * 2. Shows loading state
   * 3. Calls signIn function
   * 4. Handles success (navigate) or error (show message)
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    
    setLoading(true);
    setError(null);
    
    const { error } = await signIn(email, password);
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Success! Navigate to dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Welcome to Relevnt</h1>
          <p style={styles.subtitle}>Sign in to your account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Email Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              placeholder="you@example.com"
              style={styles.input}
            />
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              placeholder="••••••••"
              style={styles.input}
            />
          </div>

          {/* Forgot Password Link */}
          <div style={styles.linkContainer}>
            <Link to="/forgot-password" style={styles.link}>
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Sign Up Link */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Don't have an account?{' '}
            <Link to="/signup" style={styles.link}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 🎓 INLINE STYLES
 * 
 * These could be moved to CSS modules or styled-components
 * For learning, inline styles are easier to see and modify
 */
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  
  card: {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '40px',
  },
  
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  },
  
  subtitle: {
    fontSize: '16px',
    color: '#666',
  },
  
  error: {
    backgroundColor: '#fee',
    color: '#c33',
    padding: '12px',
    borderRadius: '4px',
    marginBottom: '20px',
    fontSize: '14px',
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
  },
  
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  
  linkContainer: {
    textAlign: 'right',
  },
  
  link: {
    color: '#4E808D',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
  
  button: {
    padding: '12px',
    fontSize: '16px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#4E808D',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
  
  footer: {
    marginTop: '24px',
    textAlign: 'center',
  },
  
  footerText: {
    fontSize: '14px',
    color: '#666',
  },
};

/**
 * 🎓 KEY CONCEPTS IN THIS FILE:
 * 
 * 1. **Controlled Components**: React controls input values via state
 * 2. **Event Handlers**: onChange updates state, onSubmit handles form
 * 3. **Async/Await**: Handle asynchronous authentication
 * 4. **Conditional Rendering**: Show error messages when needed
 * 5. **Navigation**: Use navigate() to redirect after login
 * 6. **Loading States**: Disable form while processing
 */
