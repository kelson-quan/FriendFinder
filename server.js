var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var apiroute = require("./app/routing/apiRoutes");
var htmlroute =require("./app/routing/htmlRoutes");

var PORT = 6969;

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json());

//app routes 
app.use(apiroute);
app.use(htmlroute);

app.listen(PORT, function(){
    console.log("The PORT is connected and is live. Connected to PORT: " + PORT);
})