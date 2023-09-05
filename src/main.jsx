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
import Home from './Components/HomePages/Home/Home';
import PageLayout from './Layouts/PageLayout/PageLayout';
import CotactUsPage from './Components/ContactUsPage/CotactUsPage';
import AboutUspage from './Components/AboutUsPage/AboutUspage';
import ServicesPage from './Components/ServicesPages/ServicesPage/ServicesPage';
import ServicesMobileDevelopment from './Components/ServicesPages/ServicesMobileDevelopment/ServicesMobileDevelopment';
import PortfolioPage from './Components/PortfolioPages/PortfolioPage';
import PortfolioMobileDevelopment from './Components/PortfolioPages/PortfolioMobileDevelopment/PortfolioMobileDevelopment';
import PortfolioPagelogo from './Components/PortfolioPages/PortfolioPagelogo/PortfolioPagelogo';
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
  },
  {
    path:'/about',
    element:<PageLayout></PageLayout>,
    children:[
      {
        path:'/about',
        element:<AboutUspage></AboutUspage>
      }
    ]
  },
  {
    path:'/service',
    element:<PageLayout></PageLayout>,
    children:[
      {
        path:'/service',
        element:<ServicesPage></ServicesPage>
      },
      {
        path:'/service/mobileapp',
        element:<ServicesMobileDevelopment></ServicesMobileDevelopment>
      },
      {
        path:'/service/logo',
        element:<ServicesMobileDevelopment></ServicesMobileDevelopment>
      }
    ]
  },{
    path:'/portfolio',
    element:<PageLayout></PageLayout>,
    children:[
      {
        path:'/portfolio',
        element:<PortfolioPage></PortfolioPage>
      },
      {
        path:'/portfolio/mobileapp',
        element:<PortfolioMobileDevelopment></PortfolioMobileDevelopment>
      },
      {
        path:'/portfolio/logo',
        element:<PortfolioPagelogo></PortfolioPagelogo>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
