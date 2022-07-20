const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
res.sendFile(__dirname + "/light.html");
})

app.get("/darkmode", (req, res) => {
    res.sendFile(__dirname + "/dark.html");
})

app.post("/", (req, res) => {

const value = req.body.checkbox;

if (value === "light") {
res.redirect("/darkmode");
}else {
    res.redirect("/");
}
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });