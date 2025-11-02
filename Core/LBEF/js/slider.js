// Hero Section Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-advance slides every 5 seconds if there's more than one slide
    if (slides.length > 1) {
        setInterval(nextSlide, 5000);
    }

    console.log('Slider JS loaded');
});
