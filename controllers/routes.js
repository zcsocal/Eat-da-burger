var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.render("index");
});

//This is the required to allow other files to link to this file
module.exports = router;