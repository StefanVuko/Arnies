import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LoginForm from "../components/LoginForm"

function Login() {
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