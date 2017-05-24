const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/userModel');

const options = {
	consumerKey: process.env.TWITTER_CONSUMER_KEY,
	consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
	callbackURL: "/auth/callback"
};

module.exports = (passport) => {
	passport.serializeUser(function(user, done) {
	  done(null, user);
	});
	
	passport.deserializeUser(function(user, done) {
		User.findByUserId(user.twitterId, (err, user) => {
		  done(null, user);
		});
	});

	passport.use(new TwitterStrategy(options,	
		(token, tokenSecret, profile, cb) => {
			console.log(token, tokenSecret);
			User.findOrCreate(profile, (err, user) => {
				return cb(err, user);
			});
		}));
};

module.exports.loggedIn = (req, res, next) => {
	if (req.user) {
		next();
	} else {
		res.redirect('/auth/login');
	}
};