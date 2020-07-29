// Dependencies 
// ==========================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true} ));
app.use(express.json());

// Static directory to be served
app.use(express.static(__dirname + '/public'));


// Set up Handlebars
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Routes
// ==========================================================
const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Start the server to begin listening
// ==========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});