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
import { Provider } from 'react-redux';
import store from './redux/store';
import SingleProduct from './pages/SinglePage/SingleProduct';
import Cart from './pages/CartPage/Cart';
import CheckOut from './pages/CheckOut/CheckOut';
import Success from './pages/Success/Success';



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
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/checkout',
        element: <CheckOut></CheckOut>
      },
      {
        path: '/success',
        element: <Success></Success>
      },
      {
        path:'/products/:_id',
        element: <SingleProduct></SingleProduct>,
        loader: () => fetch(`http://localhost:5000/products`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
