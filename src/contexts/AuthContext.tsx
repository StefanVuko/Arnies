/*import { useState, useContext, createContext } from "react"

const AuthContext = createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider(props: any) {

  const [authUser, setAuthUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
  }
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}*/

interface IAuthContext {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
  username: string
  setUsername: Dispatch<SetStateAction<string>>
  jwt: string
  setJwt: Dispatch<SetStateAction<string>>
}

import { createContext, SetStateAction, Dispatch } from "react";

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => { },
  username: "",
  setUsername: () => { },
  jwt: "",
  setJwt: () => { }
})