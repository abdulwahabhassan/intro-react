// This is React's entry point to your app,
// Your javascript code starts running here
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainApp from './MainApp.jsx'

// Takes a pointer to the <div> container/element we assigned 
// the 'root' id in the index.html file and renders 
// the web page as a React app using javascript hence replacing 
// the empty content of the <div> container with React/JSX code
// which behaves like an HTML element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>,
)
