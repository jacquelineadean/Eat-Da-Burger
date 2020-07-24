// Dependencies
// ===========================================================
const express = require("express");
const Burger = require("../models/burger");
const router = express.Router();

// Create router for the app
// ===========================================================

// Default route
router.get("/", function(req, res) {
    // Redirect to home page
    res.redirect(`/index`);
});

// GET route for getting all of the burgers
router.get("/index", function(req, res){
    // Run Burger to show all burgers
    Burger.selectAll(burgers => {
        // Send json response to user
        res.json(burgers);
    })
});

// POST route for saving a new burger using the data on req.body
router.post("/api/burgers", function(req, res) {
    // Run Burger to add new burger
    Burger.insertOne(req.body, function(){
        // Redirect to home page
        res.redirect("/index");
    })
})

// PUT route for updating burgers
router.put("/api/burgers", function(req, res){
    // Define id as the selected id
    const id = "id = " + req.params.id;
    // Run Burger to update the status of devoured
    Burger.updateOne({devoured: req.body.devoured}, id, function(){
        // Redirect to home page
        res.redirect("/index");
    })
})
// Export router
// ===========================================================
module.exports = router;