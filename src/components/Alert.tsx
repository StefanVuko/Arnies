import { AiOutlineCloseCircle } from "react-icons/ai"
import { useEffect } from "react"

function Alert(props: any) {

  useEffect(() => {
    changeBackgroundColor()
  }, [])

  function changeBackgroundColor() {
    const container = document.getElementById("alert--id")
    if (props.hasSucceeded && container != null)
      container.style.backgroundColor = "#63cf59"
    if (!props.hasSucceeded && container != null)
      container.style.backgroundColor = "#c9324c"
  }

  return (
    <>
      <div id="alert--id" className="alert--container">
        <span className="alert--message">{props.text}</span>
        <AiOutlineCloseCircle onClick={props.onClose} className="alert--close" />
      </div>
    </>
  )
}

export default Alert