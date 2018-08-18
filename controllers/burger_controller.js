var express = require("express");
// var burger = require("../models/burgers.js");
// var router = express.Router();
var db = require("../models");



module.exports = function(app) {
  //Create a controller that will GET all the burgers that are in the database
app.get("/", function (req, res) {
  db.Burger.findAll({}).then(function(dbBurger) {
    res.render("index",{
      burgers: dbBurger 
    });
  });
});



//Create a controller that will POST new burgers to the database
app.post("/api/burgers", function (req, res) {
 
  db.Burger.create(req.body).then(function(dbBurger) {
    res.redirect("/");
  });
});
  
//Create a controller that will update devoured to true in the database
app.put("/api/burgers/:id", function (req, res) {
  db.Burger.update({
    devoured: 1,
    },  
    {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
    res.json(dbBurger);
 
  });
});


}

