// мобільне меню
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuClose = document.querySelector('.menu__close');
const menuLink = document.querySelector('.menu__item');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu--open');
});
menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu--open');
});
// закриття бургера після кліку на посилання
menuLink.addEventListener('click', ()=>{
    menuList.classList.remove('menu--open');
});



//кнопка Наверх

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const icons = document.querySelectorAll('.menu__btn');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


// просмотр галереи проекта
$(document).ready(function() {
	$('.popup__link').magnificPopup({
		disableOn: 900,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	$('.project__gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
});

