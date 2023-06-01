import { useState } from "react"

function Exercise(props: any) {
  return (
    <>
      <section className="exercise--section">
        <div className="exercise--container">
          <div className="exercise--image--container">
            <img src={props.gifUrl} className="exercise--image"></img>
          </div>
          <div className="exercise--name--container">
            <h2 className="exercise--name">{props.name}</h2>
          </div>
          <div className="exercise--info--container">
            <p className="exercise--info--p">Equipment <span className="exercise--info--span">{props.equipment}</span></p>
            <p className="exercise--info--p">Body Part <span className="exercise--info--span">{props.bodyPart}</span></p>
            <p className="exercise--info--p">Target <span className="exercise--info--span">{props.target}</span></p>
            <p className="exercise--info--p">ID <span className="exercise--info--span">{props.id}</span></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Exercise