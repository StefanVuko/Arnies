import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Workout from "./pages/Workout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/workout" element={<Workout></Workout>}></Route>
      </Routes>
    </>
  )
}

export default App
