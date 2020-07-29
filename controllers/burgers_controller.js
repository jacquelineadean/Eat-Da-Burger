// Dependencies
// ===========================================================
const express = require("express");
const app = express.Router();
const Burger = require("../models/burger");


// Create router for the app
// ===========================================================

// Default route
app.get("/", function(req, res) {
    // Redirect to home page
    res.redirect("/burgers");
});

// GET route for getting all of the burgers
app.get("/burgers", function(req, res){
    // Run Burger to show all burgers
    Burger.selectAll(data => {
        const allBurgers = {burgers: data};
        // Send json response to user
        res.render("index", allBurgers);
    });
});

// POST route for saving a new burger using the data on req.body
app.post("/burgers/insertOne", function(req, res) {
    // Run Burger to add new burger
    Burger.insertOne(req.body.burger_name, result => {
        console.log(result);
        // Redirect to home page
        res.redirect("/");
    })
})

// PUT route for updating burgers
app.put("/burgers/:id", (req, res) => {
    // Define id as the selected id
    let id = req.params.id;
    // Run Burger to update the status of devoured
    Burger.updateOne(id, result => {
        console.log(result);
        // Send back response and let page reload from .then in ajax
        res.sendStatus(200);
    })
})

// Export router
// ===========================================================
module.exports = app;