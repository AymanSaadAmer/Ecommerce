import React, { useEffect, useState } from 'react'
import style from './ProtectedRoute.module.css'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
    console.log(props);
    if (localStorage.getItem('userToken')!== null)
    {
      // Navigate to component
      return props.children
    }
    else{
      //Navigate to Login  
        return <Navigate to={'./../Login'}/>
    }
  return (
    <>
      
    </>
  )
}
