import { useState, useEffect } from "react"
import "../styles/about.css"

function AboutComp() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["./src/resources/images/about1.jpg", "./src/resources/images/about2.jpg", "./src/resources/images/about3.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [])

  return (
    <>
      <div className="about--info--container">
        <h1 className="about--info--title">
          This is Arnie's
        </h1>
        <p className="about--info--text">
          Arnie's is a free to use platform to motivate you to start working out.
          We offer many tools such as a selection of exercises, progress tracking and show you neat recipes! <br /><br />
          This website was made as a project for our UNI by Stefan and Marcella using React for the frontend and ExpressJS for the backend.
        </p>
      </div>
      <div className="about--image--container">
        <img
          id="about--image"
          src={images[currentImageIndex]}
        >
        </img>
        <p className="about--image--text">Start working out now!</p>
      </div>
    </>
  )
}

export default AboutComp