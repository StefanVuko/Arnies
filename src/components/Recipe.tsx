function Recipe(props: any) {

  let starString = ""
  for (let x = 0; x < props.stars; x++) {
    starString += "★"
  }
  return (
    <div className="recipe--container">
      <div className="recipe--image--container">
        <img
          onClick={() => location.href = `/recipeInformation?id=${props.id}`}
          src={props.img}
          className="recipe--image">
        </img>
      </div>
      <div className="recipe--info--container">
        <div className="recipe--name--container">
          <p className="recipe--name">{props.title}</p>
        </div>
        <div className="recipe--info--container2">
          <p className="recipe--stars">{starString}</p>
          <img className="recipe--image--add" src="./src/resources/images/add.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Recipe