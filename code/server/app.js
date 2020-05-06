//====================================
//  IMPORTING LIBRARIES
//====================================

const express = require("express");
const bodyParser = require("body-parser");

//  SETTING UP APP
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//===================================
//  ROUTES
//===================================

let stuff = "stuff";

//  add_stuff route
app.post("/add_stuff", (req, res) => {
  res.redirect("http://localhost:3000/custom");
  stuff = req.body.stuff;
  console.log(stuff);
});

//  get_stuff route
app.get("/get_stuff", (req, res, next) => {
    res.json({stuff});
    next();
});

//  LISTENING TO PORT
app.listen(5000, console.log("server is running"));
