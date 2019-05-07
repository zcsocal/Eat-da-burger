
//Modules
//We are using express, body parser, method override and handlebars
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//Our app variable with calls express
var app = express();

app.use(express.static(__dirname + "/public"));

// create application/x-www-form-urlencoded parser
//This object will contain key-value pairs, where the value can be a string or array when (extended: false)
app.use(bodyParser.urlencoded({
    extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine","handlebars");

//We reference routes.js
var routes = require("./controllers/routes.js");
app.use("/", routes);


//Listen on port
var port = 3333;
app.listen(port);