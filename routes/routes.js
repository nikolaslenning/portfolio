// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {            
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    app.get("/portfolio", function(req, res) {      
      res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });
  
    app.get("/skills", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/skills.html"));
    });
  
  };