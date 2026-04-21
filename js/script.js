const navMobile = document.querySelector('.nav-mobile');
const navDesktop = document.querySelector('.nav-desktop');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer_year');

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile--active');

	navBtnBars.classList.remove('black-bars-color')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};

document.addEventListener('DOMContentLoaded', function () {
	const addShadow = () => {
		if (window.scrollY >= 300) {
			navDesktop.classList.add('shadow-bg');
		} else {
			navDesktop.classList.remove('shadow-bg');
		}
	};
	window.addEventListener('scroll', addShadow);
});

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {

		if(section.classList.contains('white-section') && section.offsetTop <= currentSection) {
			navBtnBars.classList.add('black-bars-color')
		} else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

window.onscroll = () => {
	allSections.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')

		if(top >= offset && top < offset +height){
			allNavItems.forEach(links => {
				links.classList.remove('active')
				document.querySelector('.nav-desktop .nav__item[href*=' + id +']').classList.add('active')
			})
		}
	})
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver)
