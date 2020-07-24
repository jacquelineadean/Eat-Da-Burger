// Dependencies 
// ==========================================================
const express = require("express");

// Sets up the Express App
// ==========================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true} ));
app.use(express.json());

// Static delivery to be served
// app.use(express.static(""));

// Routes
// ==========================================================
const routes = require("./controllers/burgers_controller");
app.use("/", routes);

// Start the server to begin listening
// ==========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});