import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import RecipeDetailed from "../components/RecipeDetailed";
import { recipeData } from "../data/recipeDetailed";

function RecipeInformation() {

  const [data, setData] = useState(recipeData)
  const [hasReceivedData, setHasReceivedData] = useState(false)

  function getId() {
    const url = window.location.href

    const queryString = url.split('?')[1];
    const params = new URLSearchParams(queryString);
    const id = params.get('id')

    return id
  }

  function removeTags(text: string) {
    let cleanText
    if (text !== undefined)
      cleanText = text.replace(/<.*?>/g, '')

    return cleanText
  }

  const getRecipeData = async (id: string) => {
    fetch(`http://localhost:5000/getRecipeInformation?id=${id}`)
      .then(resp => resp.json())
      .then(resp => {
        setData(JSON.parse(resp))
        setHasReceivedData(true)
      })
  }

  useEffect(() => {
    const id = getId()
    getRecipeData(id ? id : "")
  }, [])

  return (
    <>
      <Navbar />
      <div className="content--container">
        <div className="nutr--images">
          <img src="./src/resources/images/bg1.jpg" className="nutr--image1"></img>
          <img src="./src/resources/images/bg2.png" className="nutr--image2"></img>
          <img src="./src/resources/images/bg3.jpg" className="nutr--image3"></img>
        </div>
        {hasReceivedData && <RecipeDetailed
          price={data.pricePerServing}
          title={data.title}
          url={data.spoonacularSourceUrl}
          img={data.image}
          description={removeTags(data.summary)}
          nutrients={data.nutrition}
          numberOfIngredients={data.extendedIngredients.length}
        />}
      </div>
      <Footer />
    </>
  )
}

export default RecipeInformation