import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>Relevnt</h1>
          <div style={styles.userInfo}>
            <span style={styles.email}>{user?.email}</span>
            <button onClick={handleSignOut} style={styles.signOutButton}>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.content}>
          <h2 style={styles.title}>Welcome to Your Dashboard! 🎉</h2>
          
          <p style={styles.subtitle}>
            You're logged in as {user?.email}
          </p>

          <div style={styles.messageBox}>
            <h3>🚀 Authentication is Working!</h3>
            <p>You've successfully:</p>
            <ul>
              <li>Set up React with TypeScript</li>
              <li>Deployed to Netlify</li>
              <li>Added authentication with Supabase</li>
              <li>Protected your routes</li>
            </ul>
            <p><strong>Next:</strong> Start building your features!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  },
  
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e0e0e0',
    padding: '16px 24px',
  },
  
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4E808D',
    margin: 0,
  },
  
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  
  email: {
    fontSize: '14px',
    color: '#666',
  },
  
  signOutButton: {
    padding: '8px 16px',
    fontSize: '14px',
    color: '#666',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  
  main: {
    padding: '40px 24px',
  },
  
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  },
  
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '40px',
  },
  
  messageBox: {
    backgroundColor: 'white',
    padding: '32px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
};
