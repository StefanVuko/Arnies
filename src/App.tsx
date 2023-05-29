import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Workout from "./pages/Workout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
import Nutrition from "./pages/Nutrition"
import Tracker from "./pages/Tracker"
import React, { useEffect, useState } from "react"

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:5000/pog")
      console.log(data)
    }
    getData()
  }, []);



  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/nutrition" element={<Nutrition></Nutrition>}></Route>
        <Route path="/tracker" element={<Tracker></Tracker>}></Route>
        <Route path="/workout" element={<Workout></Workout>}></Route>
      </Routes>
    </>
  )
}

export default App
