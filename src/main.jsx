import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/AboutUsPage/About';
import Root from './Root/Root';
import HomePage from './pages/HomePage/HomePage';
import AllProduct from './pages/AllProduct/AllProduct';
import Manage from './pages/ManageProduct/Manage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/all-products',
        element: <AllProduct></AllProduct>
      },
      {
        path: '/manage',
        element: <Manage></Manage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
