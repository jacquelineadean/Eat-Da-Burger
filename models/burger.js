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
        orm.insertOne(req.body, function(data){
            callback(data);
        })
    },

    // updateOne function
    updateOne: function(callback){
        orm.updateOne(req.body, function(data){
            callback(data);
        })
    }
    
}

// Export burger
// ===========================================================
module.exports = Burger;