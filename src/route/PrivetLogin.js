import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../auth/Auth'
import PuffLoader from 'react-spinners/PuffLoader'
function PrivetLogin({ children }) {
  const { user, loading } = useContext(UserAuth)

  if (loading) {
    return (
      <div class="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <PuffLoader color="#36d7b7" />
        </div>
      </div>
    )
  }

  if (!user && !user?.uid) {
    return children
  }

  return <Navigate to="/" />
}

export default PrivetLogin
