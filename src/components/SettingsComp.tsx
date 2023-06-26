import { useEffect, useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import Cookies from "js-cookie"

function SettingsComp() {

  const { username, setUsername, jwt, setJwt } = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:5000/getUserInfo`,
      {
        method: "GET",
        headers: {
          "Authorization": jwt ? jwt : ""
        }
      })
      .then(resp => resp.json())
      .then(resp => {
        (document.getElementById("email") as HTMLInputElement).value = resp.email;
        (document.getElementById("password") as HTMLInputElement).value = resp.password;
        (document.getElementById("username") as HTMLInputElement).value = resp.username;
        (document.getElementById("firstName") as HTMLInputElement).value = resp.lastName;
        (document.getElementById("lastName") as HTMLInputElement).value = resp.firstName;
      })
  }, [username])

  function handleClick() {
    const newUserData = {
      email: (document.getElementById("email") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value,
      username: (document.getElementById("username") as HTMLInputElement).value,
      lastName: (document.getElementById("firstName") as HTMLInputElement).value,
      firstName: (document.getElementById("lastName") as HTMLInputElement).value
    }

    let status = 0

    fetch(`http://localhost:5000/setUserInfo`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": jwt ? jwt : ""
        },
        body: JSON.stringify(newUserData)
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
    }
  }

  function changeUsername() {
    const newUsername = {
      username: (document.getElementById("username") as HTMLInputElement).value,
    }

    let status = 0

    fetch(`http://localhost:5000/updateUsername`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": jwt ? jwt : ""
        },
        body: JSON.stringify(newUsername)
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
            onClick={handleClick}
            className="register--input--button"
            type="submit"
            value="Update">
          </input>

          <input
            onClick={changeUsername}
            className="register--input--button"
            type="submit"
            value="Only change username">
          </input>
        </div>
      </div>
    </div>
  )
}

export default SettingsComp