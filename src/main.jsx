// This is React's entry point to your app,
// Your javascript code starts running here
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mainindex.css'
// We assign `loader` and alias of `postsLoader` to avoid name clashes with 
// loaders that may be imported from other routes as well
import Posts, { loader as postsLoader } from './routes/Posts.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// We assign `action` and alias of `newPostAction` to avoid name clashes with 
// actions that may be imported from other routes as well
import NewPost, { action as newPostAction } from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout'

//create router configuration object 
// Takes an array of all the routes to have as objects
// Each object is a route path specifying the path and component to render for that route

// Layout routes (RootLayout) are normal routes but they nest other routes inside of them
// and are used for sharing layout elements like navigation bar which should
// be visible across all routes
// parent and child route paths must not clash
// Everytime you add children to a route, remeber to import and use Outlet to 
// where those children will be rendered to tell React where to render the children
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        //loader can accept a promise a function that returns a promise or not
        //if it returns a promise, React will wait for it to resolve before rendering the Posts element
        //loader is used to fetch requests when this route is navigated to
        //The data returned by loader is exposed to the Posts element and can be accessed by it
        //inside the component or any of its nested components such as the `PostList` it nests
        //using the useLoaderData hook from `react-router-dom`
        loader: postsLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            //just as we can add loaders to routes, we can also add actions to route
            //this function will be triggered when a form is submitted in the route
            action: newPostAction
          }
        ]
      },

    ]
  },
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
