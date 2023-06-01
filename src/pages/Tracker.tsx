import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Calendar from "react-calendar"

function Tracker() {
  return (
    <>
      <Navbar></Navbar>
      <div className="content--container">
        <div className="tracker--container">
          <Calendar />
        </div>
      </div >
      <Footer></Footer>
    </>
  )
}

export default Tracker