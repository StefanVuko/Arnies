function SectionFlip(props: any) {
    return (
        <section>
            <div className="section--container">
                <div className="section--info--container2">
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
                <div className="section--image--container">
                    <img className="section--image" src={`./src/resources/images/${props.img}`}></img>
                </div>
            </div>
        </section>
    )
}

export default SectionFlip