$('.design-slider').slick({
	dots: false,
	slidesToShow: 4,
	variableWidth: true,
	infinity: true,
	prevArrow: '<img class="arrow arrow-left" src="img/design/icons/arrow-left.svg" alt="arrow left">',
	nextArrow: '<img class="arrow arrow-right" src="img/design/icons/arrow-right.svg" alt="arrow right">',
	autoplay: true,
	responsive: [
		{
			breakpoint: 481,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
			}
		}
	]
});

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link')

console.log(menuLinks);

menuBtn.addEventListener('click', function () {
	menuList.classList.toggle('menu__list--active');
	menuBtn.classList.toggle('menu__btn--active');
	document.querySelector('body').classList.toggle('no-scroll');
	menuLinks.forEach((link) => {
		link.addEventListener('click', () => {
			menuList.classList.remove('menu__list--active');
			menuBtn.classList.remove('menu__btn--active');
			document.querySelector('body').classList.remove('no-scroll');
		})
	})
});

Fancybox.bind("[data-fancybox]", {
	// Your options go here
});