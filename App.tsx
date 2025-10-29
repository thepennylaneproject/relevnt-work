import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    /**
     * 🎓 PROVIDER PATTERN
     * 
     * AuthProvider makes authentication available to all components
     * Any component can access user, signIn, signOut, etc. using useAuth()
     */
    <AuthProvider>
      {/**
       * 🎓 ROUTER
       * 
       * BrowserRouter enables navigation without page reloads
       * Uses HTML5 History API (pushState, replaceState)
       */}
      <BrowserRouter>
        {/**
         * 🎓 ROUTES
         * 
         * Define which component renders for each URL path
         * Think of it as: "When user visits /login, show <Login />"
         */}
        <Routes>
          {/* Public Routes - No authentication required */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes - Authentication required */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/**
           * 🎓 REDIRECT ROOT TO DASHBOARD
           * 
           * When user visits /, redirect to /dashboard
           * If not logged in, ProtectedRoute will redirect to /login
           */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/**
           * 🎓 CATCH-ALL ROUTE (404)
           * 
           * Any unmatched route redirects to dashboard
           * You could also create a custom 404 page
           */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

/**
 * ============================================================================
 * 🎓 HOW THIS WORKS:
 * ============================================================================
 * 
 * 1. **User visits /** 
 *    → Redirects to /dashboard
 *    → ProtectedRoute checks auth
 *    → Not logged in? Redirect to /login
 * 
 * 2. **User submits login form**
 *    → signIn() called from AuthContext
 *    → Success? User state updated
 *    → navigate('/dashboard') in Login component
 *    → ProtectedRoute sees user, shows Dashboard
 * 
 * 3. **User clicks "Sign Out"**
 *    → signOut() called from AuthContext
 *    → User state cleared
 *    → navigate('/login') in Dashboard
 * 
 * ============================================================================
 * 🎓 ADDING NEW ROUTES:
 * ============================================================================
 * 
 * Public pages (no auth needed):
 * <Route path="/about" element={<About />} />
 * 
 * Protected pages (auth required):
 * <Route
 *   path="/profile"
 *   element={
 *     <ProtectedRoute>
 *       <Profile />
 *     </ProtectedRoute>
 *   }
 * />
 * 
 * ============================================================================
 * 🎓 NESTED ROUTES (for later):
 * ============================================================================
 * 
 * <Route path="/dashboard" element={<DashboardLayout />}>
 *   <Route index element={<DashboardHome />} />
 *   <Route path="resumes" element={<Resumes />} />
 *   <Route path="jobs" element={<Jobs />} />
 * </Route>
 * 
 * This creates:
 * - /dashboard → Shows DashboardHome
 * - /dashboard/resumes → Shows Resumes
 * - /dashboard/jobs → Shows Jobs
 * All inside DashboardLayout (shared header, sidebar, etc.)
 */