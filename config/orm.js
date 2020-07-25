// Dependencies
// ===========================================================
const connection = require("./connection");

// ORM 
// ===========================================================
const tableName = "burgers";

const orm = {
    // Select all burgers from table
    selectAll: function(callback) {
        // Build query for all burgers
        const queryAll = "SELECT * FROM " + tableName + ";";

        // Connect query
        connection.query(queryAll, function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },
    // Create new burger for table
    insertOne: function(burgers, callback) {
        // Build query for adding burger
        const queryOne = "INSERT INTO " + tableName + " (burger_name) VALUE ?";

        // Connect query
        connection.query(queryOne, burgers.burger_name, function(err, result) {
            if (err) throw err;
            callback(result);
        }) 
    },
    // Update one burger
    updateOne: function(burgers, callback) {
        // Build query to change `devoured` to true
        const queryUpdate = "UPDATE " + tableName + " SET devoured = 1 WHERE id=?";
        // Connect to query
        connection.query(queryUpdate, burgers.burger_name, function(err, result){
            if (err) throw err;
            callback(result);
        })
    }
}

// Export ORM
// ===========================================================
module.exports = orm;