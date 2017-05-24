const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

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

// Body parser mw
app.use(bodyParser.json());

// Passport mw
app.use(session({
	secret: 'asdfgh',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


// Routes
app.use('/auth', authRoutes);
app.use('/poll', pollRoutes);

// Static mw
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.json({hello: 'world'});
});

app.listen(port, () => {
	console.log('Server started on port', port);
});