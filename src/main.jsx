import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePages from './pages/homePages.jsx'
import Popular from './pages/popular.jsx'
import TopRated from './pages/topRated.jsx'
import UpComing from './pages/upComingPages.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages/>,
  },
  {
    path: '/Popular',
    element: <Popular/>,
  },
  {
    path: '/TopRated',
    element: <TopRated/>,
  },
  {
    path: '/UpComing',
    element: <UpComing/>,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
