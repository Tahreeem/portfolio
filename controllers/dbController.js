function create(article, Model) {

    Model.create(article)
        .then(function (dbArticle) {
            //console.log(dbArticle);
        })
        .catch(function (error) {
            //console.log(error);
        })
}

function find(findQuery, Model, cb) {

    return Model.find(findQuery)
        .then(cb)
        .catch(function (error) {
            console.log(error);
        });
}

//____________________________________________________________________________________________________

module.exports = {
    create,
    find
}