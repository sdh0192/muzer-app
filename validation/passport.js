const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
const sha3_224 = require('js-sha3').sha3_224;
var db = require("../models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/webScraper";


passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
				if (error) return done(error, null);

				db.GoogleAccount.findOne({ googleId: profile.id })
					.then(existingUser => {
						if (existingUser) {
							// we already have a record with the given profile ID
							mongoose.disconnect();
							return done(null, existingUser);
						}
						else {
							// we don't have a record of a user with the given profile ID, make a new record
							new db.GoogleAccount({ googleId: profile.id, email: profile.emails[0].value })
								.save()
								.then(user => {
									mongoose.disconnect();
									return done(null, user);
								});
						}
					});
			});
		})
);

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, (email, password, cb) => {
	mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
		if (error) return cb(error);

		db.Account.findOne({ email: email })
			.populate('Profile')
			.exec((error, user) => {
				if (error) {
					mongoose.disconnect();
					return cb(error);
				}
				else if (!user) {
					mongoose.disconnect();
					return cb(null, false);
				}
				else if (user.password != sha3_224(password)) {
					mongoose.disconnect();
					return cb(null, false);
				}
				else {
					mongoose.disconnect();
					return cb(null, user);
				}
			});
	});
}));

passport.serializeUser((user, cb) => cb(null, user.id));

passport.deserializeUser(function (id, cb) {
	mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, error => {
		if (error) return cb(error);

		db.AccountBase.findById(id)
			.populate('Profile')
			.exec(function (error, user) {
				if (error) {
					mongoose.disconnect();
					return cb(error);
				}

				mongoose.disconnect();
				return cb(null, user);
			});
	});
});

module.exports = passport;