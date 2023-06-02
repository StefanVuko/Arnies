import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Calendar from "react-calendar"

function Tracker() {


  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [date, setDate] = useState<Value>(new Date())


  return (
    <>
      <Navbar></Navbar>
      <div className="content--container">
        <div className="tracker--container">
          <Calendar
            value={date}
            onChange={setDate} />
        </div>
      </div >
      <Footer></Footer>
    </>
  )
}

export default Tracker