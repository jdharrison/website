var express = require('express');
var router = express.Router();

var auth = require('../models/auth');
var websitesModel = require('../models/websites');

/* GET admin */
router.get('/', function(req, res) {
  if(auth.hasAuth(req.connection.remoteAddress))
  {
    res.render('admin', { title: 'Websites ~ Control Panel', websites: websitesModel.getWebsites() });
  }
  else
  {
    res.render('login', { title: 'Websites ~ Login' });
  }
});

module.exports = router;