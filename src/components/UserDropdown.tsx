import { FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

function UserDropdown() {
  return (
    <>
      <div className="dropdown">
        <FaUserAlt className="user--icon" />
        <div className="dropdown-content">
          <Link to="/settings">Settings</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </>
  )
}

export default UserDropdown