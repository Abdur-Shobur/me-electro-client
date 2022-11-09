import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../auth/Auth'

function PrivetLogin({ children }) {
  const { user, loading } = useContext(UserAuth)
  if (loading) {
    return <h1>Loading......</h1>
  }
  if (!user && !user?.uid) {
    return children
  }
  return <Navigate to="/" />
}

export default PrivetLogin
