import { Link } from 'react-router-dom'
import { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

interface DashboardPageProps {
  user: User
}

export default function DashboardPage({ user }: DashboardPageProps) {
  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div>
      <nav>
        <Link to="/dashboard">
          <h1>Relevnt</h1>
        </Link>
        <div>
          <Link to="/resumes">Resumes</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/applications">Applications</Link>
          <button onClick={handleSignOut} className="btn btn-secondary">
            Sign Out
          </button>
        </div>
      </nav>

      <div className="container">
        <h1 style={{ marginBottom: '2rem' }}>Welcome back, {user.email}!</h1>

        <div className="grid grid-2">
          <Link to="/resumes" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
              <h2>📝 Resumes</h2>
              <p>Create and manage your resumes</p>
            </div>
          </Link>

          <Link to="/jobs" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
              <h2>💼 Jobs</h2>
              <p>Track job opportunities</p>
            </div>
          </Link>

          <Link to="/applications" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
              <h2>📊 Applications</h2>
              <p>Monitor your application status</p>
            </div>
          </Link>

          <div className="card">
            <h2>🎯 Quick Stats</h2>
            <p>0 Resumes • 0 Jobs • 0 Applications</p>
          </div>
        </div>

        <div className="card" style={{ marginTop: '2rem' }}>
          <h2>Getting Started</h2>
          <ol style={{ marginLeft: '1.5rem', lineHeight: '2' }}>
            <li>Create your first resume</li>
            <li>Add jobs you're interested in</li>
            <li>Track your applications</li>
            <li>Get hired! 🎉</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
