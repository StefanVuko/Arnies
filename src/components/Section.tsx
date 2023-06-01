function Section(props: any) {
  return (
    <section>
      <div className="section--container">
        {props.isFlipped ? (
          <>
            <RenderText
              text1={props.text1}
              text2={props.text2}
              text3={props.text3}
              buttonTxt={props.buttonTxt}
              buttonUrl={props.buttonUrl}>
            </RenderText>
            <RenderImage img={props.img}></RenderImage>
          </>) : (
          <>
            <RenderImage img={props.img}></RenderImage>
            <RenderText
              text1={props.text1}
              text2={props.text2}
              text3={props.text3}
              buttonTxt={props.buttonTxt}
              buttonUrl={props.buttonUrl}>
            </RenderText>
          </>)}
      </div>
    </section>
  )
}

function RenderImage(props: any) {
  return (
    <div className="section--image--container">
      <img className="section--image" src={`./src/resources/images/${props.img}`}></img>
    </div>
  )
}

function RenderText(props: any) {
  return (
    <div className="section--info--container">
      <div className="section--text--container">
        <div className="section--text">
          <p>{props.text1}. {props.text2}. {props.text3}</p>
        </div>
      </div>
      <div className="section--button--container">
        <button onClick={() => { location.href = `http://localhost:5173/${props.buttonUrl}` }} className="section--button">{props.buttonTxt}</button>
      </div>
    </div>
  )
}

export default Section