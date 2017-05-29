const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const pollRoutes = require('./routes/pollRoutes');

const app = express();
const port = process.env.PORT || 8000;

// Connect to DB
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.DB_URI);
mongoose.connection.on('connected', () => {
	console.log('Connected to mongoDB', process.env.DB_URI);
});
mongoose.connection.on('error', (err) => {
	console.log('Error connecting to DB', err);
});

// CORS mw
app.use(cors());

// Body parser mw
app.use(bodyParser.json());
// Routes
app.use('/auth', authRoutes);
app.use('/poll', pollRoutes);

// Static mw
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.redirect('/poll/all');
});

// express-jwt error handling mw
app.use((err, req, res, next) => {
	if(err.name === 'UnauthorizedError') {
		console.error(err);
		res.status(401).send({
			success: false,
			message:err.message
		});
	}
	next();
});

app.listen(port, () => {
	console.log('Server started on port', port);
});