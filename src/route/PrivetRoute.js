import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../auth/Auth'

function PrivetRoute({ children }) {
  const { user } = useContext(UserAuth)
  if (user && user.uid) {
    return children
  }
  return <Navigate to="/sign-in" />
}

export default PrivetRoute
