var db = require("../models");
const Error = require('../models/Error');

const PostController = {

    makePost: function (req, res) {

        newPost = new db.Post({
            profile: req.user.profile.id,
            name: req.user.profile.name,
            postContent: req.body.content
        });

        newPost.save()
            .then(post => res.json(post))
            .catch(error => res.status(500).json(new Error(error.name, error.message)));
    },

    getPost: function (req, res) {

        db.Post.find().sort({ field: 'asc', _id: -1 }).limit(15).populate('profile')
            // if error, return error
            .exec((error, posts) => {
                if (error)
                    return res.status(500).json(new Error(error.name, error.message));
                //if post found, return post
                else if (posts)
                    return res.json(posts);
            });
    },

    deletePost: function () {

        // db query to find and delete post using ID
        Post.findByIdAndDelete(req.body.postId)
            .exec(error => {
                // if error, return error
                if (error)
                    return res.status(500).json(new Error(error.name, error.message));
                //if post found, delete post
                else
                    return res.json({ error: false, message: "Your post has been successfully deleted" });
            });
    },

    postComment: function (req, res) {

        postId = req.query.id;

        if (postId) {

            db.Post.findById(postId).exec((error, post) => {

                if (error)
                    return res.status(500).json(new Error(error.name, error.message));
                //if post found, return post
                else if (post) {

                    let newComment = {
                        content: req.body.content,
                        name: req.user.name,
                        profile: req.user.profile._id
                    }

                    post.comments.push(newComment);
                    post.save()
                        .then(() => res.json(newComment))
                        .catch(error => res.status(500).json(new Error(error.name, error.message)));
                }
            });
        }
        else return res.json({ error: true, message: "Invalid Post ID" });
    }
}


module.exports = PostController;