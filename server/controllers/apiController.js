var Api = require("../data/api");
var _ = require("underscore");

var router = require("express").Router();
router.route("/apis/:id?").get(getApis).post(addApi).delete(deleteApi);
router.route("/:id?").get(getRabbit);

// These are API's used to faciliate the website
function getApis(req, res) {
    Api.find().sort({ created_date: -1 }).exec(function (err, apis) {
        if (err)
            res.send(err);
        else
            res.json(apis);
    });
}

function addApi(req, res) {
    var api = new Api(_.extend({}, req.body));
    api.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(api);
    });
}

function deleteApi(req, res) {
    var id = req.params.id;
    Api.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

// These are the things users call (calling them rabbits for now)
function getRabbit(req, res) {
    var id = req.params.id;
    Api.find({ _id: id }, 'text' , function (err, api) {
        if (err)
            res.send(err);
        else
            res.json(api);        
    });
}

module.exports = router;