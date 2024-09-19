const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const element = document.querySelector('.footer')
const bounding = element.getBoundingClientRect();

function isInViewport(element) {
	// Get the bounding client rectangle position in the viewport
    const bounding = element.getBoundingClientRect();
	const viewBoxSvg = document.querySelector('.about-svg')
    
    // Checking part. Here the code checks if it's *fully* visible
    // Edit this part if you just want a partial visibility
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        console.log('In the viewport! :)');
        return true;
		viewBoxSvg.setAttribute("viewbox","0 0 100 300");
    } else {
        console.log('Not in the viewport. :(');
        return false;
    }
}
window.addEventListener('scroll', function (event) {
    if (isInViewport(element)) {
      // update the element display
    }
}, false);


const handleNav = () => {
	nav.classList.toggle('nav--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}



navBtn.addEventListener('click', handleNav)
