import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './signup'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import LoginPage from './login';
import App from './App';
import Slideshow from './slideshow';
import { WomenWear } from './women\'swear';
import { Makeup } from './makeup';
import { SkinCare } from './skincare';
import  Admin  from './admin';
import Items from './manageproduct';
import  { Makeupadd } from './makeupadd';
import { Womanwearadd } from './womanwearadd';
import { Skincareadd } from './skincareadd';
const loader = () => {
  let token = localStorage.getItem("token");
    if(!token){
      return redirect("/login");
    }

    return null
  };


  const loginLoader=() =>{
    let token = localStorage.getItem("token");

    if(token){
      return redirect("/admin");
    }
    return null;
  }


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
    loader: loginLoader
    
  },
  {
    path:'signup',
    element:<Signup/>
  },
  {
    path:'admin',
    element:<Admin/>,
    loader: loader,
    children: [
      {
        path: '',
        element: <Items/>
      },
      {
        path: 'manageproduct',
        element: <Items/>
      },
      { path:'womanwearadd',
      element:<Womanwearadd/>
    },
      {
       path:'makeupadd',
       element:<Makeupadd/> 
      },
      {
        path:'skincareadd',
        element:<Skincareadd/> 
       }
      
     
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
