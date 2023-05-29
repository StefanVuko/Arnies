function Section(props: any) {
    return (
        <section>
            <div className="section--container">
                {props.isFlipped ? (
                    <>
                        <RenderText></RenderText>
                        <RenderImage img={props.img}></RenderImage>
                    </>) : (
                    <>
                        <RenderImage img={props.img}></RenderImage>
                        <RenderText></RenderText>
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
                    <p>Text1</p>
                </div>
                <div className="section--text">
                    <p>Text2</p>
                </div>
                <div className="section--text">
                    <p>Text3</p>
                </div>
            </div>
            <div className="section--button--container">
                <button className="section--button">Start working out now!</button>
            </div>
        </div>
    )
}

export default Section