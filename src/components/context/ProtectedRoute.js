import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserAuth } from './AuthContext'

const ProtectedRoute = ({children}) => {

    const location = useLocation();

    const { user } = UserAuth();

    if (!user) {
      return <Navigate to='/' />
    }
    
    console.log(location)
    return children
}

export default ProtectedRoute