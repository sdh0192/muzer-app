const passport = require('../validation/passport');
const mongoose = require("mongoose");
var db = require("../models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/webScraper";
const sha3_224 = require('js-sha3').sha3_224;

const returnJsonError = function(res, message)
{
    return res.json({ 
        error: true,
        message: message
    });
}

const AuthController = {

    googleLogin: passport.authenticate("google", { scope: ["profile", "email"] }),

    googleCallback:  passport.authenticate('google', { 
        successRedirect: '/feeds',
        failureRedirect: '/auth/login'
    }),

    localLogin: function (req, res, next) 
    {
        passport.authenticate('local', function(err, user) 
        {
            if (err) { return next(err); }

            if (!user) { return returnJsonError(res, 'Incorrect email and password combination.'); }

            req.logIn(user, function(err) 
            {
                if (err) { return next(err); }

                return res.json(user);
            });
        
        })(req, res, next);
    },

    localSignup: function (req, res)
    {
        req.body.email = req.body.email.trim();
        req.body.password = req.body.password.trim();
        const validation = (req.body.email && req.body.password) ? true : false;
        
        if (validation)
        {
            mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, error => 
            {
                if(error) return returnJsonError(res, 'Connection to the Database failed.');
                
                db.AccountBase.findOne({ email:req.body.email })
                    .exec((error, dbPost) =>
                    {
                        if(error) 
                        {
                            mongoose.disconnect();
                            return returnJsonError(res, 'Connection to the Database failed.');
                        }					
                        else if(dbPost) 
                        {
                            mongoose.disconnect();
                            return returnJsonError(res, 'An user already register using this email account.');
                        }

                        AuthController.createLocalAccount(res, req.body.email, req.body.password)
                    });
            });
        }
        else returnJsonError(res, 'Validation failed.');
    },

    createLocalAccount: function(res, email, password)
    {
        let newAccount = new db.Account({ 
            email: email,
            password: sha3_224(password)
        });

        newAccount.save((error, account) => 
        {
            if (error)
            {
                mongoose.disconnect();
                return returnJsonError(res, 'Connection to the Database failed.');
            }
            else
            {
                mongoose.disconnect();
                res.json(account);
            }						
        });
    },

    logout: function (req, res)
    {
        req.logout();
        res.redirect('/');
    }
}

module.exports = AuthController;