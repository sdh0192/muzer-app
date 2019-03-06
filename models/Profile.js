const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    
    profilePic: { type: String, required: true },

    phoneNumber: { type: String, required: true },

    bio: { type: String, required: true },

    socialLinks: [{ site: String, link: String }],

    availability: [String]
},
{ collection : 'profiles', discriminatorKey : '_type' });

module.exports = mongoose.model("Profile", ProfileSchema);