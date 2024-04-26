import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
  } from "react-router-dom"
import SignIn from "../view/Login/SignIn";
import SignUp from "../view/Register/SignUp";
import LandingPage from "../view/Landing/LandingPage";
import Dashboard from "../view/Dashboard/Dashboard";
import ResDetail from "../view/RestaurantDetail/ResDetail";
import { useSelector } from 'react-redux'
import CartPage from "../view/Cart/CartPage";
import { useState } from "react";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [,
        {
          path: "/",
          element: <LandingPage/>,
        },

        {
          path: "/SignIn",
          element: <SignIn/>,
        },

        {
            path: "/SignUp",
            element: <SignUp/>,
          },

          {
            path: "/landingpage",
            element: <LandingPage/>,
          },

          {
            path: "/dashboard",
            element: <Dashboard/>,
          },
       
          {
            path: "/resdetail/:resdetai_id",
            element: <ResDetail/>,
          },

          {
            path: "/Cart",
            element: <CartPage/>,
          },
      
      ]
  
    }
  ]);
  
  function Router() {
    return <RouterProvider router={router} />
  }
  
  function Main() {
   
    const navigate = useNavigate()

    return <div >
      
  <Outlet/>
    </div>
  }
  
  export default Router