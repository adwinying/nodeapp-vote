const express = require('express');
const passport = require('passport');
const authRouter = express.Router();
const loggedIn = require('../config/passport.js').loggedIn;

authRouter.get('/login', passport.authenticate('twitter'));

authRouter.get('/callback', passport.authenticate('twitter', {
	successRedirect: '/poll/userpolls',
	failureRedirect: '/'
}));

authRouter.get('/logout', (req, res) => {
	req.logout();
	res.json({logout: true});
});

authRouter.get('/check', loggedIn, (req, res) => {
	res.json({
		success: true,
		user: req.user
	});
});

module.exports = authRouter;