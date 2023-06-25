import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Cookies from "js-cookie";


function LoginForm() {

  //const x = useContext(AuthContext)
  const { setUsername, setJwt, setCount } = useContext(AuthContext)

  function checkIfValidInput() {
    let isValidInput = false;

    (document.getElementById("username") as HTMLInputElement).value &&
      (document.getElementById("password") as HTMLInputElement).value ?
      isValidInput = true : isValidInput = false;

    return isValidInput
  }

  function submitLogin() {

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
    const user = { username, password }
    let status = 0

    fetch("http://localhost:5000/login",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(resp => {
        status = resp.status
        return resp
      })
      .then(resp => {
        if (status === 200)
          return resp.json()
        else {
          return resp
        }
      })
      .then(resp => {
        checkResponse(status, resp.accessToken)
      })
  }

  function checkResponse(response: number, accessToken: any) {
    if (response === 200) {
      Cookies.set("jwtToken", accessToken)
      setUsername((document.getElementById("username") as HTMLInputElement).value)
      setJwt(accessToken)
      setCount(1)
    }
    if (response === 401) {
      alert("User not found or wrong password!")
    }
  }

  return (
    <div className="register--content">
      <div className="register--form--text">
      </div>
      <div className="register--form">
        <div className="register--title">
          <h1 className="register--title--h1">Arnie's</h1>
        </div>
        <div className="register--form--input">
          <form>
            <label className="register--form--label" htmlFor="username">Username</label>
            <input id="username" className="register--input--text" type="text"></input>
            <label className="register--form--label" htmlFor="password">Password</label>
            <input id="password" className="register--input--text" type="password"></input>
            <p className="register--noUserText"><a className="register--noUserText" href="/register">Not a user? Register now!</a></p>
          </form>
          <input className="register--input--button"
            type="submit"
            value="Login"
            onClick={submitLogin}>
          </input>
        </div>
      </div>
    </div>
  )
}

export default LoginForm