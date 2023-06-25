function submitLogin() {
  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  const user = { username, password }
  let status = 0

  fetch("http://localhost:5000/login",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(resp => {
      status = resp.status
      return resp
    })
    .then(resp => {
      if (status === 200)
        return resp.json()
      else {
        return resp
      }
    })
    .then(resp => {
      checkResponse(status, resp.accessToken)
    })
}

function checkResponse(response, accessToken) {
  if (response === 200) {
    console.log(accessToken)
  }
  if (response === 401) {
    alert("User not found or wrong password!")
  }
}

function loadBodyParts() {
  fetch("http://localhost:5000/getBodyParts")
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
    })
}

function loadCuisine() {
  const cuisine = document.getElementById("cuisine").value

  fetch(`http://localhost:5000/getCuisine?cuisine=${cuisine}`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
    })
}