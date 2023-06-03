import { useEffect } from "react"

function RecipeDetailed(props: any) {

  function calculateTotal() {
    const array = props.nutrients.nutrients

    const fatsArray = array[1]
    const carbsArray = array[3]
    const proteinArray = array[8]

    const total = fatsArray.amount + carbsArray.amount + proteinArray.amount
    return total
  }

  function calculatePercentages() {
    const total = calculateTotal()

    const array = props.nutrients.nutrients

    const fatsAmount = array[1].amount
    const carbsAmount = array[3].amount
    const proteinAmount = array[8].amount

    const fatPercentage = (fatsAmount * 100) / total
    const carbsPercentage = (carbsAmount * 100) / total
    const proteinPercentage = (proteinAmount * 100) / total

    return [fatPercentage, carbsPercentage, proteinPercentage]
  }

  function setPercentages() {

    const percentages = calculatePercentages()

    let fatsContainer = document.getElementById("rcp--fats--container")
    let carbsContainer = document.getElementById("rcp--carbs--container")
    let proteinContainer = document.getElementById("rcp--protein--container")

    if (fatsContainer != null) {
      fatsContainer.style.width = `${percentages[0]}%`
    }

    if (carbsContainer != null)
      carbsContainer.style.width = `${percentages[1]}%`

    if (proteinContainer != null)
      proteinContainer.style.width = `${percentages[2]}%`
  }

  const decimalPrice = (props.price / 100).toFixed(2)

  useEffect(() => {
    setPercentages()
  }, [])

  return (
    < div className="rcp--content--container" >
      <div className="rcp--rcp--container">
        <div className="rcp--image--container">
          <img className="rcp--image" src={props.img}></img>
        </div>
        <div className="rcp--info--container">
          <h2 className="rcp--title"><a href={props.url}>{props.title}</a></h2>
          <p className="rcp--info--text">Number of ingredients: <span className="rcp--text">{props.numberOfIngredients}</span></p>
          <p className="rcp--info--text">Price per serving: <span className="rcp--text">{decimalPrice}$</span></p>
          <div className="rcp--nutrient--container">
            <div id="rcp--protein--container">
              <span className="rcp--nutrient--value">Protein</span>
            </div>
          </div>
          <div className="rcp--nutrient--container">
            <div id="rcp--carbs--container">
              <span className="rcp--nutrient--value">Carbs</span>
            </div>
          </div>
          <div className="rcp--nutrient--container">
            <div id="rcp--fats--container">
              <span className="rcp--nutrient--value">Fats</span>
            </div>
          </div>
        </div>
        <div className="rcp--description--container">
          <h2 className="rcp--description--title">Description</h2>
          <p className="rcp--description--text">{props.description}</p>
        </div >
      </div >
    </div >
  )
}

export default RecipeDetailed