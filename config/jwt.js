const jwt = require('express-jwt');
const jwtCheck = jwt({
	secret: process.env.JWT_SECRET,
  issuer: 'https://adwin.auth0.com/'
});

module.exports = jwtCheck;