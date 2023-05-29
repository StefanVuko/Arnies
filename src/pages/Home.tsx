import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Section from "../components/Section"
import SectionFlip from "../components/SectionFlip"

function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Section img="exercise.jpg"></Section>
            <SectionFlip img="food.jpg"></SectionFlip>
            <Section img="clock.jpg"></Section>
        </>
    )
}

export default Home