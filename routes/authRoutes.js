const express = require('express');
const authRouter = express.Router();
const authCheck = require('../config/jwt.js');

authRouter.get('/check', authCheck, (req, res) => {
	res.json({
		success: true,
		user: req.user,
		twitterId: req.user.sub.replace("twitter|", "")
	});
});

module.exports = authRouter;