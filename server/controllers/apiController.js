var Api = require("../data/api");
var _ = require("underscore");

var router = require("express").Router();
router.route("/apis/:id?").get(getApis).post(addApi).delete(deleteApi);

function getApis(req, res) {
    Api.find(function (err, apis) {
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

module.exports = router;