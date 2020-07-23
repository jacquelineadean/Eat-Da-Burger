// Dependencies
// ===========================================================
const connection = require("./connection");

// ORM 
// ===========================================================
const tableName = "burgers";

const orm = {
    selectAll: function(callback) {
        const queryAll = "SELECT * FROM " + tableName;
        connection.query(queryAll, function(err, result) {
            callback(result);
        })
    },
    insertOne: function(burgers, callback) {
        const queryOne = "INSERT INTO" + tableName + " (burger_name) VALUE ?";
        connection.query(queryOne, burgers.burger_name, function(err, result){
            if (err) throw err;
            callback(result);
        }) 
    },
    updateOne: function(burgers, callback) {
        const queryUpdate = "UPDATE " + tableName + " SET burger_name=? WHERE id=?";
        connection.query(queryUpdate, burgers.burger_name, function(err, result){
            if (err) throw err;
            callback(result);
        })
    }
}

// Export ORM
// ===========================================================
module.exports = orm;