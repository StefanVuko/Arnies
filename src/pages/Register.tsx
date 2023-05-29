import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import RegisterForm from "../components/RegisterForm"

function Register() {
  return (
    <>
      <Navbar />
      <div className="content--container">
        <RegisterForm />
      </div>
      <Footer />
    </>
  )
}

export default Register