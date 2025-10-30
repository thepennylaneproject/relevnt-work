/**
 * APP LAYOUT - SIMPLIFIED (NO TIER RESTRICTIONS)
 * 
 * Main layout wrapper for authenticated pages
 * All theme features available to all users
 */

import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useRelevntTheme } from '@/theme/RelevntThemeProvider';
import './AppLayout.css';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user, signOut } = useAuth();
  const { currentTheme, currentMode, setTheme, toggleMode, availableThemes } = useRelevntTheme();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className={`app-layout theme-${currentTheme.toLowerCase()} mode-${currentMode.toLowerCase()}`}>
      {/* Header / Navigation */}
      <header className="app-header">
        <div className="header-content">
          {/* Logo / Brand */}
          <div className="brand">
            <Link to="/dashboard">
              <h1>Relevnt</h1>
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="main-nav">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/jobs" className="nav-link">Jobs</Link>
            <Link to="/applications" className="nav-link">Applications</Link>
            <Link to="/resumes" className="nav-link">Resumes</Link>
          </nav>

          {/* User Menu */}
          <div className="user-menu">
            {/* Theme Selector */}
            <div className="theme-controls">
              {/* Theme Dropdown */}
              <select
                value={currentTheme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="theme-select"
              >
                {availableThemes.map(theme => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>

              {/* Light/Dark Toggle */}
              <button
                onClick={toggleMode}
                className="mode-toggle"
                title={`Switch to ${currentMode === 'Light' ? 'Dark' : 'Light'} mode`}
              >
                {currentMode === 'Light' ? '🌙' : '☀️'}
              </button>
            </div>

            {/* User Info */}
            <div className="user-info">
              <span className="user-email">{user?.email}</span>
              <button onClick={handleSignOut} className="sign-out-btn">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {children}
      </main>

      {/* Footer (Optional) */}
      <footer className="app-footer">
        <p>© 2025 Relevnt - AI-Powered Job Search</p>
      </footer>
    </div>
  );
}

export default AppLayout;