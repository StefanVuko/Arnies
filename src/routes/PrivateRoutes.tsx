import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext";

function PrivateRoutes() {

  const { isLoggedIn } = useContext(AuthContext)
  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes