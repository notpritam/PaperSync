const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://notpritam:dYS5UhfM6qDtgs22@cluster0.jvfph8p.mongodb.net/?retryWrites=true&w=majority"
);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
