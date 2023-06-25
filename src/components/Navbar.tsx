import { AiOutlineHome } from "react-icons/ai"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import UserDropdown from "./UserDropdown"

function Navbar() {

  //const { isLoggedIn } = useContext(AuthContext)
  const { jwt } = useContext(AuthContext)

  return (
    <nav>
      <div className="navbar--left">
        <ul>
          <li className="navbar--item"><Link to="/"><AiOutlineHome></AiOutlineHome></Link></li>
          <li className="navbar--item"><Link to="/workout">WorkOUT </Link></li>
          <li className="navbar--item"><Link to="/nutrition">Nutriti Tool </Link></li>
          <li className="navbar--item"><Link to="/tracker">Tracker </Link></li>
        </ul>
      </div>
      <div className="navbar--right">
        <ul>
          <li className="navbar--item">{jwt ? <UserDropdown /> : <Link to="/login">Login</Link>}</li>
          <li className="navbar--item"><Link to="/about">About </Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar