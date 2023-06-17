import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LoginForm from "../components/LoginForm"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

function Login() {

  const { isLoggedIn } = useContext(AuthContext)

  if (isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="content--container">
        <div className="register--header--container">
          <p className="register--text--head">We are glad that you came back :) </p>
        </div>
        <LoginForm />
      </div>
      <Footer></Footer>
    </>
  )
}

export default Login