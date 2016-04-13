var router = require("express").Router();
router.route("/create").get(createApi);
router.route("/").get(homePage);

function createApi(req, res) {
    // res.json("CREATE");
    res.render('create', { title: 'apirabb.it -- Create API endpoints on the fly.', name: 'butt' });
}

function homePage(req, res) {
    // res.json("CREATE");
    res.render('create', { title: 'apirabb.it -- Create API endpoints on the fly.', name: 'butt' });
}


module.exports = router;