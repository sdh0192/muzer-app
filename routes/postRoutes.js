const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const Authenticate = require("../validation/ensureAuthenticated");

//route to get a post
router.get("/profile", Authenticate, PostController.getProfile);

//route to make/save a new post
router.post("/profile", Authenticate, PostController.postProfile);

//route to delete a post
router.delete("/profile", Authenticate, PostController.deleteProfile);

