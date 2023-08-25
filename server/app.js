require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const Docs = require("./models/docs");
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
    const { name, email, password, imageUrl } = req.body;

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
      imageUrl: imageUrl,
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

    console.log(req.body);
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

app.post("/api/new", auth, async (req, res) => {
  const { userId } = req.body;
  console.log(userId, "this is new");

  const doc = await Docs.create({ creator: userId, access: [userId] });

  await User.findByIdAndUpdate(
    userId, // User's ID
    { $push: { documents: doc._id } }, // Add the new document's ID to the array
    { new: true } // Return the updated user document after update
  );
  res.status(201).send({
    msg: "Docs created Successfully",
    doc: doc,
  });
});

app.get("/api/authenticate", auth, (req, res) => {
  res.status(200).send("Authenticated Successfully");
});

app.post("/api/getDocs", auth, async (req, res) => {
  const { userId } = req.body;

  console.log("getting docs", userId);

  const docs = await User.findById(userId).populate("documents").exec();
  res.status(200).send(docs.documents);
});

app.post("/api/updateTitle", auth, async (req, res) => {
  const { _id, title } = req.body;

  console.log(_id, title);

  const doc = await Docs.findByIdAndUpdate(_id, { title });
  res.status(200).send({ doc });
});

app.post("/api/addAccess", auth, async (req, res) => {
  const { id, email } = req.body;
  console.log(id, "this is doc id", email, "this is user email");

  const user = await User.findOne({ email: email }).exec();

  if (!user) {
    res.status(400).send("User not found");
  }
  console.log(user);

  const doc = await Docs.findByIdAndUpdate(
    id,
    { $push: { access: user._id } },
    { new: true }
  );

  const userUpdate = await User.findByIdAndUpdate(
    user._id,
    {
      $push: { documents: doc._id },
    },
    { new: true }
  );

  res.status(200).send({ userUpdate, doc });
});

app.post("/api/checkAccess", auth, async (req, res) => {
  const { id, userId } = req.body;

  const doc = await Docs.findById(id).populate();
  if (!doc) {
    return res.send(400).send("Doc not found");
  }

  const userFinal = doc.access.filter((user) => user._id == userId);

  if (userFinal.length < 1) {
    return res.status(400).send("You Dont Have Access");
  }

  res.status(200).send("You got Access");
});

module.exports = app;
