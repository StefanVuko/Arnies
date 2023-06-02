function Recipe(props: any) {
  return (
    <div className="recipe--container">
      <div className="recipe--image--container">
        <img src={props.img}
          className="recipe--image">
        </img>
      </div>
      <div className="recipe--info--container">
        <div className="recipe--name--container">
          <p className="recipe--name">{props.title}</p>
        </div>
        <div className="recipe--info--container2">
          <p className="recipe--stars">★★★★★</p>
          <img className="recipe--image--add" src="./src/resources/images/add.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Recipe