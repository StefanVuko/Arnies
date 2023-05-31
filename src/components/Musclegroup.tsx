function Musclegroup(props: any) {
  return (
    <div className="bodypart--container">
      <div className="bodypart--header--container">
        <img className="bodypart--image" src={`./src/resources/images/${props.img}`}></img>
        <h2 className="bodypart--header">{props.group}</h2>
      </div>
      <div className="bodypart--text--container">
        <div onClick={props.onClick} className="bodypart--p--container">
          <p className="bodypart--text">{props.exercise1}</p>
        </div>
        <div onClick={props.onClick} className="bodypart--p--container">
          <p className="bodypart--text">{props.exercise2}</p>
        </div>
        <div onClick={props.onClick} className="bodypart--p--container">
          <p className="bodypart--text">{props.exercise3}</p>
        </div>
        <div onClick={props.onClick} className="bodypart--p--container2">
          <p className="bodypart--text">{props.exercise4}</p>
        </div >
      </div >
    </div>
  )
}

export default Musclegroup