const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logModel = new Schema({
	pollId: {
		type: String,
		required: true
	},
	userId: Number,
	ipAddr: String
});

Log = module.exports = mongoose.model('Log', logModel);

module.exports.getLogs = (params, callback) => {
	Log.find(params, (err, logs) => {
		if (err) callback(err, null);

		callback(null, logs);
	});
};