import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import RegisterForm from "../components/RegisterForm"

function Register() {
  return (
    <>
      <Navbar />
      <div className="content--container">
        <div className="register--header--container">
          <p className="register--text--head">“You have to remember something: Everybody pities the weak; jealousy you have to earn.” </p>
        </div>
        <RegisterForm />
      </div>
      <Footer />
    </>
  )
}

export default Register