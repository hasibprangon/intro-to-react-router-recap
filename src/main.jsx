import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import ErrorPage from './Components/Error/Error.jsx'
import First from './Components/First/First.jsx'
import Friends from './Components/Friends/Friends.jsx'
import FriendDetail from './Components/FriendDetail/FriendDetail.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetail from './Components/PostDetail/PostDetail.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:FriendId',
        element:<FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.FriendId}`)
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element:<PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
