var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../dist"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
