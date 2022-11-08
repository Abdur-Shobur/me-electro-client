import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import app from './Firebase.init'
const auth = getAuth(app)

export const UserAuth = createContext()

function Auth({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  // create user with email and password
  const create_user = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const sign_in = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // email password login

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (usr) => {
      setLoading(false)
      setUser(usr)
    })
    return () => unsub()
  }, [])

  const value = {
    user,
    create_user,
    sign_in,
    loading,
  }

  return <UserAuth.Provider value={value}>{children}</UserAuth.Provider>
}

export default Auth
