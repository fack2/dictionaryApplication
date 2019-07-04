function languageDetected(input) {
	switch (input) {
		case 'ar':
			return 'Arabic';
			break;
		case 'en':
			return 'English';
			break;
		case 'de':
			return 'German';
			break;
		case 'fr':
			return 'French';
			break;
		case 'ru':
			return 'Russian';
			break;
		case 'ko':
			return 'Korean';
			break;
				
		case 'tr':
			return 'Turkish';
			break;
	}
}

var input = document.getElementById('input');
var inputLang = document.getElementById('inputLang');
var translateButton = document.getElementById('translate');
var translation = document.getElementById('translation');
var detectedLang = document.getElementById('detectedLang');
var key = 'trnsl.1.1.20190702T084028Z.6d9a7275087030e7.c7f5e34f73df150db59b46361478dc0c93bfd86c';

function request(url, cb) {
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return cb(data);
		})
		.catch((error) => {
			console.log(error);
		});
}

translateButton.addEventListener('click', function() {
	var text = input.value.trim();
	var detectUrl = `https://translate.yandex.net/api/v1.5/tr.json/detect?key=${key}&text=${text}`;
	if (text !== '') {
		request(detectUrl, (data) => {
			detectedLang.value = languageDetected(data.lang);

			var selectedLang = inputLang[inputLang.selectedIndex].value;
			translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=${data.lang}-${selectedLang}`;
			request(translateUrl, (data) => {
				translation.value = data.text[0];
			});
		});
	} else {
		alert('please fill the input text box!');
	}
});
