import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Recipe from "../components/Recipe"
import { recipeData } from "../data/recipe"

function Nutrition() {
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
          <div className="cuisine--container">
            <img className="cuisine--image" src="./src/resources/images/american.jpg"></img>
            <p className="cuisine--text">American</p>
          </div>
          <div className="cuisine--container">
            <img className="cuisine--image" src="./src/resources/images/asian.jpg"></img>
            <p className="cuisine--text">Asian</p>
          </div>
          <div className="cuisine--container">
            <img className="cuisine--image" src="./src/resources/images/french.jpg"></img>
            <p className="cuisine--text">French</p>
          </div>
          <div className="cuisine--container">
            <img className="cuisine--image" src="./src/resources/images/german.jpg"></img>
            <p className="cuisine--text">German</p>
          </div>
          <div className="cuisine--container">
            <img className="cuisine--image" src="./src/resources/images/greek.jpg"></img>
            <p className="cuisine--text">Greek</p>
          </div>
          <div className="cuisine--container">
            <img className="cuisine--image" src="./src/resources/images/italian.jpg"></img>
            <p className="cuisine--text">Italian</p>
          </div>
          <div className="cuisine--container">
            <img className="cuisine--image" src="./src/resources/images/mexican.jpg"></img>
            <p className="cuisine--text">Mexican</p>
          </div>
        </div>
        <h2 className="recipe--header">Food we recommend</h2>
        <div className="recipe--content--container">
          {recipeData.map(({ img, title, id }) => {
            return (
              <Recipe
                key={id}
                img={img}
                title={title}
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