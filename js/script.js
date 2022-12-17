//$('.slider__body').slick({
//	infinity: true,
//	autoplay: true
//});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');


menuBtn.addEventListener('click', function () {
	menuList.classList.toggle('menu__list--active');
	menuBtn.classList.toggle('menu__btn--active');
	document.querySelector('body').classList.toggle('no-scroll');
});

Fancybox.bind("[data-fancybox]", {
	// Your options go here
});