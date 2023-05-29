function RegisterForm() {
  return (
    <div className="register--content">
      <div className="register--form--text">
        <p>“You have to remember something: Everybody pities the weak; jealousy you have to earn.” </p>
      </div>
      <div className="register--form">
        <div className="register--title">
          <h1 className="register--title--h1">Arnie's</h1>
        </div>
        <div className="register--form--input">
          <form>
            <label htmlFor="email">E-Mail:</label>
            <input id="email" className="register--input--text" type="text"></input>
            <label htmlFor="username">Username:</label>
            <input id="username" className="register--input--text" type="text"></input>
            <label htmlFor="password">Password:</label>
            <input id="password" className="register--input--text" type="password"></input>
            <label htmlFor="firstName">First name:</label>
            <input id="firstName" className="register--input--text" type="text"></input>
            <label htmlFor="lastName">Last name:</label>
            <input id="lastName" className="register--input--text" type="text"></input>
            <div className="register--input--container">

            </div>

          </form>
          <input className="register--input--button" type="submit" value="Register"></input>
        </div>

      </div>
    </div>
  )
}

export default RegisterForm