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
    insertOne: function(req, callback) {
        // Set body to 'burger_name'
        const burger_name = req.body.body;

        // Build query for adding burger
        const queryOne = "INSERT INTO " + tableName + " (burger_name) VALUE ?";

        // Connect query
        connection.query(queryOne, burger_name, function(err, result) {
            if (err) throw err;
            callback(result);
        }) 
    },
    // Update one burger
    updateOne: function(condition, callback) {
        // Build query to change `devoured` to true
        const queryUpdate = "UPDATE " + tableName + " SET devoured = true WHERE " + condition + ";";
        // Connect to query
        connection.query(queryUpdate, condition, function(err, result){
            if (err) throw err;
            callback(result);
        })
    }
}

// Export ORM
// ===========================================================
module.exports = orm;