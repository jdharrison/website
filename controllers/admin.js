var express = require('express');
var router = express.Router();

var auth = require('../models/auth');

/* GET admin */
router.get('/', function(req, res) {
  var ip = req.connection.remoteAddress;

  if(auth.hasAuth(ip))
  {
    res.render('admin', { title: 'Websites ~ Control Panel' });
  }
  else
  {
    res.render('login', { title: 'Websites ~ Login' });
  }
});

module.exports = router;