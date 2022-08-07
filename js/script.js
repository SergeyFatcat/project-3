const tabs = document.querySelectorAll('.section-2__tabs-item');
const arrowsLeft = document.querySelectorAll('.slider-arrow-left');
const arrowsRight = document.querySelectorAll('.slider-arrow-right');
const diskButtons = document.querySelectorAll('.disk');
const sliderImages = document.querySelectorAll('.section-2__img');
const cityDetails = document.querySelectorAll('.city-details');
const apartmentAreaDetails = document.querySelectorAll('.apartment-area-details');
const repairTimeDetails = document.querySelectorAll('.repair-time-details');
const repairCostDetails = document.querySelectorAll('.repair-cost-details');

let sliderIndex = 0;

function catchClick(items) {
	items.forEach((item, index) => {
		item.addEventListener('click', () => {
			sliderIndex = index;
			activateItems();
		})
	});
}

catchClick(tabs);
catchClick(diskButtons);


arrowsRight.forEach(item => {
	item.addEventListener('click', moveRight);
})

arrowsLeft.forEach(item => {
	item.addEventListener('click', moveLeft);
})

function activateItem(items) {
	for (let item of items) {
		item.classList.remove('active');
	}
	items[sliderIndex].classList.add('active');
}

function activateItems() {
	console.log(sliderIndex);
	activateItem(tabs);
	activateItem(diskButtons);
	activateItem(sliderImages);
	activateItem(cityDetails);
	activateItem(apartmentAreaDetails);
	activateItem(repairTimeDetails);
	activateItem(repairCostDetails);
}

function moveRight() {
	if (sliderIndex >= 2) {
		sliderIndex = 0;
	} else {
		sliderIndex++;
	}
	activateItems();
}

function moveLeft() {
	if (sliderIndex <= 0) {
		sliderIndex = 2;
	} else {
		sliderIndex--;
	}
	activateItems();
}




