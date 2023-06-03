import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import RecipeDetailed from "../components/RecipeDetailed";

function RecipeInformation() {

  function getId() {
    const url = window.location.href

    const queryString = url.split('?')[1];
    const params = new URLSearchParams(queryString);
    const id = params.get('id')

    return id
  }

  useEffect(() => {
    const id = getId()
    console.log(id)
  })

  return (
    <>
      <Navbar />
      <div className="content--container">
        <div className="nutr--images">
          <img src="./src/resources/images/bg1.jpg" className="nutr--image1"></img>
          <img src="./src/resources/images/bg2.png" className="nutr--image2"></img>
          <img src="./src/resources/images/bg3.jpg" className="nutr--image3"></img>
        </div>
        <RecipeDetailed />
      </div>
      <Footer />
    </>
  )
}

export default RecipeInformation