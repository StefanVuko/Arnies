import { useState } from "react"

function Exercise() {

  const [ok, setOk] = useState("")
  const [image, setImage] = useState("")
  const getData = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.sprites.front_default)
        setOk(resp.name)
        setImage(resp.sprites.front_default)
      })
      .catch(err => { console.log(err) })
  }

  getData()

  return (
    <>

      <p>{ok}</p>
      <img src={image}></img>
    </>
  )
}

export default Exercise