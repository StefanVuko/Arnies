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

app.listen(port, () => console.log(`Listening on port ${port}`));