/**
 * ============================================================================
 * PROTECTED ROUTE COMPONENT
 * ============================================================================
 * 🎓 LEARNING NOTE: This component protects routes that require authentication
 * 
 * How it works:
 * 1. Check if user is logged in
 * 2. If yes → show the requested page
 * 3. If no → redirect to login page
 * ============================================================================
 */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * 🎓 PROTECTED ROUTE
 * 
 * Wrap any route that requires authentication:
 * 
 * <Route path="/dashboard" element={
 *   <ProtectedRoute>
 *     <Dashboard />
 *   </ProtectedRoute>
 * } />
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  // 🎓 Still checking auth status
  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner} />
        <p>Loading...</p>
      </div>
    );
  }

  // 🎓 No user → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🎓 User logged in → show the page
  return <>{children}</>;
}

/**
 * 🎓 SIMPLE LOADING SPINNER
 */
const styles: { [key: string]: React.CSSProperties } = {
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    gap: '16px',
  },
  
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #4E808D',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

/**
 * 🎓 CSS ANIMATION (add to your global CSS)
 * 
 * @keyframes spin {
 *   0% { transform: rotate(0deg); }
 *   100% { transform: rotate(360deg); }
 * }
 */

/**
 * 🎓 ALTERNATIVE PATTERNS:
 * 
 * 1. **Redirect with return URL:**
 * <Navigate to={`/login?returnTo=${location.pathname}`} />
 * Then after login, navigate to returnTo
 * 
 * 2. **Role-based protection:**
 * if (user.role !== 'admin') {
 *   return <Navigate to="/unauthorized" />;
 * }
 * 
 * 3. **Feature flags:**
 * if (!user.subscription.includes('premium')) {
 *   return <Navigate to="/upgrade" />;
 * }
 */
