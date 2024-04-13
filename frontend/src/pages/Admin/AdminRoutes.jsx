import React from 'react'
import { Navigate,Outlet } from 'react-router'
import { useSelector } from 'react-redux'

const AdminRoutes = () => {
  const {userInfo}=useSelector(state=>state.auth)
  
  return userInfo.isAdmin ? (<Outlet/>):<Navigate to="/loginAdmin" replace/>
}

export default AdminRoutes