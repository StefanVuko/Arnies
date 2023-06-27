import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import Alert from "./Alert";


function Exercise(props: any) {

  const { jwt } = useContext(AuthContext)
  const [notification, setNotification] = useState("");
  const [hasSucceeded, setHasSucceeded] = useState(false);

  function addToFavorites(obj: Object) {
    fetch("http://localhost:5000/addFavoriteExercise",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": jwt ? jwt : ""
        },
        body: JSON.stringify(obj)
      })
      .then(resp => {
        checkResponse(resp.status)
      })
  }

  function removeFromFavorites(obj: Object) {
    fetch("http://localhost:5000/removeFavoriteExercise",
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": jwt ? jwt : ""
        },
        body: JSON.stringify(obj)
      })
      .then(resp => {
        checkResponse(resp.status)
      })
  }

  function checkResponse(response: number) {
    if (response === 200) {
      setNotification("Successfully added / removed exercise to favorites");
      setHasSucceeded(true)
      setTimeout(() => {
        setNotification("");
      }, 2000);
    }

    if (response === 401) {
      setNotification("Exercise already in favorites!");
      setHasSucceeded(false)
      setTimeout(() => {
        setNotification("");
      }, 2000);
    }
  }

  return (
    <>
      {notification &&
        <Alert
          text={notification}
          hasSucceeded={hasSucceeded}
          onClose={() => setNotification("")}
        />}
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
                  id: props.id,
                  img: props.gifUrl,
                  name: props.name,
                  equipment: props.equipment,
                  bodyPart: props.bodyPart,
                  target: props.target
                }
                props.isFavorite ? removeFromFavorites(obj) : addToFavorites(obj)
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