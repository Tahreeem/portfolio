var mongoose = require("mongoose");

//____________________________________________________________________________________________________

var Schema = mongoose.Schema;

var ContactMeSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  message: {
    type: String,
    required: true
  }
}, { upsert: true });


var contactMe = mongoose.model("contactMe", ContactMeSchema);

//____________________________________________________________________________________________________

module.exports = {
  contactMe
};
