var db = require("../models");
const Error = require('../models/Error');

const SearchController = {

    getSearchResults: function (req, res) {

        db.Profile.find({
            $or: [{
                firstName: req.query.search
            },
            {
                lastName: req.query.search
            },
            {
                name: req.query.search
            },
            {
                genres: { $regex: req.query.search }
            },
            {
                instruments: { $regex: req.query.search }
            }]
        })
            .exec((error, profiles) => {

                if (error)
                    return res.status(500).json(new Error(error.name, error.message));
                //if post found, return post
                else if (profiles)
                    return res.json(profiles);
            });
    }
}

module.exports = SearchController;