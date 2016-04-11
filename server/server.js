var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var appRoot = process.cwd();

// controllers
var schoolController = require("./controllers/schoolController");

// controllers - app
var apiController = require("../app/controllers/siteController");

// Express request pipeline
var app = express();

// view stuff
app.set('views', appRoot + '/app/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", schoolController);
app.use("/", apiController);

app.listen(7777, function () {
    console.log("Started listening on port", 7777);
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/apirabbit");