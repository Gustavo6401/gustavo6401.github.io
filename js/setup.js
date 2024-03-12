let currentSlide = 0

/**
 * 
 * @param {number} index 
 * @returns {void}
 */
function showSlide(index) {
    const carouselWrapper = document.getElementById('carouselWrapper');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    currentSlide = (index + totalSlides) % totalSlides;

    const offset = -currentSlide * 100 + '%';
    carouselWrapper.style.transform = `translateX(${offset})`
}

/**
 * 
 * @returns {void}
 */
function nextSlide() {
    showSlide(currentSlide + 1);
}

/**
 * @returns {void}
 */

function prevSlide() {
    showSlide(currentSlide - 1);
}