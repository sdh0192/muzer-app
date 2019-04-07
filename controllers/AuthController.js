const passport = require('../validation/passport');
const sha3_224 = require('js-sha3').sha3_224;
const Error = require('../models/Error');
var db = require("../models");

const AuthController = {

    googleLogin: passport.authenticate("google", { scope: ["profile", "email"] }),

    googleCallback: passport.authenticate('google', {
        successRedirect: '/feeds',
        failureRedirect: '/auth/login'
    }),

    localLogin: function (req, res, next) {

        passport.authenticate('local', (error, user) => {
            
            if (error) return next(error); 

            if (!user) return res.status(401).json(new Error("AuthenticationError", "Incorrect email and password combination. Try again?"));

            req.logIn(user, error => {
                
                if (error) 
                    return next(error);
                else
                    return res.json(user);
            });

        })(req, res, next);
    },

    localSignup: function (req, res) {
        req.body.email = req.body.email.trim();
        req.body.password = req.body.password.trim();
        const validation = (req.body.email && req.body.password) ? true : false;

        if (validation) {
            db.AccountBase.findOne({ email: req.body.email })
                .exec((error, dbPost) => {
                    if (error)
                        return res.status(500).json(new Error(error.name, error.message));

                    else if (dbPost)
                        return res.status(401).json(new Error("DuplicatedAccount", "A user already registered using this email address."));

                    AuthController.createLocalAccount(req, res, req.body.email, req.body.password);
                });
        }
        else res.status(401).json(new Error("ValidationError", "Provided information is incorrect."));
    },

    createLocalAccount: function (req, res, email, password) {
        let newAccount = new db.Account({
            email: email,
            password: sha3_224(password)
        });

        newAccount.save()
            .then(account => req.logIn(account, () => res.json(account)))
            .catch(error => res.status(500).json(error.name, error.message));
    },

    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    }
}

module.exports = AuthController;