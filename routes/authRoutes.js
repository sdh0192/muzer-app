const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const express = require("express");
const router = express.Router();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("access token: " + accessToken);
            console.log("refresh token: " + refreshToken);
            console.log("profile: " + profile);
        }
    )
);


router.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

router.get(
    "/auth/google/callback",
    passport.authenticate('google'));


module.exports = router;