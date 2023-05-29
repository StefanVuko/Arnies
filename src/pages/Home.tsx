import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"
import RegisterSection from "../components/RegisterSection"

const sections = [{
    image: "exercise.jpg"
},
{
    image: "food.jpg"
},
{
    image: "clock.jpg"
},
{
    image: "about.jpg"
}]

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            {sections.map(({ image }, index) => {
                const isFlipped = (index + 1) % 2
                return (
                    <Section key={index} img={image} isFlipped={isFlipped} />
                )
            })}
            <RegisterSection></RegisterSection>
            <Footer></Footer>
        </>
    )
}

export default Home