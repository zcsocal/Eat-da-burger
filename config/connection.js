var mysql = require("mysql");

//Standard msql connection
var connection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password: "root1234!",
    database: "burgers_db"

});


connection.connect(function(err){
    if(err)throw err;
    console.log("connected ad id: " + connection.threadId);

});

//The all important export
module.exports = connection;