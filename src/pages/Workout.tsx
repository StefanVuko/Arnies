import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Exercise from "../components/Exercise";

function Workout() {
  return (
    <>
      <Navbar />
      <div className="content--container">
        <Exercise></Exercise>
      </div>
      <Footer />
    </>
  )
}

export default Workout