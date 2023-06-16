const express = require("express");
const cors = require('cors')
const userData = require("./data/user")
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

app.post("/login", async (req, res) => {
  const { username } = req.body
  const { password } = req.body

  let isLoggedIn = false;

  Object.values(userData).forEach(user => {
    if (user.username === username && user.password === password) {
      isLoggedIn = true;
      return;
    }
  });

  isLoggedIn ? res.sendStatus(200) : res.sendStatus(401)
})

app.post("/register", async (req, res) => {
  const { username } = req.body
  const { password } = req.body
  const { email } = req.body
  const { firstName } = req.body
  const { lastName } = req.body
  console.log(userData[username])
  const newUser = { username, password, email, firstName, lastName }

  //If user already exists send error
  if (userData[username]) {
    res.sendStatus(401)
    return
  }

  userData[username] = newUser
  res.sendStatus(200)
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

app.listen(port, () => console.log(`Listening on port ${port}`));