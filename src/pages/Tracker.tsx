import { useState, useContext } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Calendar from "react-calendar"
import { AuthContext } from "../contexts/AuthContext";

function Tracker() {


  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [date, setDate] = useState<Value>(new Date())
  const [temperature, setTemperature] = useState("")
  const { jwt } = useContext(AuthContext)

  function searchCity() {
    const city = (document.getElementById("input--city") as HTMLInputElement).value
    if (city) {
      fetch(`http://localhost:5000/getWeather?location=${city}`,
        {
          method: "GET",
          headers: {
            "Authorization": jwt ? jwt : ""
          }
        })
        .then(resp => resp.json())
        .then(resp => {
          setTemperature(JSON.parse(resp).current.temp_c)
        })
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="content--container">
        <div className="tracker--container">
          <Calendar
            value={date}
            onChange={setDate} />
        </div>
        <h1> Random Weather API :)</h1>
        <form>
          <label htmlFor="city">Enter city name: </label>
          <input id="input--city" type="text"></input>
        </form>
        <button onClick={searchCity}>Search</button>
        {temperature && <p>Current temperature: {temperature} °C</p>}
      </div >
      <Footer></Footer>
    </>
  )
}

export default Tracker