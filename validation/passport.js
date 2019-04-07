const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require('passport-local').Strategy;
const sha3_224 = require('js-sha3').sha3_224;
var db = require("../models");


passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			
			db.GoogleAccount.findOne({ googleId: profile.id })
				.then(existingUser => {
					if (existingUser) 
						return done(null, existingUser);
					else {
						// we don't have a record of a user with the given profile ID, make a new record
						new db.GoogleAccount({ googleId: profile.id, email: profile.emails[0].value })
							.save()
							.then(user => done(null, user))
							.catch(error => done(error, null));
					}
				});
		})
);

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, (email, password, cb) => {
	
	db.Account.findOne({ email: email })
		.populate('Profile')
		.exec((error, user) => {
			if (error) 
				return cb(error);
			else if (!user)
				return cb(null, false);
			else if (user.password != sha3_224(password))
				return cb(null, false);
			else 
				return cb(null, user);
		});
}));

passport.serializeUser((user, cb) => cb(null, user.id));

passport.deserializeUser(function (id, cb) {
	
	db.AccountBase.findById(id)
		.populate('profile')
		.exec(function (error, user) {
			if (error) 
				return cb(error);
			else
				return cb(null, user);
		});
});

module.exports = passport;