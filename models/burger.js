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
    insertOne: function(name, callback) {
        orm.insertOne("burgers", "burger_name", name, callback);
    },

    // updateOne function
    updateOne: function(id, callback){
        let condition = "id=" + id;
        orm.updateOne("burgers", {devoured: true}, condition, callback);
    }
    
}

// Export burger
// ===========================================================
module.exports = Burger;