import { useEffect, useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

function SettingsComp() {

  const { username, setUsername } = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:5000/getUserInfo/${username}`)
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

    fetch(`http://localhost:5000/setUserInfo/${username}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
      })
      .then(resp => {
        checkResponse(resp.status)
      })
  }

  function checkResponse(response: number) {
    if (response === 200) {
      setUsername((document.getElementById("username") as HTMLInputElement).value)
      console.log("success!")
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
            onClick={handleClick}
            className="register--input--button"
            type="submit"
            value="Update">
          </input>
        </div>
      </div>
    </div>
  )
}

export default SettingsComp