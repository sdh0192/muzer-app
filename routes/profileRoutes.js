const express = require("express");
const router = express.Router();
const ProfileController = require("../controllers/ProfileController");

//route to get a profile
router.get("/profile", ProfileController.getProfile);

//route to post/save a new profile
router.post("/profile", ProfileController.postProfile);

//route to update a user's availability
router.update("/profile/avail", ProfileController.updateAvail);

//route to delete a profile
router.delete("/profile", ProfileController.deleteProfile);
