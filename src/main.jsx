import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Font Awesome configuration
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

// Ensure fonts are loaded
document.fonts.ready.then(() => {
  console.log('Fonts loaded successfully')
  // Force a repaint to ensure gradient text displays correctly
  document.body.style.fontFamily = 'Inter, sans-serif'
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
