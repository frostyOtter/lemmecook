import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoute from './AppRouter.tsx'
import './global.css'
import AuthorizerWithNavigate from './auth/AuthorizerWithNavigate.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AuthorizerWithNavigate>
        <AppRoute/>
      </AuthorizerWithNavigate>
    </Router>
  </React.StrictMode>,
)
