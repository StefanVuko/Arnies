import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

function Logout() {
  const { setIsLoggedIn, setUsername } = useContext(AuthContext)
  setUsername("")
  setIsLoggedIn(false)

  return <Navigate to="/" />
}

export default Logout