import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './Routes/Route.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Providers/AuthProvider.jsx'
import ThemeProvider from './Providers/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
</ThemeProvider>
  </StrictMode>,
)
