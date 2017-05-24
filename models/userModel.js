const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema ({
	twitterId: {
		type: Number,
		required: true
	},
	displayName: {
		type: String,
	},
	username: {
		type: String,
	}
});

const User = module.exports = mongoose.model('User', userModel);

module.exports.findOrCreate = (profile, callback) => {
	User.findOne({twitterId: profile.id}, (err, user) => {
		if (err) { callback(err, null); }

		if (user) {
			callback(null, user);
		} else {
			console.log('User not found. Creating new db entry');
			let newUser = new User({
				twitterId: profile.id,
				displayName: profile.displayName,
				username: profile.username
			});

			newUser.save(callback);
		}
	});
};

module.exports.findByUserId = (userId, callback) => {
	User.findOne({twitterId: userId}, (err, user) => {
		if (err) { callback(err, null); }

		if (user) {
			callback(null, user);
		} 
	});
};
