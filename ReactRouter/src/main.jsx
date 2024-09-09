import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let idd=document.querySelector("#root")
ReactDOM.createRoot(idd).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)