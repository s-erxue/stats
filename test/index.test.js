const assert = require('assert');
const stats = require('../index');

describe('stats', function() {
	it('.mean', function() {
		assert.strictEqual(stats.mean([1, 2, 3]), 2);
		assert.throws(() => stats.mean([]), stats.NoDataError);
	});
});