import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/index.scss'
import './utils/i18n.js';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
