var test = require('tape');
var logic = require('../public/logic');

test('tape is working', function(t) {
	t.equal(1, 1, 'tape is working');
	t.end();
});

test('convert language abbreviation to a full word', function(t) {
	var actual = logic.languageDetected('ar');
	var expected = 'Arabic';

	t.equal(actual, expected, 'ar is abbreviation of Arabic');
	t.end();
});
