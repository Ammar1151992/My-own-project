const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
// app.use("view-engine", "ejs");
app.use(express.static("public")); // To specify the static folder HTML CSS
app.use(bodyParser.urlencoded({ extended: true })); // To tell the app to use it


app.get("/", function(req, res){
  res.render("main");
})

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/lectures", function (req, res) {
  res.render("lectures");
});

app.get("/lecture-table", function (req, res) {
  res.render("lecture-table");
});


 app.post("/login", function(req, res){
  res.redirect("/");
 })

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});