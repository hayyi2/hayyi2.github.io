let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (!slides.length) {
        return
    }

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hidden")
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].getElementsByTagName('img')[0].classList.remove("ring-gray-800")
        dots[i].getElementsByTagName('img')[0].classList.add("ring-transparent")
    }
    
    slides[slideIndex - 1].classList.remove("hidden")
    dots[slideIndex - 1].getElementsByTagName('img')[0].classList.add("ring-gray-800");
    dots[slideIndex - 1].getElementsByTagName('img')[0].classList.remove("ring-transparent");
}
