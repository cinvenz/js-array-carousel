const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

// creaare i tag immagine nell'html
for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}
// document.querySelector('.slider-img').classList.add('active');

const listEleImg = document.querySelectorAll('.slider-img'); // non e' un array ma qualcosa di simile

let activeIndex = 0;

// BOTTONE DESTRO

eleBtnRight.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');

	activeIndex++;
	if (activeIndex === listEleImg.length ) {
		activeIndex = 0;
	} 
	

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');

	eleBtnLeft.classList.remove('hidden');
	// if (activeIndex === listEleImg.length - 1) {
	// 	eleBtnRight.classList.add('hidden');
	// }

	eleBtnTop.classList.remove('hidden');
	if (activeIndexCaro === listCaroselloImg.length - 1) {
		// eleBtnBottom.classList.add('hidden');
		
	}
	if (activeIndexCaro === 0) {
		eleBtnTop.classList.add('hidden');
	}

    // SCORRERE CAROSELLO VERSO IL BASSO
    listCaroselloImg[activeIndexCaro+1].classList.add('opacity-chiaro');
    
	
	activeIndexCaro++;

	
	listCaroselloImg[activeIndexCaro-1].classList.remove('opacity-chiaro');


});

// BOTTONE SINISTRO

eleBtnLeft.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');

	// incrementare l'active index
	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');

	eleBtnRight.classList.remove('hidden');
	// if (activeIndex === 0) {
	// 	eleBtnLeft.classList.add('hidden');
	// }

	

    listCaroselloImg[activeIndexCaro].classList.remove('opacity-chiaro');

	
	activeIndexCaro--;

	
	listCaroselloImg[activeIndexCaro].classList.add('opacity-chiaro');

	eleBtnTop.classList.remove('hidden');
	if (activeIndexCaro === listCaroselloImg.length - 1) {
		// eleBtnBottom.classList.add('hidden');
		
	}
	if (activeIndexCaro === 0) {
		eleBtnTop.classList.add('hidden');
	}

	
});



// --------------------- Carosello ------------------------

const arrImagesCaro = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const imgCarosello = document.querySelector('.img-carosello');
const eleBtnTop = document.querySelector('.btn-top');
const eleBtnBottom = document.querySelector('.btn-bottom');

for (let c = 0; c < arrImagesCaro.length; c++) {
	const eleImgCaro = document.createElement('img');
	eleImgCaro.src = arrImagesCaro[c];
	eleImgCaro.classList.add('slider-carosello');

	imgCarosello.append(eleImgCaro);
}

const listCaroselloImg = document.querySelectorAll('.slider-carosello'); 

let activeIndexCaro = 0;
listCaroselloImg[activeIndexCaro].classList.add('opacity-chiaro');


// BOTTONE SOTTO
eleBtnBottom.addEventListener('click', function () {

	listEleImg[activeIndex].classList.remove('active');

	activeIndex++;
	if (activeIndex === listEleImg.length ) {
		activeIndex = 0;
	} 
	

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');

	eleBtnLeft.classList.remove('hidden');
	// if (activeIndex === listEleImg.length - 1) {
	// 	eleBtnRight.classList.add('hidden');
	// }

	eleBtnTop.classList.remove('hidden');
	if (activeIndexCaro === listCaroselloImg.length - 1) {
		// eleBtnBottom.classList.add('hidden');
		
	}
	if (activeIndexCaro === 0) {
		// eleBtnTop.classList.add('hidden');
	}

    // SCORRERE CAROSELLO VERSO IL BASSO
	

	listCaroselloImg[activeIndexCaro+1].classList.add('opacity-chiaro');
    
	
	activeIndexCaro++;

	
	listCaroselloImg[activeIndexCaro-1].classList.remove('opacity-chiaro');

	
});


// BOTTONE SOPRA
eleBtnTop.addEventListener('click', function () {

	listEleImg[activeIndex].classList.remove('active');

	// incrementare l'active index
	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');

	eleBtnRight.classList.remove('hidden');
	// if (activeIndex === 0) {
	// 	eleBtnLeft.classList.add('hidden');
	// }

	

    listCaroselloImg[activeIndexCaro].classList.remove('opacity-chiaro');

	
	activeIndexCaro--;

	
	listCaroselloImg[activeIndexCaro].classList.add('opacity-chiaro');

	eleBtnTop.classList.remove('hidden');
	if (activeIndexCaro === listCaroselloImg.length - 1) {
		// eleBtnBottom.classList.add('hidden');
		
	}
	if (activeIndexCaro === 0) {
		eleBtnTop.classList.add('hidden');
	}

	eleBtnTop.classList.remove('hidden');
	if (activeIndexCaro === listCaroselloImg.length - 1) {
		// eleBtnBottom.classList.add('hidden');
		
	}
	if (activeIndexCaro === 0) {
		// eleBtnTop.classList.add('hidden');
	}

	
	listCaroselloImg[activeIndexCaro].classList.remove('opacity-chiaro');



	
	
	if (activeIndexCaro === 0) {
		activeIndexCaro = listCaroselloImg.length;
	}
	activeIndexCaro--;

	

	
	listCaroselloImg[activeIndexCaro].classList.add('opacity-chiaro');

    // SCORRERE IMMAGINI VERSO SINISTRA

});