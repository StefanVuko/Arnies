import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"


function Exercise(props: any) {

  const { username } = useContext(AuthContext)

  function addToFavorites(obj: Object) {
    fetch("http://localhost:5000/addFavoriteExercise",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(resp => {
        checkResponse(resp.status)
      })
  }

  function checkResponse(response: number) {
    if (response === 200) {
      console.log("Success!")
    }
    //Check if food has been added already
  }
  return (
    <>
      <section className="exercise--section">
        <div className="exercise--container">
          <div className="exercise--image--container">
            <img
              src={props.gifUrl}
              className="exercise--image">
            </img>
          </div>
          <div className="exercise--name--container">
            <h2
              onClick={() => {
                const obj = {
                  username: username,
                  id: props.id,
                  img: props.gifUrl,
                  name: props.name,
                  equipment: props.equipment,
                  bodyPart: props.bodyPart,
                  target: props.target
                }
                addToFavorites(obj)
              }}
              className="exercise--name">{props.name}
            </h2>
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