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

var input = document.getElementById('input');
var inputLang = document.getElementById('inputLang');
var translateButton = document.getElementById('translate');
var translation = document.getElementById('translation');
var detectedLang = document.getElementById('detectedLang');

translateButton.addEventListener('click', function() {
	var text = input.value;
	console.log('input value', text);
	var detectUrl = `https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20190702T084028Z.6d9a7275087030e7.c7f5e34f73df150db59b46361478dc0c93bfd86c&text=${text}`;

	//get the input text and add it to the api
	console.log(detectUrl);

	detectedLang.value = '';
	translation.value = '';
	request(detectUrl, (data) => {
		console.log(data);
		detectedLang.value = data.lang; //get the detected lang and add it to the api

		translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190702T084028Z.6d9a7275087030e7.c7f5e34f73df150db59b46361478dc0c93bfd86c&text=${text}&lang=${data.lang}-${inputLang.value}`;
		request(translateUrl, (data) => {
			console.log(data.text[0]);
			translation.value = data.text[0];
		});
	});
});
