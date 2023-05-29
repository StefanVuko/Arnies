import { AiFillGithub } from "react-icons/ai"
import { FaUniversity } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"

function Footer() {
  return (
    <footer>
      <div className="footer--text">
        <p>Impressum © Copyright 2023 </p>
      </div>
      <div className="footer--icons">
        <ul className="footer--iconlist">
          <li className="footer--item"><a href="https://github.com/StefanVuko/Arnies"><AiFillGithub /></a></li>
          <li className="footer--item"><a href="https://portal.fh-campuswien.ac.at/studierende/aktuell.asp"><FaUniversity /></a></li>
          <li className="footer--item"><a href="mailto:stefanvuko16@outlook.de"><AiFillMail /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer