import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
Triggering: createRoot triggers a render and calling its render() function
Rendering: React does this by calling your component
after this react will commit it's to the DOM
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
