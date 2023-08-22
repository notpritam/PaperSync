const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/login", (req, res) => {
  const details = req.body;

  console.log(details, "got details");
  res.status(200).send("Recived Details");
});

app.post("/api/register", (req, res) => {
  const registerDetails = req.body;

  console.log(registerDetails);
  res.status(200).send("Got Register Details");
});

app.listen(port, () => {
  console.log(`Server is running at :-  ${port}`);
});
