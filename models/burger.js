// Dependencies
// ===========================================================
const orm = require("../config/orm");

// Routes
// ===========================================================
const Burger = function(app) {
    // GET route for getting all of the burgers
    app.get("/api/burgers", function(req, res){
        orm.selectAll(function(data){
            res.json(data);
        })
    });

    // POST route for saving a new burger using the data on req.body
    app.post("/api/burgers", function(req, res) {
        orm.insertOne(req.body, function(data){
            res.json(data);
        })
    })

    // PUT route for updating burgers
    app.put("/api/burgers", function(req, res){
        orm.updateOne(req.body, function(data){
            res.json(data);
        })
    })
    
}

// Export burger
// ===========================================================
module.exports = Burger;