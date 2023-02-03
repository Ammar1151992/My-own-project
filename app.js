const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public")); // To specify the static folder HTML CSS
app.use(bodyParser.urlencoded({ extended: true })); // To tell the app to use it
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});