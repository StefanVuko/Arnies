const express = require("express");
const cors = require('cors')
const jwt = require("jsonwebtoken")
const userData = require("./data/user")
const userFavorites = require("./data/userFavorites")
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get("/pog", (req, res) => {
  res.json("hi");
  console.log("req")
});

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b1567856c8msh657e857f8ed8e9cp1e21b6jsn2ac1179aa6e8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

const apiKeyFood = "6d3d041bbeb749a5b3f6c979b0be454d"
const secret = "755456279cfdb399c166b1135de1a5dd117be1b0e560e8b769bffe8509a9e5454a23cf3f707dac261713c4214f7e862d4a82b70b3fad8e49f6d91d8f44f4a443"
const secretRefresh = "442466505e340c027e50be57f67f693410544e88d055d2d4a1dc6d361dd802cbc2aadf86cba262fa4b12cd2495cb225ed43ea26b7008b446df6cdb8326bb65a4"

app.post("/login", async (req, res) => {
  const { username } = req.body
  const { password } = req.body
  const user = { username: username }

  let isLoggedIn = false;

  Object.values(userData).forEach(user => {
    if (user.username === username && user.password === password) {
      isLoggedIn = true;
      return;
    }
  });

  const accessToken = jwt.sign(user, secret)

  isLoggedIn ? res.json({ accessToken: accessToken }) : res.sendStatus(401)
})

app.post("/register", async (req, res) => {
  const { username } = req.body
  const { password } = req.body
  const { email } = req.body
  const { firstName } = req.body
  const { lastName } = req.body
  const newUser = { username, password, email, firstName, lastName }
  const user = { username: username }

  let favoriteRecipes = []
  let favoriteWorkouts = []
  const newUserFavorites = { favoriteRecipes, favoriteWorkouts }

  //If user already exists send error
  if (userData[username]) {
    res.sendStatus(401)
    return
  }

  userData[username] = newUser
  userFavorites[username] = newUserFavorites

  const accessToken = jwt.sign(user, secret)
  res.json({ accessToken: accessToken })
})

app.get("/getBodyParts", async (req, res) => {
  const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    res.json(result)
  } catch (error) {
    console.error(error);
  }
})

app.get("/getExercise", async (req, res) => {
  const name = req.query.name
  const url = `https://exercisedb.p.rapidapi.com/exercises/name/${name}`

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    res.json(result)
  } catch (error) {
    console.error(error);
  }
})

app.get("/getCuisine", async (req, res) => {
  const cuisine = req.query.cuisine
  const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=10&apiKey=${apiKeyFood}`

  try {
    const response = await fetch(url);
    const result = await response.text();
    res.json(result)
  } catch (error) {
    console.error(error);
  }
})

app.get("/getRecipeInformation", async (req, res) => {
  const id = req.query.id
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKeyFood}`

  try {
    const response = await fetch(url);
    const result = await response.text();
    res.json(result)
  } catch (error) {
    console.error(error);
  }
})

app.post("/addFavoriteRecipe", authenticateToken, async (req, res) => {
  const { username } = req.user
  const { id } = req.body
  const { title } = req.body
  const { img } = req.body
  const { stars } = req.body

  const obj = { id, title, img, stars }

  userFavorites[username].favoriteRecipes.push(obj)
  console.log(userFavorites[username])
  res.sendStatus(200)
})

app.delete("/removeFavoriteRecipe", authenticateToken, async (req, res) => {
  const { username } = req.user
  const { id } = req.body
  const { title } = req.body
  const { img } = req.body
  const { stars } = req.body

  const obj = { id, title, img, stars }

  const index = userFavorites[username].favoriteRecipes.indexOf(obj)
  userFavorites[username].favoriteRecipes.splice(index, 1)
  console.log(userFavorites[username])
  res.sendStatus(200)
})

app.post("/addFavoriteExercise", authenticateToken, async (req, res) => {
  const { username } = req.user
  const { id } = req.body
  const { name } = req.body
  const { img } = req.body
  const { equipment } = req.body
  const { bodyPart } = req.body
  const { target } = req.body

  const obj = { id, img, name, equipment, bodyPart, target }

  userFavorites[username].favoriteWorkouts.push(obj)
  res.sendStatus(200)
})


app.delete("/removeFavoriteExercise", authenticateToken, async (req, res) => {
  const { username } = req.user
  const { id } = req.body
  const { name } = req.body
  const { img } = req.body
  const { equipment } = req.body
  const { bodyPart } = req.body
  const { target } = req.body

  const obj = { id, img, name, equipment, bodyPart, target }

  const index = userFavorites[username].favoriteWorkouts.indexOf(obj)

  userFavorites[username].favoriteWorkouts.splice(index, 1)
  res.sendStatus(200)
})

app.get("/getUserInfo", authenticateToken, async (req, res) => {
  const { username } = req.user

  const data = userData[username]

  res.json(data)
})

app.put("/setUserInfo", authenticateToken, async (req, res) => {
  const { username } = req.user
  const oldUsername = username
  const newUserData = req.body

  /*console.log(oldUsername)
  console.log(newUserData.username)*/

  const oldFavorites = userFavorites[oldUsername]

  delete userData[oldUsername]
  userData[newUserData.username] = newUserData
  delete userFavorites[oldUsername]
  userFavorites[newUserData.username] = oldFavorites

  /*console.log(userData[oldUsername])
  console.log(userFavorites[oldUsername])
  console.log(userData[newUserData.username])
  console.log(userFavorites[newUserData.username])*/

  res.sendStatus(200)
})

app.get("/getUserFavorites", authenticateToken, async (req, res) => {
  const { username } = req.user

  res.json(userFavorites[username])
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]
  const token = authHeader
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(403)

    req.user = user
    next()
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`));