// Dependencies
// ===========================================================
const mysql = require("mysql");

// Setup connection information
// ===========================================================
const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "dbpassword",
    database: "burgers_db"
});

// Connect to database
// ===========================================================
connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
// ===========================================================
module.exports = connection;