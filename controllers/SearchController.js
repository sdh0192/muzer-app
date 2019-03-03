const mongoose = require("mongoose");
var db = require("../models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/webScraper";

const SearchController = {

    getSearchResults: function (req, res) {
        //open db connection
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
            if (error)
                return res.json({ error: true, message: "Connection to the Database failed." });
            //db query to pull profiles based on genre
            db.Profile.find({ $or: [{ firstName: req.query.search }, { lastName: req.query.search }, { name: req.query.search },
                                    { genres:{$regex: req.query.search,}}, { instruments:{$regex: req.query.search}}]})
                .exec((error, profiles) => {
                    if (error) {
                        mongoose.disconnect();
                        return res.json({ error: true, message: "Connection to the Database failed." });
                    }
                    //if post found, return post
                    else if (profiles) {
                        mongoose.disconnect();
                        return res.json(profiles);
                    }
                });
        })
    }
}

module.exports = SearchController;