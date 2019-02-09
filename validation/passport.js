const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
var db = require("../models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/webScraper";

passport.use(
	new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: "/auth/google/callback"
	},
	(accessToken, refreshToken, profile, done) => 
	{
		console.log("access token: " + accessToken);
		console.log("refresh token: " + refreshToken);
		console.log(profile);
		return done(null, profile);
	})
);

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, cb) => 
{
	mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, error => 
    {
        if(error) return cb(error);

        db.Account.findOne({ email: email })
			.populate('Profile')
			.exec((error, user) => 
			{
				if(error)
				{
					mongoose.disconnect();
					return cb(error);
				}
				else if (!user) 
				{ 
					mongoose.disconnect();
					return cb(null, false);
				}
				else if (user.password != password)
				{
					mongoose.disconnect();
					return cb(null, false);
				}
				else
				{
					mongoose.disconnect();
					return cb(null, user);
				}            
			});
	});
}));

passport.serializeUser((user, cb) => cb(null, user.id));

passport.deserializeUser(function(id, cb) 
{
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, error => 
    {
        if(error) return cb(error);

        db.AccountBase.findById(id)
			.populate('Profile')
			.exec(function (error, user)
			{
				if (error) 
				{ 
					mongoose.disconnect();
					return cb(error); 
				}

				mongoose.disconnect();
				return cb(null, user);
			});
	});
});

module.exports = passport;