var express = require("express");
({ contactMe } = require("../models/ContactMeModel")); //models
//({ articlesJSONSender } = require("../controllers/apiRoutesController.js")); //controllers 1/2
var Promise = require("bluebird");
//({ createArticle, findArticle, createArticleAsync, findArticleAsync } = Promise.promisifyAll(require("../controllers/dbController.js"))); //controllers 2/2
({ create, find } = require("../controllers/dbController.js")); //controllers 2/2
//Promise.promisifyAll(require("mongoose"));

//____________________________________________________________________________________________________
var router = express.Router();


// router.get("/api/projects", function (req, res) {
//     articlesJSONSender({}, res);
// });


// Route for saving/updating an Article's associated Note
router.post("/api/contactme", function (req, res) {

    var contactRequest = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }

    create(contactRequest, contactMe);
});



//____________________________________________________________________________________________________

module.exports = router;
