import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"
import RegisterSection from "../components/RegisterSection"

const sections = [{
  image: "exercise.jpg",
  text1: "Start working out now and improve your life instantly",
  text2: "All the information you need at one place and a variety of exercises to choose from",
  text3: "So what's stopping you?",
  buttonTxt: "Start working out now!",
  buttonUrl: "workout"
},
{
  image: "food.jpg",
  text1: "Eating well is 50% of the success and actually working out the other 50%",
  text2: "Calculate your caloric intake on this page and discover how many macronutries you should eat",
  text3: "Enjoy lots of tasty recipes",
  buttonTxt: "Start eating healthier!",
  buttonUrl: "nutrition"
},
{
  image: "clock.jpg",
  text1: "Track all of your progress conveniently and easy",
  text2: "A calendar that shows you, what you have achieved on each date",
  text3: "Stay motivated to continue",
  buttonTxt: "Show my progress!",
  buttonUrl: "tracker"
},
{
  image: "about.jpg",
  text1: "Find out more about us and how this website was created",
  text2: "A team of 2 students at FH Campus Wien",
  text3: "This is a project for our web development class made by Stefan and Marcella",
  buttonTxt: "Find more about us!",
  buttonUrl: "about"
},
]

function Home() {

  /*function setNotif() {
    if (count == 0 && jwt) {
      setNotification("Successfully logged in")
      setHasSucceeded(true)
      setTimeout(() => {
        setNotification("")
        setCount(1)
      }, 2000);
    }

    if (count == 1 && !jwt) {
      setNotification("Successfully logged out")
      setHasSucceeded(true)
      setTimeout(() => {
        setNotification("")
      }, 2000);
    }

    if (count == 1 && jwt) {
      setNotification("Successfully logged in")
      setHasSucceeded(true)
      setTimeout(() => {
        setNotification("")
      }, 2000);
    }
  }

  useEffect(() => {
    setNotif()
  }, [])*/

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