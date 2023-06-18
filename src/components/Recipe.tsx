import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

function Recipe(props: any) {

  const { username } = useContext(AuthContext)

  let starString = ""
  for (let x = 0; x < props.stars; x++) {
    starString += "★"
  }

  function addToFavorites(obj: Object) {
    fetch("http://localhost:5000/addFavoriteRecipe",
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

  function removeFromFavorites(obj: Object) {
    fetch("http://localhost:5000/removeFavoriteRecipe",
      {
        method: 'DELETE',
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
    <div className="recipe--container">
      <div className="recipe--image--container">
        <Link to={`/recipeInformation?id=${props.id}`}>
          <img
            src={props.img}
            className="recipe--image">
          </img>
        </Link>
      </div>
      <div className="recipe--info--container">
        <div className="recipe--name--container">
          <p className="recipe--name">{props.title}</p>
        </div>
        <div className="recipe--info--container2">
          <p className="recipe--stars">{starString}</p>
          <img
            onClick={() => {
              const obj = { username: username, id: props.id, title: props.title, img: props.img, stars: props.stars }
              props.isFavorite ? removeFromFavorites(obj) : addToFavorites(obj)
            }}
            className="recipe--image--add"
            src={props.isFavorite ? "./src/resources/images/remove.png" : "./src/resources/images/add.png"}>
          </img>
        </div>
      </div>
    </div >
  )
}

export default Recipe