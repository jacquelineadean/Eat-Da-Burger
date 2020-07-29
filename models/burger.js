// Dependencies
// ===========================================================
const orm = require("../config/orm");

// Routes
// ===========================================================
const Burger = {
    // selectAll function
    selectAll: function(callback) {
        orm.selectAll(function(data){
            callback(data);
        })
    },

    // insertOne function
    insertOne: function(callback) {
        orm.insertOne(function(data){
            callback(data);
        })
    },

    // updateOne function
    updateOne: function(id, callback){
        let condition = "id=" + id;
        orm.updateOne(condition, callback);
    }
    
}

// Export burger
// ===========================================================
module.exports = Burger;