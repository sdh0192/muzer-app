const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get("/google", AuthController.googleLogin);

router.get("/google/callback", AuthController.googleCallback);

router.post('/signup', AuthController.localSignup);

router.post('/login', AuthController.localLogin);

router.get('/logout', AuthController.logout);

module.exports = router;