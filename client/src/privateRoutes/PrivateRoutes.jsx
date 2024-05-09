import React, { useContext } from 'react'
import { AuthContext } from '../firebase/AuthContext/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  const {user,loading}=useContext(AuthContext)
  //location
  const location=useLocation()
  console.log(location.pathname)
//loading
  if(loading){
    return <h1>LOADING....................................</h1>
  }
//user email private route
if(user?.email){
  return children
}


  return (<Navigate to='/login' replace state={location.pathname}></Navigate>)
}

export default PrivateRoutes
