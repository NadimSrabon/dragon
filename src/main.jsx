import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import NewsDetails from './NewsDetails/NewsDetails.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/news/:_id',
        element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({params}) => fetch(`/news.json`)

      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
