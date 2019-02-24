var express = require('express');
var router = express.Router();
var db = require("../models");
var path = require("path");


/* GET users listing. */
router.get('/', function(req, res, next) {

  let newVenue = new db.GoogleAccount({ email: "lindolo25@outlook.com" });
  console.log(newVenue);
  newVenue.profile = new db.Venue({ name: "test" })._id;

  res.send('respond with a resource');
});

router.get('/signin', function(req, res) {
  res.sendFile(path.join(__dirname, "../test-html/signin.html"));
});

router.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, "../test-html/signup.html"));
});


module.exports = router;

