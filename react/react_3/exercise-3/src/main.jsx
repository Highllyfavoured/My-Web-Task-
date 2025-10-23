import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NameForm from './NameTag.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NameForm />
  </StrictMode>,
)
