// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 先取得 root
const root = createRoot(document.getElementById('root'))

// 再渲染
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
