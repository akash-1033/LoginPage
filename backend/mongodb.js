const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/loginData")
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch(() => {
    console.log("Errror Connecting to Mongodb");
  });

const loginSchema = new mongoose.Schema({
  name: String,
  id: String,
  password: String
});

const collection = new mongoose.model("userData", loginSchema);
module.exports = collection;
