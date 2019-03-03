const express = require("express");
const router = express.Router();
const SearchController = require("../controllers/SearchController");

//route to get search results
router.get("/searchresults", SearchController.getSearchResults);

module.exports = router;