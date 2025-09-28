// This is React's entry point to your app,
// Your javascript code starts running here
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mainindex.css'
import MainApp from './MainApp.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost from './components/NewPost.jsx'

//create router configuration object 
// Takes an array of all the routes to have as objects
// Each object is a route path specifying the path and component to render for that route
const router = createBrowserRouter([
  { path: '/', element: <MainApp /> },
  { path: '/create-post', element: <NewPost /> }
]);

// Takes a pointer to the <div> container/element we assigned 
// the 'root' id in the index.html file and renders 
// the web page as a React app using javascript hence replacing 
// the empty content of the <div> container with React/JSX code
// which behaves like an HTML element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* This component enables routing and tells the router 
    to watch the url for changes and render different 
    components for different paths */}
    <RouterProvider router={router} />
  </StrictMode>,
)
