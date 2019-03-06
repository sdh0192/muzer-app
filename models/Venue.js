const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = require('./Profile');

const VenueProfileSchema = new Schema({

    name: { type: String, require: true },
    
    address: {
        address1: { type: String, require: true },

        address2: String,

        city: { type: String, require: true },

        state: { type: String, require: true },

        zipcode: { type: String, require: true }
    },

    contacts:[{
        name: String,
        email: String,
        phoneNumber: Number
    }],
})

let Venue = ProfileSchema.discriminator("Venue", VenueProfileSchema);
module.exports = Venue;