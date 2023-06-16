import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Workout from "./pages/Workout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
import Nutrition from "./pages/Nutrition"
import Tracker from "./pages/Tracker"
import RecipeInformation from "./pages/RecipeInformation"
import { AuthContext } from "./contexts/AuthContext"
import { useState } from "react"
import PrivateRoutes from "./routes/PrivateRoutes"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/nutrition" element={<Nutrition></Nutrition>}></Route>
          <Route path="/tracker" element={<Tracker></Tracker>}></Route>
          <Route path="/workout" element={<Workout></Workout>}></Route>
          <Route path="/recipeInformation" element={<RecipeInformation></RecipeInformation>}></Route>
        </Route>
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
