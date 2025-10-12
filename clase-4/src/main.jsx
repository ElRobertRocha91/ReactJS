import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EcommerceSimple from './EcommerceSimple.jsx'
import EcommercerTotal from './EcommerceTotal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <EcommerceSimple /> */}
    <EcommercerTotal />
  </StrictMode>,
)
