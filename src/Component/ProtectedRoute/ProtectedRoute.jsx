import React from 'react'
import Login from '../Login/Login.jsx'

export default function ProtectedRoute({children}) {
    if (localStorage.getItem('token')) {
        return children
    }else{
        return <Login/>
    }
  return <>
  
  
  </>
}
