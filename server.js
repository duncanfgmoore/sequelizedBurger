var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var db = require("./models");

var app = express();


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require('./controllers/burger_controller.js')(app);

//App is listening...
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("My-Burger-Sequel is listening on PORT " + PORT);
  });
});