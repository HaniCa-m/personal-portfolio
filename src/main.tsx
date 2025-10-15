import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-[#0B0B1A] min-h-screen'>
    <App />
    </div>
  </StrictMode>,
)
