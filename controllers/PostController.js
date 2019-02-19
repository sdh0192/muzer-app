const mongoose = require("mongoose");
var db = require("../models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/webScraper";

const PostController = {

    makePost: function (req, res) {
        // opens db connection
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
            if (error)
                return res.json({ error: true, message: "Connection to the Database failed." });
            //db query to create and save new post    
            newPost.save()
                // if error, return error
                .then((error, post) => {
                    if (error) {
                        mongoose.disconnect();
                        return res.json({ error: true, message: "Connection to the Database failed." });
                    }
                    //if post found, return post
                    else if (post) {
                        mongoose.disconnect();
                        return res.json(post);
                    }
                });
        });
    },

    getPost: function (req, res) {
        // opens db connection
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
            if (error)
                return res.json({ error: true, message: "Connection to the Database failed." });
            // db query to get post
            db.Post.findOne()
                // if error, return error
                .exec((error, post) => {
                    if (error) {
                        mongoose.disconnect();
                        return res.json({ error: true, message: "Connection to the Database failed." });
                    }
                    //if post found, return post
                    else if (post) {
                        mongoose.disconnect();
                        return res.json(post);
                    }
                });
        });
    },

    deletePost: function () {
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
            if (error)
                return res.json({ error: true, message: "Connection to the Database failed." });
            // db query to find and delete post using ID
            Post.findByIdAndDelete(req.body.postId)
                .exec((error) => {
                    // if error, return error
                    if (error) {
                        mongoose.disconnect();
                        return res.json({ error: true, message: "Connection to the Database failed." });
                    }
                    //if post found, delete post
                    else {
                        mongoose.disconnect();
                        return res.json({ message: "Your post has been successfully deleted" });
                    };
                });
        });
    }
}


module.exports = PostController;