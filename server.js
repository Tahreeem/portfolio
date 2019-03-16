var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

//____________________________________________________________________________________________________

var PORT = process.env.PORT || 3000;

var app = express();


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views'));


require("./routes/htmlRoutes.js")(app);
var routes = require("./routes/apiRoutes.js");
app.use(routes);


mongoose.set('useCreateIndex', true);
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfoliodb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
var dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
var collectionNames;
dbConnection.once('open', function () {
  console.log("MongoDB is connected");
});



app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});