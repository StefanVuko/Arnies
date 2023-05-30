import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"
import RegisterSection from "../components/RegisterSection"

const sections = [{
  image: "exercise.jpg",
  text1: "Start working out now",
  text2: "All the information you need at one place",
  text3: "So what's stopping you?",
  buttonTxt: "Start working out now!",
  buttonUrl: "workout"
},
{
  image: "food.jpg",
  text1: "Eating well is 50% of the success",
  text2: "Calculate your caloric intake",
  text3: "Enjoy lots of tasty recipes",
  buttonTxt: "Start eating healthier!",
  buttonUrl: "nutrition"
},
{
  image: "clock.jpg",
  text1: "Track all of your progress",
  text2: "Conveniently and easy",
  text3: "Stay motivated to continue",
  buttonTxt: "Show my progress!",
  buttonUrl: "tracker"
},
{
  image: "about.jpg",
  text1: "Get to know us",
  text2: "A team of 2 students",
  text3: "This is a project for university",
  buttonTxt: "Find more about us!",
  buttonUrl: "about"
},
]

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      {sections.map(({ image, text1, text2, text3, buttonTxt, buttonUrl }, index) => {
        const isFlipped = (index + 1) % 2
        return (
          <Section
            key={index}
            img={image}
            text1={text1}
            text2={text2}
            text3={text3}
            buttonTxt={buttonTxt}
            buttonUrl={buttonUrl}
            isFlipped={isFlipped} />
        )
      })}
      <RegisterSection
        text1="Ready to start your journey?"
        text2="Join us today and see results quickly"
        text3="Everything is free!"
        buttonTxt="Register now!"
        buttonUrl="register" />
      <Footer></Footer>
    </>
  )
}

export default Home