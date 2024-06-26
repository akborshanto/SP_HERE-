import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes';
import './index.css'
import AuthProviders from './firebase/AuthContext/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>



  <AuthProviders>
  <RouterProvider router={router}></RouterProvider>


  </AuthProviders>



  </React.StrictMode>,
)
