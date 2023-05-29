function RegisterSection(props: any) {
  return (
    <section>
      <div className="register--container">
        <div className="register--info--container">
          <div className="register--text--container">
            <div className="register--text">
              <p>{props.text1}</p>
            </div>
            <div className="register--text">
              <p>{props.text2}</p>
            </div>
            <div className="register--text">
              <p>{props.text3}</p>
            </div>
          </div>
          <div className="register--button--container">
            <button onClick={() => { location.href = `http://localhost:5173/${props.buttonUrl}` }} className="register--button">Register now!</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterSection