var express = require("express");
var jsonfile = require("jsonfile");
var app = express();

jsonfile.readFile("config.json", function(err, config) {
  if(err) {
    console.error("Error trying to load config data at ./config.json.");
    console.error(err);
    return;
  }
  else if(config == null || config.port == undefined || config.websites == undefined) {
    console.error("Invalid config data at ./config.json, go to wiki to see format needed (found in readme).");
    return;
  }

  for(var index in config.websites)
  {
    setupWebsite(config.websites[index]);
  }

  app.listen(config.port);

  console.log("Running web server at port " + config.port);
});


function setupWebsite(website) {
  console.log("Set up website: " + website.name);

  app.get("/" + website.name, function(req,res) {
    console.log("Request to load website, returning index: " + website.name);
    res.sendFile(__dirname + "/assets/" + website.name + "/index.html");
  });
}
