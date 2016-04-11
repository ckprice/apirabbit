var router = require("express").Router();
router.route("/create").get(createApi);

function createApi(req, res) {
    // res.json("CREATE");
    res.render('create', { title: 'Create API - apiRabbit', name: 'butt' });
}

module.exports = router;