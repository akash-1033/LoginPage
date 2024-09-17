const express = require("express");
const app = express();
const port = 3000;
const collection = require("./mongodb");

app.set("view engine", "ejs");
app.set("views", "../frontend/views");
app.use(express.static("../frontend/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const data = req.query.data;
  res.render("loginPage", { data });
});

app.get("/login", (req, res) => {
  const data = req.query.data;
  res.render("loginPage", { data });
});

app.get("/signup", (req, res) => {
  const data = req.query.data;
  res.render("signupPage", { data });
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.username,
    id: req.body.id,
    password: req.body.password,
  };
  const aval = await collection.findOne({ id: req.body.id });
  if (aval == null) {
    await collection.insertMany([data]);
    req.app.set("user", data);
    res.redirect("/home");
  } else {
    res.redirect("/login?data=UserExists");
  }
});

app.post("/login", async (req, res) => {
  const aval = await collection.findOne({ id: req.body.id });
  if (aval == null) {
    res.redirect("/signup?data=UserNotFound");
  } else {
    if (aval.password === req.body.password) {
      req.app.set("user", aval);
      res.redirect("/home");
    } else {
      res.redirect("/login?data=WrongPassword");
    }
  }
});

app.get("/home", (req, res) => {
  res.render("homePage", { data: req.app.get("user") });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
