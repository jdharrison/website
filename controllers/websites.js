var express = require('express');
var router = express.Router();

var auth = require('../models/auth');
var websitesModel = require('../models/websites');

/* POST websites */
router.post('/', function(req, res) {
  if(auth.hasAuth(req.connection.remoteAddress))
  {
    var route = req.body['route'];
    var media = req.body['media'];
    var remove = req.body['remove'] == undefined ? false : req.body['remove'];

    if(route == null || remove == false && media == null)
    {
      res.error("Invalid parameters passed.");
    }
    else
    {
      if(remove)
      {
        websitesModel.removeWebsite(route);
      }
      else
      {
        websitesModel.addWebsite(route,media);
      }
      res.send(websitesModel.getWebsites());
    }
  }
});

/* GET websites */
router.get('/', function(req, res) {
  if(auth.hasAuth(req.connection.remoteAddress))
  {
    res.send(websitesModel.getWebsites());
  }
});

module.exports = router;