function create(contactRequest, Model) {

    Model.create(contactRequest)
        .then(function (createdContactRequest) {
            console.log(createdContactRequest);
        })
        .catch(function (error) {
            console.log(error);
        })
}

// function find(findQuery, Model, cb) {

//     return Model.find(findQuery)
//         .then(cb)
//         .catch(function (error) {
//             console.log(error);
//         });
// }

//____________________________________________________________________________________________________

module.exports = {
    create
    // ,find
}