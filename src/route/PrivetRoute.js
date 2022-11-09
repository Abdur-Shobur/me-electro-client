import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserAuth } from '../auth/Auth'

function PrivetRoute({ children }) {
  const { user, loading } = useContext(UserAuth)
  const location = useLocation()
  if (loading) {
    return <h1>Loading......</h1>
  }
  if (user && user.uid) {
    return children
  }
  return <Navigate to="/sign-in" state={{ from: location }} replace />
}

export default PrivetRoute
