'use strict'


window.addEventListener('load', function () { 
	
	let overlayLoading = document.querySelectorAll('.container-overlay');

	for (let i = 0; i < overlayLoading.length; i++) {
		overlayLoading[i].classList.remove('container-overlay');
	}

});