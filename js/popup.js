let popupBtnMain = document.getElementsByClassName('index_popup__btn')[0];
let index_popup = document.getElementsByClassName('index_popup')[0];
let closeBtn = document.getElementsByClassName('popup_close');

let popupBtn = document.getElementsByClassName('popup_btn');
let popup = document.getElementsByClassName('popup')[0];

popupBtnMain.addEventListener('click', function() {
	index_popup.style.display = 'flex';
})

for ( let i = 0; i < popupBtn.length; i++) {
	popupBtn[i].addEventListener('click', function() {
		popup.style.display = 'flex';
	})
}

for (let i = 0; i < closeBtn.length; i++) {
	closeBtn[i].addEventListener('click', function(event) {
		event.preventDefault();
		index_popup.style.display = 'none';
		popup.style.display = 'none';
	})
}


