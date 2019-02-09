var express = require('express');
var router = express.Router();
var path = require("path");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signin', function(req, res) {
  res.sendFile(path.join(__dirname, "../test-html/signin.html"));
});

router.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, "../test-html/signup.html"));
});


router.get
module.exports = router;
