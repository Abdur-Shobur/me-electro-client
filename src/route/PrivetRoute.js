import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserAuth } from '../auth/Auth'
import PuffLoader from 'react-spinners/PuffLoader'

function PrivetRoute({ children }) {
  const { user, loading } = useContext(UserAuth)
  const location = useLocation()

  if (loading) {
    return (
      <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <PuffLoader color="#36d7b7" />
        </div>
      </div>
    )
  }

  if (user && user.uid) {
    return children
  }

  return <Navigate to="/sign-in" state={{ from: location }} replace />
}

export default PrivetRoute
