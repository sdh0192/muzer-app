const mongoose = require("mongoose");
var db = require("../models");
var MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost:27017/webScraper";

const ProfileController = {
    // will search for the profile
    getProfile: function (req, res) {
        // opens db connection
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
            if (error)
                return res.json({ error: true, message: "Connection to the Database failed." });
            // db query to get profile
            db.Profile.findOne()
                // if error, return error
                .exec((error, profile) => {
                    if (error) {
                        mongoose.disconnect();
                        return res.json({ error: true, message: "Connection to the Database failed." });
                    }
                    //if profile found, return profile
                    else if (profile) {
                        mongoose.disconnect();
                        return res.json(profile);
                    }
                });
        });
    },

    postProfile: function (res, req) {
        let newProfile = null;
        //find which type of profile it is, then run the function accordingly to return the new constructor
        if (req.body.profileType === "musician") {
            newProfile = this.createMusician();
        } else if (req.body.profileType === "band") {
            newProfile = this.createBand();
        } else if (req.body.profileType === "venue") {
            newProfile = this.createVenue();
        } else {
            return res.json({ error: true, message: "profile type not selected" })
        }
        // save new profile constructor object to the database
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
            if (error)
                return res.json({ error: true, message: "Connection to the Database failed." });
            // db query to get profile
            newProfile.save()
                // if error, return error
                .then((error, profile) => {
                    if (error) {
                        mongoose.disconnect();
                        return res.json({ error: true, message: "Connection to the Database failed." });
                    }
                    //if profile found, return profile
                    else if (profile) {
                        mongoose.disconnect();
                        return res.json(profile);
                    }
                });
        });

    },

    createMusician: function (input) {
        //create new musician constructor object
        let newMusician = new db.Musician({
            // break up user input into respective fields
            firstName: input.firstName,
            lastName: input.lastname,
            city: input.city,
            genres: input.genres,
            instruments: input.instruments,
            profilePic: input.profilePic,
            phoneNumber: input.phoneNumber,
            bio: input.bio,
            socialLinks: input.socialLinks,
            availability: input.availability
        });
        // return newly created object
        return newMusician;
    },

    createBand: function (input) {
        // create new band constructor object
        let newBand = new db.Band({
            // break up user input into respective fields
            name: input.name,
            city: input.city,
            genres: input.genres,
            members: input.members,
            contacts: input.contacts,
            label: input.label,
            profilePic: input.profilePic,
            phoneNumber: input.phoneNumber,
            bio: input.bio,
            socialLinks: input.socialLinks,
            availability: input.availability
        });
        // return newly created object
        return newBand;
    },

    createVenue: function (input) {
        // create new venue constructor object
        let newVenue = new db.Venue({
            // break up user input into respective fields
            name: input.name,
            address: input.address,
            contacts: input.contacts,
            profilePic: input.profilePic,
            phoneNumber: input.phoneNumber,
            bio: input.bio,
            socialLinks: input.socialLinks,
            availability: input.availability
        });
        // return newly created object
        return newVenue;
    },

    updateProfile: function () {
        throw new Error("Function not implemented.");

        // will validate incomming information
        // will search for the profile
        // will update the profile if found
    },

    deleteProfile: function () {
        throw new Error("Function not implemented.");

        // will search for the profile
        // will delete the profile if found
    }
};

module.exports = ProfileController;
