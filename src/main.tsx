import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { RelevntThemeProvider } from './theme/RelevntThemeProvider'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RelevntThemeProvider>
          <App />
        </RelevntThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)