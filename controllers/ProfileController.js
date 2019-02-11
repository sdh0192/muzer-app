const mongoose = require("mongoose");
var db = require("../models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/webScraper";

const ProfileController = {

    getProfile: function()
    {
        throw new Error("Function not implemented.");

        // will search for the profile
        // will retunr the profile if found.
    },

    postProfile: function()
    {
        throw new Error("Function not implemented.");

        // will validate incomming information
        // will switch the profile type
        // will delegate the the creation to the correct function.
    },

    createMusician: function()
    {
        throw new Error("Function not implemented.");

        // postProfile will use this function to create a musician profile
    },

    createBand: function()
    {
        throw new Error("Function not implemented.");

        // postProfile will use this function to create a band profile
    },

    createVenue: function()
    {
        throw new Error("Function not implemented.");

        // postProfile will use this function to create a venue profile
    },

    updateProfile: function()
    {
        throw new Error("Function not implemented.");

        // will validate incomming information
        // will search for the profile
        // will update the profile if found
    },

    deleteProfile: function()
    {
        throw new Error("Function not implemented.");

        // will search for the profile
        // will delete the profile if found
    }
}

module.exports = ProfileController;