"use strict";

const $ = jQuery; 

function eventHandler() {

	JSCCommon.init() 


	// onscroll = e => {
 
	// 	const imgs = document.querySelectorAll('.sSituations__img-wrap img'); 
	// 	const n = Math.floor(pageYOffset / innerHeight); 
	// 	console.log(n);
	// 	const m = (pageYOffset % innerHeight) / innerHeight - 4; 
	// 	imgs.forEach((img, i) => { 
	// 		i = (n == i) ? 1  : (n + 1 == i) ? m : 0; 
	// 		// i = Math.max(0, Math.min(1, i)); 
	// 		img.style.setProperty('--o', i) 
	// 	})
	// }



		var $trigger1 = $('#trigger1');
		var $trigger2 = $('#trigger2');
		var $trigger3 = $('#trigger3');
		let counter = 0;

		$(window).scroll(function () {
			var scroll = $(window).scrollTop() + $(window).height() / 2;
			var offset1 = $trigger1.offset().top - 200
			var offset2 = $trigger2.offset().top - 200
			var offset3 = $trigger3.offset().top - 200

			if (scroll >= offset1) {
				$('.sSituations img').attr('src', 'img/img-1.jpg')
				counter = 1;
			}
			if (scroll >= offset2) {
				$('.sSituations img').attr('src', 'img/img-2.jpg')
				counter = 2;
			}
			if (scroll >= offset3) {
				$('.sSituations img').attr('src', 'img/img-3.jpg')
				counter = 3;
			}
		})


};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }