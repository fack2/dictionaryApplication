module.exports = { languageDetected };

function languageDetected(input) {
	switch (input) {
		case 'ar':
			return 'Arabic';

		case 'en':
			return 'English';

		case 'de':
			return 'German';

		case 'fr':
			return 'French';

		case 'ru':
			return 'Russian';

		case 'ko':
			return 'Korean';
	}
}
