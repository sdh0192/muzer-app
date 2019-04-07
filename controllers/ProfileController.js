var db = require("../models");
const Error = require('../models/Error');

const ProfileController = {
    // will search for the profile
    getProfile: function (req, res) {
        // db query to get profile
        db.Profile.findById(req.query.id)
            .exec((error, profile) => {
                // if error, return error
                if (error) 
                    return res.status(500).json(new Error(error.name, error.message));
                //if profile found, return profile
                else if (profile)
                    return res.json(profile);
            });
    },

    postProfile: function (req, res) {

        let newProfile = null;

        //switch profile type, then run the function accordingly to return the new constructor
        switch (req.body.profileType)
        {
            case "musician":
                newProfile = ProfileController.createMusician(req.body);
                break;
            case "band":
                newProfile = ProfileController.createBand(req.body);
                break;
            case "venue":
                newProfile = ProfileController.createVenue(req.body);
                break;
            default:
                res.json(new Error("InvalidProfile", "Invalid profile type"));
                return;
        }

        if(newProfile)
        {
            // save profile to the DB
            newProfile.save()
                .then((profile) => {
                    // once the profile is saved
                    // update account profile ID
                    req.user.profile = profile._id;
                    req.user.save()
                        .then(() => res.json(profile))
                        .catch(error => res.json(new Error(error.name, error.message)));
                })
                .catch(error => res.json(new Error(error.name, error.message)));
        }
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

    updateAvail: (req, res) => res.status(501).json(new Error("NoImplementedResource", "Implementation for this Resource is incomplete.")),

    deleteProfile: (req, res) => res.status(501).json(new Error("NoImplementedResource", "Implementation for this Resource is incomplete.")),
}

module.exports = ProfileController;
