import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>
  },
  {
    path:'/about',
    element:<div>this is about page</div>
  },
  {
    path:'/contact',
    element:<div>01710792327</div>
  },
  {
    path:'/',
    element:<div>hello</div>,
    errorElement:<ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
