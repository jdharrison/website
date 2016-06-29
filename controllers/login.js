const admin_username = 'admin';
const admin_password = 'password';

var express = require('express');
var router = express.Router();

var auth = require('../models/auth');

/* POST login */
router.post('/', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  if(username == admin_username && password == admin_password)
  {
    auth.add(req.connection.remoteAddress);
    res.render('admin', { title: 'Websites ~ Control Panel' });
  }
  else
  {
    res.render('error', { message: 'Invalid Login',
                          error: {},
                          title: 'Websites ~ ERROR' });
  }
});

module.exports = router;
