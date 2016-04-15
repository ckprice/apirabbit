var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

// controllers
var apiController = require("./controllers/apiController");

// Express request pipeline
var app = express();

// Express variables

app.set('json spaces', 3); // For JSON API prettify

app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", apiController);

app.listen(7777, function () {
    
});

// Connect to mongodb database
mongoose.connect("mongodb://0.0.0.0/apirabbit");