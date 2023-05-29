function LoginForm() {
  return (
    <div className="register--content">
      <div className="register--form--text">
        <p>We are glad that you are coming back :) </p>
      </div>
      <div className="register--form">
        <div className="register--title">
          <h1 className="register--title--h1">Arnie's</h1>
        </div>
        <div className="register--form--input">
          <form>
            <label htmlFor="username">Username:</label>
            <input id="username" className="register--input--text" type="text"></input>
            <label htmlFor="password">Password:</label>
            <input id="password" className="register--input--text" type="password"></input>
            <div className="register--input--container">

            </div>

          </form>
          <input className="register--input--button" type="submit" value="Login"></input>
        </div>

      </div>
    </div>
  )
}

export default LoginForm