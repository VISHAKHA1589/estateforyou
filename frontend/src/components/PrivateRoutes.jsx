import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoutes = () => {
  const { user, isAuthenticated } = useAuth0();
  const {userInfo}= useSelector((state)=> state.auth);
  return isAuthenticated? <Outlet/> : <Navigate to="/" replace/>
}

export default PrivateRoutes