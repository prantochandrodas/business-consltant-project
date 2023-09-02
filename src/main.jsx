import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Home from './Components/Home/Home';
import PageLayout from './Layouts/PageLayout/PageLayout';
import CotactUsPage from './Components/ContactUsPage/CotactUsPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
  },
  {
    path:'/contact',
    element:<PageLayout></PageLayout>,
    children:[
      {
        path:'/contact',
        element:<CotactUsPage></CotactUsPage>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
