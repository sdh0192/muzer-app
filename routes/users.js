var express = require('express');
var router = express.Router();
//var db = require("../models");

/* GET users listing. */
router.get('/', function(req, res, next) {

  // let newVenue = new db.Account({ email: "lindolo25@outlook.com" });
  // console.log(newVenue);
  // newVenue.profile = new db.Venue({ name: "test" })._id;

  res.send('respond with a resource');
});

module.exports = router;
