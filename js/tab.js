let tabAll = document.querySelector('.tab-all');

tabAll.addEventListener('click', function(event) {
	if(event.target.classList.contains("tab")) {
		let tabH = document.getElementsByClassName('tab');
		for (let i = 0; i < tabH.length; i++) {
			tabH[i].classList.remove('type_active');
		}
		event.target.classList.add('type_active');

		var dataTab = event.target.getAttribute('data-tab');

		var tabBody = document.getElementsByClassName('type_box__descr');
		for( var i = 0; i < tabBody.length; i++) {
			if (dataTab != i) {
				tabBody[i].style.display = 'none';
			} else {
				tabBody[i].style.display = 'flex';
			}
		}
	} else if(event.target.parentElement.classList.contains("tab")) {
		let childTab = document.getElementsByClassName('child_tab');

		for(let i = 0; i < childTab.length; i++) {
			childTab[i].parentElement.classList.remove('type_active')
		}
		event.target.parentElement.classList.add('type_active');

		var dataTab = event.target.parentElement.getAttribute('data-tab');

		var tabBody = document.getElementsByClassName('type_box__descr');
		for( var i = 0; i < tabBody.length; i++) {
			if (dataTab != i) {
				tabBody[i].style.display = 'none';
			} else {
				tabBody[i].style.display = 'flex';
			}
		}
	} else if (event.target.classList.contains("news_tab")) {
		let tabH = document.getElementsByClassName('news_tab');
		for (let i = 0; i < tabH.length; i++) {
			tabH[i].classList.remove('news_active');
		}
		event.target.classList.add('news_active');

		var dataTab = event.target.getAttribute('data-tab');

		var tabBody = document.getElementsByClassName('news_page__descr');
			for( var i = 0; i < tabBody.length; i++) {
				if (dataTab != i) {
					tabBody[i].style.display = 'none';
				} else {
					tabBody[i].style.display = 'flex';
				}
			}
	} else if(event.target.parentElement.classList.contains("news_tab")) {
		let childTab = document.getElementsByClassName('child_tab');

		for(let i = 0; i < childTab.length; i++) {
			childTab[i].parentElement.classList.remove('news_active')
		}
		event.target.parentElement.classList.add('news_active');

		var dataTab = event.target.parentElement.getAttribute('data-tab');

		var tabBody = document.getElementsByClassName('news_page__descr');
		for( var i = 0; i < tabBody.length; i++) {
			if (dataTab != i) {
				tabBody[i].style.display = 'none';
			} else {
				tabBody[i].style.display = 'flex';
			}
		}
	} else if (event.target.parentElement.parentElement.classList.contains("news_tab")) {
		let insideChildTab = document.getElementsByClassName('inside_child_tab');

		for(let i = 0; i < insideChildTab.length; i++) {
			insideChildTab[i].parentElement.parentElement.classList.remove('news_active')
		}
		event.target.parentElement.parentElement.classList.add('news_active');

		var dataTab = event.target.parentElement.parentElement.getAttribute('data-tab');

		var tabBody = document.getElementsByClassName('news_page__descr');
		for( var i = 0; i < tabBody.length; i++) {
			if (dataTab != i) {
				tabBody[i].style.display = 'none';
			} else {
				tabBody[i].style.display = 'flex';
			}
		}
	}
})

