const express = require('express');
const router = express.Router();
const passport = require('../validation/passport');
const mongoose = require("mongoose");
var db = require("../models");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/webScraper";

router.get("/google", passport.authenticate("google", 
{ 
	scope: ["profile", "email"] 
}));

router.get("/google/callback", passport.authenticate('google', 
{ 
	successRedirect: '/profile',
	failureRedirect: '/auth/login'
}));

router.post('/signup', function (req, res)
{
    req.body.email = req.body.email.trim();
    req.body.password = req.body.password.trim();

    var validation = (req.body.email && req.body.password) ? true : false;
    
    if (validation)
    {
		mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, error => 
		{
			if(error) return res.json({ 
					error: true,
					message: 'Connection to the Database failed.'
				});

			
			db.AccountBase.findOne({ email:req.body.email })
				.exec((error, dbPost) =>
				{
					if(error) 
					{
						mongoose.disconnect();
						return res.json({ 
							error: true,
							message: 'Connection to the Database failed.'
						});
					}					
					else if(dbPost) 
					{
						mongoose.disconnect();
						return res.json({ 
							error: true,
							message: 'Username already exist.'
						});
					}

					let newAccount = new db.Account({ 
						email: req.body.email,
						password: req.body.password
					});

					newAccount.save((error, account) => 
					{
						if (error)
						{
							mongoose.disconnect();
							return res.json({ 
								error: true,
								message: 'Connection to the Database failed.'
							});
						}
						else
						{
							mongoose.disconnect();
							res.json(account);
						}						
					});
				});
		});
    }
    else res.json({ 
        error: true,
        message: 'Validation failed.'
    });
});

router.post('/login', function (req, res, next) 
{
    passport.authenticate('local', function(err, user) 
    {
        if (err) { return next(err); }

        if (!user) { return res.json(false); }

        req.logIn(user, function(err) 
        {
            if (err) { return next(err); }
            return res.json(user);
        });
      
    })(req, res, next);
});

router.get('/logout', function (req, res)
{
    req.logout();
    res.redirect('/');
});

module.exports = router;