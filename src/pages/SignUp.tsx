/**
 * ============================================================================
 * SIGN UP PAGE
 * ============================================================================
 * 🎓 LEARNING NOTE: User registration with:
 * - Form validation
 * - Password confirmation
 * - User metadata (name, etc.)
 * - Automatic login after signup
 * ============================================================================
 */

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  // 🎓 Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 🎓 UI State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * 🎓 CLIENT-SIDE VALIDATION
   * 
   * Check form before sending to server
   * Provides immediate feedback to user
   */
  const validateForm = (): string | null => {
    if (!fullName.trim()) {
      return 'Please enter your name';
    }

    if (!email.trim()) {
      return 'Please enter your email';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }

    return null; // No errors
  };

  /**
   * 🎓 FORM SUBMIT HANDLER
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate before submitting
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError(null);

    // 🎓 Send metadata to be stored in user profile
    const { error } = await signUp(email, password, {
      full_name: fullName,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Success! User is automatically signed in
      navigate('/dashboard');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Create Your Account</h1>
          <p style={styles.subtitle}>Start your job search journey</p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Full Name */}
          <div style={styles.inputGroup}>
            <label htmlFor="fullName" style={styles.label}>
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={loading}
              placeholder="John Doe"
              style={styles.input}
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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
              placeholder="At least 6 characters"
              style={styles.input}
            />
            <span style={styles.hint}>
              Must be at least 6 characters
            </span>
          </div>

          {/* Confirm Password */}
          <div style={styles.inputGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
              placeholder="Re-enter password"
              style={styles.input}
            />
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
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        {/* Login Link */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Already have an account?{' '}
            <Link to="/login" style={styles.link}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 🎓 STYLES
 * Same as Login page for consistency
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

  hint: {
    fontSize: '12px',
    color: '#999',
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
 * 🎓 FORM VALIDATION BEST PRACTICES:
 * 
 * 1. **Client-side validation** - Instant feedback
 * 2. **Server-side validation** - Security (Supabase does this)
 * 3. **Clear error messages** - Tell user exactly what's wrong
 * 4. **Disabled state** - Prevent double-submission
 * 5. **Password requirements** - Tell user upfront
 */