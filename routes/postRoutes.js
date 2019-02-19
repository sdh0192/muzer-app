const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const Authenticate = require("../validation/ensureAuthenticated");

//route to get a post
router.get("/post", Authenticate, PostController.getPost);

//route to make/save a new post
router.post("/post", Authenticate, PostController.makePost);

//route to delete a post
router.delete("/post", Authenticate, PostController.deletePost);

module.exports = router;