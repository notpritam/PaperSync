require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const auth = require("./middleware/auth");

const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input
    const { name, email, password } = req.body;

    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const encryptedPassword = await bcrypt.hash(password, 2);

    const user = await User.create({
      name: name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/login", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

app.get("/api/", auth, (req, res) => {
  res.status(200).send("Working");
});

module.exports = app;
