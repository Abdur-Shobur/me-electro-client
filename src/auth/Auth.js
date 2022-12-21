import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
  updateProfile,
} from 'firebase/auth'

import app from './Firebase.init'
const provider = new GoogleAuthProvider()
const git_provider = new GithubAuthProvider()
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

  // email password login
  const sign_in = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // sign in with google pop up
  const sign_in_google_pop_up = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  // sign in with github pop up
  const sign_in_git_hub_pop_up = () => {
    setLoading(true)
    return signInWithPopup(auth, git_provider)
  }

  // update user name photo
  const updateName = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // signout

  const sign_out = () => {
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (usr) => {
      setUser(usr)
      setLoading(false)
    })
    return () => unsub()
  }, [setUser])

  const value = {
    user,
    create_user,
    setUser,
    sign_in,
    sign_in_google_pop_up,
    sign_in_git_hub_pop_up,
    updateName,
    sign_out,
    loading,
    setLoading,
  }

  return <UserAuth.Provider value={value}>{children}</UserAuth.Provider>
}

export default Auth
