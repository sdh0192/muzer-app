const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('./Comment');

const PostSchema = new Schema({

    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
    name: { type: String, required: true },
    postContent: { type: String, required: true},
    comments: [commentSchema]
},
{ collection : 'posts' });

module.exports = mongoose.model("Post", PostSchema);