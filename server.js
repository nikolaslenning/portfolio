// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const path = require('path')
const routes = require("./routes/routes");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'))

//Data Parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(routes);

//Server listens for activity
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });