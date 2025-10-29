import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <nav>
        <h1>Relevnt</h1>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>

      <div className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Find Your Perfect Job</h1>
        <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '2rem' }}>
          AI-powered job search platform that helps you track applications,
          optimize resumes, and land your dream job.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
          <Link to="/signup">
            <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              Get Started Free
            </button>
          </Link>
          <Link to="/login">
            <button className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              Sign In
            </button>
          </Link>
        </div>

        <div className="grid grid-2" style={{ marginTop: '4rem', textAlign: 'left' }}>
          <div className="card">
            <h2>📝 Smart Resume Builder</h2>
            <p>Create ATS-optimized resumes tailored to each job application.</p>
          </div>

          <div className="card">
            <h2>🎯 Job Tracking</h2>
            <p>Keep track of all your applications in one organized dashboard.</p>
          </div>

          <div className="card">
            <h2>🤖 AI-Powered Insights</h2>
            <p>Get intelligent recommendations for improving your job search.</p>
          </div>

          <div className="card">
            <h2>📊 Analytics</h2>
            <p>Visualize your job search progress and success rates.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
