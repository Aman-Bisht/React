import React, { Children } from 'react'
import { useAuth } from './auth'
import { Navigate } from 'react-router-dom'

function RequireAuth({children}) {
    const auth = useAuth()
    if(!auth.user){
        return <Navigate to="/login"/>
    }
  return children
}

export default RequireAuth