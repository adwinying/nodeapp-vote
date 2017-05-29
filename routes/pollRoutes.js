const express = require('express');
const pollRouter = express.Router();
const Poll = require('../models/pollModel');

function sendErr(res, err) {
	res.send(401).json({
		success: false,
		message: err
	});
}

// Fetch all polls
pollRouter.get('/all', (req, res) => {
	Poll.getAllPolls((err, results) => {
		if (err) {
			sendErr(res, err);
		} else {
			res.json({
				success: true,
				polls: results
			});
		}
	});
});

// Fetch recent polls
pollRouter.get('/recent', (req, res) => {
	Poll.getRecentPolls((err, results) => {
		if (err) {
			sendErr(res, err);
		} else {
			res.json({
				success: true,
				polls: results
			});
		}
	});
});

// Fetch user's polls
pollRouter.get('/userpolls', (req, res) => {
	Poll.findByUserId(req.user.twitterId, (err, results) => {
		if (err) {
			sendErr(res, err);
		} else {
			res.json({
				success: true,
				polls: results
			});
		}
	});
});

// Create new poll
// TODO: restrict access
pollRouter.post('/new', (req, res) => {
	let newPoll = new Poll({
		ownerId: 53850219,
		title: req.body.title,
		opts: req.body.options.split('\n').map((opt) => {
			return {
				name: opt,
				count: 0
			};
		})
	});

	newPoll.save(() => {
		console.log('Successfully saved new poll');
		res.json({
			success: true,
			data: newPoll
		});
	});
});

//pollRouter mw
pollRouter.use('/:pollId', (req, res, next) => {
	Poll.findById(req.params.pollId, (err, poll) => {
		if (err) {
			sendErr(res, err);
		} else {
			req.poll = poll;
			next();
		}
	});
});

pollRouter.route('/:pollId')
	// Get single poll
	.get((req, res) => {
		res.json({
			success: true,
			poll: req.poll
		});
	})
	// Add poll options
	// TODO: Restrict access
	.put((req, res) => {
		req.poll.opts = [
			...req.poll.opts, 
			{
				name: req.body.opt,
				count: 1
			}
		];

		req.poll.updated = Date.now();

		req.poll.save((err) => {
			if (err) {
				sendErr(res, err);
			} else {
				res.json({
					success: true,
					poll: req.poll
				});
			}
		});
	})
	// Increment option count
	.patch((req, res) => {
		req.poll.opts.map((opt) => {
			if (opt._id.toString() === req.body._id) {
				return {
					name: opt.name,
					_id: opt._id,
					count: opt.count++
				};
			} else {
				return opt;
			}
		});

		req.poll.updated = Date.now();

		req.poll.save((err) => {
			if (err) {
				sendErr(res, err);
			} else {
				res.json({
					success: true,
					poll: req.poll
				});
			}
		});
	})
	// Delete poll
	// TODO: restrict access to poll owner
	.delete((req, res) => {
		req.poll.remove((err) => {
			if (err) {
				sendErr(res, err);
			} else {
				res.json({
					success: true,
					message: 'Poll successfully deleted'
				});
			}
		});
	});


module.exports = pollRouter;