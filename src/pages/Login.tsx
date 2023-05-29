import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LoginForm from "../components/LoginForm"

function Login() {
  return (
    <>
      <Navbar></Navbar>
      <div className="content--container">
        <LoginForm />
      </div>
      <Footer></Footer>
    </>
  )
}

export default Login