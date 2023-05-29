import { AiOutlineHome } from "react-icons/ai"

function Navbar() {
  return (
    <nav>
      <div className="navbar--left">
        <ul>
          <li className="navbar--item"><a href="/"><AiOutlineHome></AiOutlineHome></a></li>
          <li className="navbar--item"><a href="/workout">WorkOUT </a></li>
          <li className="navbar--item"><a href="/nutrition">Nutriti Tool </a></li>
          <li className="navbar--item"><a href="/tracker">Tracker </a></li>
        </ul>
      </div>
      <div className="navbar--right">
        <ul>
          <li className="navbar--item"><a href="/login">Login </a></li>
          <li className="navbar--item"><a href="/register">Registration </a></li>
          <li className="navbar--item"><a href="/about">About </a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar