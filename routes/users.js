var express = require('express');
var router = express.Router();
const profilesCtrl = require('../controllers/profiles');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/parks', isLoggedIn, profilesCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
};

module.exports = router;