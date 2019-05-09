// Set up MySQL connection.
var mysql = require("mysql");

//Connection info
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "root1234!",
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL){

} else {

  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root1234!",
    database: "burgers_db"
  });

};


//Connect confirmation
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection to ORM 
module.exports = connection;
