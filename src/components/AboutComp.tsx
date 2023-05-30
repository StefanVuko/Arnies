function AboutComp(props: any) {
  return (
    <>
      <div className="about--info--container">
        <h1 className="about--info--title">
          This is Arnie's
        </h1>
        <p className="about--info--text">
          Arnie's is a free to use platform to motivate you to start working out.
          We offer many tools such as a selection of exercises, progress tracking and show you neat recipes! <br /><br />
          This website was made as a project for our UNI by Stefan and Marcella using React for the frontend and ExpressJS for the backend.
        </p>
      </div>
      <div className="about--image--container">
        <img className="about--image" src={props.url}></img>
        <p className="about--image--text">Start working out now!</p>
      </div>
    </>
  )
}

export default AboutComp