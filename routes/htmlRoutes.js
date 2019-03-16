var path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.redirect("/about");
  })

  app.get("/index", function (req, res) {
    res.redirect("/about");
  });

  app.get("/about", function (req, res) {
    res.render('about', {
      layout: 'main'
    });
  });


  var projects = [
    {
      title: "eat da burger",
      link: "https://evening-reaches-35911.herokuapp.com/"
    },
    {
      title: "stem scraper",
      link: "https://glacial-ridge-94981.herokuapp.com/"
    },
    {
      title: "butterfly game",
      link: "https://tahreeem.github.io/butterflyGame/"
    },
    {
      title: "bamazon",
      link: "https://github.com/Tahreeem/bamazon"
    }
  ]

  app.get("/projects", function (req, res) {
    res.render('projects', {
      layout: 'main',
      project: projects
    });
  });

  app.get("/contactme", function (req, res) {
    res.render('contactMe', {
      layout: 'main'
    });
  });



};
