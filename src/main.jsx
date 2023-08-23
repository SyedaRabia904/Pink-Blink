import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './login';
import App from './App';

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path: 'login',
    element: <LoginPage />,
    
  },
  {
    path:'signup',
    element:<Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
