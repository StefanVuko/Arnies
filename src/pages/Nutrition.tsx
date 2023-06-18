import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Recipe from "../components/Recipe"
import { recipeData } from "../data/recipe"
import { useState } from "react"

function Nutrition() {

  const [newRecipeData, setNewRecipeData] = useState(recipeData)

  const getCuisine = async (clickedCuisine: string) => {
    fetch(`http://localhost:5000/getCuisine?cuisine=${clickedCuisine}`)
      .then(resp => resp.json())
      .then(resp => {
        setNewRecipeData(JSON.parse(resp).results)
      })
  }

  function handleClick(event: any) {
    let cuisine = ""
    event.target.alt ? cuisine = event.target.alt : cuisine = event.target.textContent
    getCuisine(cuisine)
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="content--container">
        <div className="nutr--images">
          <img src="./src/resources/images/bg1.jpg" className="nutr--image1"></img>
          <img src="./src/resources/images/bg2.png" className="nutr--image2"></img>
          <img src="./src/resources/images/bg3.jpg" className="nutr--image3"></img>
        </div>
        <div className="cuisine--content--container">
          <div onClick={handleClick} className="cuisine--container">
            <img alt="american" className="cuisine--image" src="./src/resources/images/american.jpg"></img>
            <p className="cuisine--text">American</p>
          </div>
          <div onClick={handleClick} className="cuisine--container">
            <img alt="asian" className="cuisine--image" src="./src/resources/images/asian.jpg"></img>
            <p className="cuisine--text">Asian</p>
          </div>
          <div onClick={handleClick} className="cuisine--container">
            <img alt="french" className="cuisine--image" src="./src/resources/images/french.jpg"></img>
            <p className="cuisine--text">French</p>
          </div>
          <div onClick={handleClick} className="cuisine--container">
            <img alt="german" className="cuisine--image" src="./src/resources/images/german.jpg"></img>
            <p className="cuisine--text">German</p>
          </div>
          <div onClick={handleClick} className="cuisine--container">
            <img alt="greek" className="cuisine--image" src="./src/resources/images/greek.jpg"></img>
            <p className="cuisine--text">Greek</p>
          </div>
          <div onClick={handleClick} className="cuisine--container">
            <img alt="italian" className="cuisine--image" src="./src/resources/images/italian.jpg"></img>
            <p className="cuisine--text">Italian</p>
          </div>
          <div onClick={handleClick} className="cuisine--container">
            <img alt="mexican" className="cuisine--image" src="./src/resources/images/mexican.jpg"></img>
            <p className="cuisine--text">Mexican</p>
          </div>
        </div>
        <h2 className="recipe--header">Food we recommend</h2>
        <div className="recipe--content--container">
          {newRecipeData.map(({ image, title, id }) => {
            const randomDecimal = Math.random() * 3;
            const stars = Math.floor(randomDecimal) + 3
            return (
              <Recipe
                key={id}
                id={id}
                img={image}
                title={title}
                stars={stars}
                isFavorite={false}
              />
            )
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Nutrition