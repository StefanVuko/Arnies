import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext";

function PrivateRoutes() {

  const { jwt } = useContext(AuthContext)
  return (
    jwt ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes