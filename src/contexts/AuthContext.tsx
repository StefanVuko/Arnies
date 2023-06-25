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
  username: string
  setUsername: Dispatch<SetStateAction<string>>
  jwt: string | undefined
  setJwt: Dispatch<SetStateAction<string | undefined>>
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

import { createContext, SetStateAction, Dispatch } from "react";

export const AuthContext = createContext<IAuthContext>({
  username: "",
  setUsername: () => { },
  jwt: "",
  setJwt: () => { },
  count: 0,
  setCount: () => { }
})