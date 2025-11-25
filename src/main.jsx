import React from 'react'  // Import React first
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>  {/* Use React.StrictMode */}
    <App />
  </React.StrictMode>,
)