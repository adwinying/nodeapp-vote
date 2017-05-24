const express = require('express');
const passport = require('passport');
const authRouter = express.Router();

authRouter.get('/login', passport.authenticate('twitter'));

authRouter.get('/callback', passport.authenticate('twitter', {
	successRedirect: '/poll/userpolls',
	failureRedirect: '/'
}));

authRouter.get('/logout', (req, res) => {
	req.logout();
	res.json({logout: true});
});

module.exports = authRouter;