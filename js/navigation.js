
let nav_item = document.getElementsByClassName('nav_item');

for (let i = 0; i < nav_item.length; i++) {
	nav_item[i].classList.remove('nav_item__active');
}


if (window.location.pathname.match(/\/+$/)|| window.location.pathname.match(/index.html/) || window.location.pathname.match(/index.php/)) {
	nav_item[0].classList.add('nav_item__active');
} else if (window.location.pathname.match(/page.html/) || window.location.pathname.match(/page.php/)) {
	nav_item[1].classList.add('nav_item__active');
} else if (window.location.pathname.match(/news.html/) || window.location.pathname.match(/news.php/)) {
	nav_item[2].classList.add('nav_item__active');
} else if (window.location.pathname.match(/contacts.html/) || window.location.pathname.match(/contacts.php/)) {
	nav_item[3].classList.add('nav_item__active');
}