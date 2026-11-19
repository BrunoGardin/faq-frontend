import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Faq from './pages/Faq'

import '@fontsource/oswald/600.css';
import '@fontsource/oswald/700.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Faq />
  </StrictMode>,
)
