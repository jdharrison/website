var express = require("express");
var path = require("path");

var app = express();
var port = 3000;

app.get("/",function(req,res){
  console.log("User accessed index of jacobdharrison");
  res.sendFile(__dirname + "/assets/index.html");
});

app.listen(port);

console.log("Running jacobdharrison web server at port " + port);
