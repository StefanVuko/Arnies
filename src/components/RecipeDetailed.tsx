function RecipeDetailed() {
  return (
    <div className="rcp--content--container">
      <div className="rcp--rcp--container">
        <div className="rcp--image--container">
          <img className="rcp--image" src="./src/resources/images/back.png"></img>
        </div>
        <div className="rcp--info--container">
          <h2 className="rcp--title"><a href="https://google.at">Epic food name</a></h2>
          <p>Number of ingredients: <span className="rcp--text">7</span></p>
          <p>Price per serving: <span className="rcp--text">2$</span></p>
          <div className="rcp--nutrient--container">
            <div className="rcp--protein--container">
              <span className="rcp--nutrient--value">Protein</span>
            </div>
          </div>
          <div className="rcp--nutrient--container">
            <div className="rcp--carbs--container">
              <span className="rcp--nutrient--value">Carbs</span>
            </div>
          </div>
          <div className="rcp--nutrient--container">
            <div className="rcp--fats--container">
              <span className="rcp--nutrient--value">Fats</span>
            </div>
          </div>
        </div>
        <div className="rcp--description--container">
          <h2 className="rcp--description--title">Description</h2>
          <p className="rcp--description--text">If you want to add more <b>gluten free</b> recipes to your recipe box, Roast Pork Florentine With Pomegranate Sauce might be a recipe you should try. This recipe serves 6. One portion of this dish contains approximately <b>38g of protein</b>, <b>12g of fat</b>, and a total of <b>382 calories</b>. For <b>$2.64 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. This recipe from Foodista requires salt and pepper, water, garlic, and bell pepper. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 75%</b>, which is good. Similar recipes include <a href="https://spoonacular.com/recipes/roast-pork-florentine-with-pomegranate-sauce-1289863">Roast Pork Florentine With Pomegranate Sauce</a>, <a href="https://spoonacular.com/recipes/christmas-dinner-maple-sugar-ginger-roast-pork-with-pomegranate-clementine-cranberry-sauce-45787\">Christmas dinner: Maple Sugar & Ginger Roast Pork with Pomegranate Clementine Cranberry Sauce</a>, and <a href="https://spoonacular.com/recipes/pomegranate-balsamic-pork-roast-116646\">Pomegranate Balsamic Pork Roast</a>. ok this is a test to see if this is overflowing</p>
        </div >
      </div >
    </div >
  )
}

export default RecipeDetailed