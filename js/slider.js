slideIndex = 1;
showSlide(slideIndex);

function plusSlides () {
	showSlide(slideIndex += 1)
}

function minusSlides () {
	showSlide(slideIndex -= 1)
}

function currentSlides (n){
	showSlide(slideIndex = n)
}

function showSlide(n){
	let i;
	let slides = document.getElementsByClassName("slider__item");
	let dots = document.getElementsByClassName("slider-dots__item");
	let linkActive = document.getElementsByClassName("nav__link");
	if (n > slides. length) {
		slideIndex = 1;
	}
	if (n < 1){
		slideIndex = slides.length
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
		dots[i].className = dots[i].className.replace(" active", "");
		linkActive[i].className = linkActive[i].className.replace(" active", "")
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += " active";
	linkActive[slideIndex -1].className += " active";

}