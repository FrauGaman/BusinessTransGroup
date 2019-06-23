let order_btn = document.querySelector('.order_btn');
let list = document.querySelector('.type_service__list');
let input = document.querySelector('.selector_text');
let li = document.getElementsByClassName('list_item');
let tabBody = document.getElementsByClassName('type_box__descr');

order_btn.addEventListener('click', function() {
	order_btn.classList.toggle("order_active");
	list.classList.toggle("list_active");

})

for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('click', function(event) {
		for (let j = 0; j < tabBody.length; j++) {
			tabBody[j].style.display = 'none'
		}
		if(event.target.classList.contains('list_item')) {
			input.innerHTML = event.target.innerHTML;
		} else if (event.target.parentElement.classList.contains('list_item')) {
			input.innerHTML = event.target.parentElement.innerHTML;
		}
		order_btn.classList.toggle("order_active");
		list.classList.toggle("list_active");
		tabBody[i].style.display = 'flex';
	})
}
