//declare dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

//express config
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 6969 ;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//open up listener

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
