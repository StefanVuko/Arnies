import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Section img="exercise.jpg" isFlipped={false}></Section>
            <Section img="food.jpg" isFlipped={true}></Section>
            <Section img="clock.jpg" isFlipped={false}></Section>
            <Section img="about.jpg" isFlipped={true}></Section>
            <Footer></Footer>
        </>
    )
}

export default Home