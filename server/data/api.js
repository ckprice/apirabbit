var mongoose = require("mongoose");
var apiSchema = mongoose.Schema({
    name: String,
    text: String
});

module.exports = mongoose.model("api", apiSchema);