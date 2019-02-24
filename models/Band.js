const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = require('./Profile');

const BandProfileSchema = new Schema({

    name: { type: String, require: true },

    city: { type: String, require: true },

    genres: [{ type: String, require: true }],

    members: [{
        name: { type: String, require: true },
        instrument: { type: String, require: true }
    }],

    contacts:[{
        name: String,
        email: String,
        phoneNumber: Number
    }],

    label: {
        unsigned: { type: Boolean, require: true },
        labelName: String
    }
})

let Band = ProfileSchema.discriminator("Band", BandProfileSchema);
module.exports = Band;