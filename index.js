const componentBtnContainer = document.querySelector('.components-btn-container');
const componentBtn = document.querySelectorAll('.btn');
const componentContent = document.querySelectorAll('.component--content');


componentBtnContainer.addEventListener('click', function (e) {
	const clicked = e.target;
	componentBtn.forEach((btn) => {

		btn.classList.remove('component--btn__active');
		if (clicked === btn) {
			clicked.classList.add('component--btn__active')
		}

	})
	// console.log(clicked.dataset.tab);

	componentContent.forEach((content) => {
		content.classList.remove('component--content__active');
        document.querySelector(`.component--content-${clicked.dataset.tab}`).classList.add('component--content__active')
	})
	

})