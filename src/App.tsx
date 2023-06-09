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
import NotFound from "./pages/NotFound"
import Logout from "./pages/Logout"
import Settings from "./pages/Settings"
import Favorites from "./pages/Favorites"
import Cookies from "js-cookie"

function App() {
  const [username, setUsername] = useState("")
  const [jwt, setJwt] = useState(Cookies.get("jwtToken"))
  const [count, setCount] = useState(0)

  return (
    <AuthContext.Provider value={{ username, setUsername, jwt, setJwt, count, setCount }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/nutrition" element={<Nutrition></Nutrition>}></Route>
          <Route path="/tracker" element={<Tracker></Tracker>}></Route>
          <Route path="/workout" element={<Workout></Workout>}></Route>
          <Route path="/recipeInformation" element={<RecipeInformation></RecipeInformation>}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Route>
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
