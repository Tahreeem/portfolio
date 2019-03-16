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
    // Create a new note and pass the req.body to the entry
    db.Note.create(req.body)
        .then(function (dbNote) {
            // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
            // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
        })
        .then(function (dbArticle) {
            // If we were able to successfully update an Article, send it back to the client
            res.json(dbArticle);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});



//____________________________________________________________________________________________________

module.exports = router;