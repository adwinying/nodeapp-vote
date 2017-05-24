const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optSchema = new Schema ({
	name: String,
	count: {
		type: Number,
		default: 0
	}
});

const pollModel = new Schema ({
	ownerId: {
		type: Number,
		required: true
	},
	title: {
		type: String,
	},
	opts: {
		type: [optSchema]
	},
	updated: {
		type: Date,
		default: Date.now
	}
});

Poll = module.exports = mongoose.model('Poll', pollModel);

module.exports.findByUserId = (userId, callback) => {
	Poll.find({ ownerId: userId}, (err, polls) => {
		if (err) callback(err, null);

		callback(null, polls);
	});
};

module.exports.getAllPolls = (callback) => {
	Poll.find({}, (err, polls) => {
		if (err) callback(err, null);

		callback(null, polls);
	});
};

module.exports.getRecentPolls = (callback) => {
	Poll.find({}).sort('-updated').limit(10).exec((err, polls) => {
		if (err) callback(err, null);

		callback(null, polls);
	});
};