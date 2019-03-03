const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
    name: { type: String, required: true },
    content: { type: String, required: true}
});

module.exports = CommentSchema;