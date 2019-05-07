var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

router.get("/", function(req, res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index");
    })
});

//This is the required to allow other files to link to this file
module.exports = router;