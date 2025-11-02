// Function to animate counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // Update every 16ms (roughly 60fps)
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        start += increment;
        const current = Math.min(Math.round(start), target);
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Initialize counters when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const counterElements = document.querySelectorAll('.counter-number');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the target number from the data attribute
                const target = parseInt(entry.target.getAttribute('data-target'));
                // Start the animation
                animateCounter(entry.target, target);
                // Unobserve after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    // Observe each counter element
    counterElements.forEach(counter => {
        observer.observe(counter);
    });
});
