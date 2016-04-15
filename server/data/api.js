var mongoose = require("mongoose");
var apiSchema = mongoose.Schema({
    name: String,
    text: String,
    type: String,
    created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("api", apiSchema);