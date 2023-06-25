import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import Cookies from "js-cookie"

function Logout() {
  const { setJwt, setUsername, setCount } = useContext(AuthContext)
  setUsername("")
  setJwt("")
  setCount(1)
  Cookies.set("jwtToken", "")

  return <Navigate to="/" />
}

export default Logout