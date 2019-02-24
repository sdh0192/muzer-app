const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/ProfileController");
const Authenticated = require('../validation/ensureAuthenticated');

//route to get a profile
router.get("/profile", Authenticated, ProfileController.getProfile);

//route to post/save a new profile
router.post("/profile", Authenticated, ProfileController.postProfile);

//route to update a user's availability
router.put("/profile/avail", Authenticated, ProfileController.updateAvail);

//route to delete a profile
router.delete("/profile", Authenticated, ProfileController.deleteProfile);

module.exports = router;
