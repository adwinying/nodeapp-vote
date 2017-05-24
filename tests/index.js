const should = require('should');
const sinon = require('sinon');

describe('Express Tests:', () => {
	it('should be listening on port 3000', () => {
		process.env.PORT.should.equal('3000');
	});
});