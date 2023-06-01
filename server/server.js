const express = require("express");
const cors = require('cors')
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

app.listen(port, () => console.log(`Listening on port ${port}`));