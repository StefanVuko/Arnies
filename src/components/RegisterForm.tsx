import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function RegisterForm() {

  const { setIsLoggedIn, setUsername, setJwt } = useContext(AuthContext)

  function checkIfValidInput() {
    let isValidInput = false;

    (document.getElementById("username") as HTMLInputElement).value &&
      (document.getElementById("password") as HTMLInputElement).value &&
      (document.getElementById("firstName") as HTMLInputElement).value &&
      (document.getElementById("lastName") as HTMLInputElement).value &&
      (document.getElementById("email") as HTMLInputElement).value ?
      isValidInput = true : isValidInput = false;

    return isValidInput
  }

  function submitRegister() {

    if (!checkIfValidInput()) {
      const elements = Array.from(document.getElementsByClassName("register--input--text") as HTMLCollectionOf<HTMLElement>)
      elements.forEach(element => {
        if (!(element as HTMLInputElement).value) {
          element.style.border = "1px solid red";
          (element as HTMLInputElement).placeholder = `Please input a ${element.id}`
        }
        else {
          element.style.border = "none";
        }
      });
      return;
    }

    const username = (document.getElementById("username") as HTMLInputElement).value
    const password = (document.getElementById("password") as HTMLInputElement).value
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const newUser = { username, password, firstName, lastName, email }
    let status = 0

    fetch("http://localhost:5000/register",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(resp => {
        status = resp.status
        return resp
      })
      .then(resp => resp.json())
      .then(resp => {
        checkResponse(status, resp.accessToken)
      })
  }

  function checkResponse(response: number, accessToken: any) {
    if (response === 200) {
      setUsername((document.getElementById("username") as HTMLInputElement).value)
      setIsLoggedIn(true)
      setJwt(accessToken)
    }
    if (response === 401) {
      alert("User already exists!")
    }
  }

  return (
    <div className="register--content">
      <div className="register--form">
        <div className="register--title">
          <h1 className="register--title--h1">Arnie's</h1>
        </div>
        <div className="register--form--input">
          <form>
            <label className="register--form--label" htmlFor="email">E-Mail</label>
            <input id="email" className="register--input--text" type="text"></input>
            <label className="register--form--label" htmlFor="username">Username</label>
            <input id="username" className="register--input--text" type="text"></input>
            <label className="register--form--label" htmlFor="password">Password</label>
            <input id="password" className="register--input--text" type="password"></input>
            <label className="register--form--label" htmlFor="firstName">First name</label>
            <input id="firstName" className="register--input--text" type="text"></input>
            <label className="register--form--label" htmlFor="lastName">Last name</label>
            <input id="lastName" className="register--input--text" type="text"></input>
            <div className="register--input--container">

            </div>

          </form>
          <input
            className="register--input--button"
            type="submit"
            value="Register"
            onClick={submitRegister}>
          </input>
        </div>

      </div>
    </div>
  )
}

export default RegisterForm