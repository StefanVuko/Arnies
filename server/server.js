const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors())

app.get("/pog", (req, res) => {
    res.json({ message: "Hello from server!" });
    console.log("req")
});

app.listen(port, () => console.log(`Listening on port ${port}`));