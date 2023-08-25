import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './login';
import App from './App';
import Slideshow from './slideshow';
import { WomenWear } from './women\'swear';
import { Makeup } from './makeup';
import { SkinCare } from './skincare';
import  Admin  from './admin';
import { Myinfo } from './myinfo';

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Slideshow/>
      },
      {
        path:'/WomenWear',
        element:<WomenWear/>
      },
      {
        path:'/Makeup',
        element:<Makeup/>
      },
      {
        path:'/SkinCare',
        element:<SkinCare/>
      },
    ]
  },
  {
    path: 'login',
    element: <LoginPage />,
    
  },
  {
    path:'signup',
    element:<Signup/>
  },
  {
    path:'admin',
    element:<Admin/>,
    children:[
    {
      path:'admin',
      element:<Myinfo/>
    },
    ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
