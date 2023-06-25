import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import Recipe from "../components/Recipe"
import Exercise from "../components/Exercise"

function Favorites() {

  const [hasReceivedData, setHasReceivedData] = useState(false)
  const [favoriteRecipes, setFavoriteRecipes] = useState([])
  const [favoriteWorkouts, setFavoriteWorkouts] = useState([])
  const { jwt } = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:5000/getUserFavorites`,
      {
        method: "GET",
        headers: {
          "Authorization": jwt ? jwt : ""
        }
      })
      .then(resp => resp.json())
      .then(resp => {
        setFavoriteRecipes(resp.favoriteRecipes)
        setFavoriteWorkouts(resp.favoriteWorkouts)
        setHasReceivedData(true)
      })
  }, [favoriteRecipes, favoriteWorkouts])

  return (
    <>
      <Navbar />
      <div className="content--container">
        <h2 className="favorite--header">Favorite Recipes: </h2>
        <section className="recipe--favorites">
          {hasReceivedData && favoriteRecipes.length > 0 ?
            favoriteRecipes.map((recipe: any) => {
              return (
                <Recipe
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  img={recipe.img}
                  stars={recipe.stars}
                  isFavorite={true}
                ></Recipe>
              )
            })
            : <p className="favorite--text">You have no favorites added!</p>}
        </section>
        <h2 className="favorite--header">Favorite Workouts: </h2>
        <section>
          {hasReceivedData && favoriteWorkouts.length > 0 ?
            favoriteWorkouts.map((workout: any) => {
              return (
                <Exercise
                  key={workout.id}
                  id={workout.id}
                  name={workout.name}
                  gifUrl={workout.img}
                  equipment={workout.equipment}
                  bodyPart={workout.bodypart}
                  target={workout.target}
                  isFavorite={true}
                ></Exercise>
              )
            })
            : <p className="favorite--text">You have no workouts added!</p>}
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Favorites