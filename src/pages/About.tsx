import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import AboutComp from "../components/AboutComp"
import { useState } from "react"

function About() {

  const [imageUrl, setImageUrl] = useState("./src/resources/images/about1.jpg")
  const images = ["./src/resources/images/about1.jpg", "./src/resources/images/about2.jpg", "./src/resources/images/about3.jpg"]

  function setUrl() {
    setTimeout(function () {
      if (imageUrl == images[0])
        setImageUrl(images[1])
      if (imageUrl == images[1])
        setImageUrl(images[2])
      if (imageUrl == images[2])
        setImageUrl(images[0])
      setUrl(); // Repeat the process
    }, 3000); // Wait for 1 second (1000 milliseconds)
  }

  setUrl()

  return (
    <>
      <Navbar />
      <AboutComp url={imageUrl}></AboutComp>
      <Footer />
    </>
  )
}

export default About