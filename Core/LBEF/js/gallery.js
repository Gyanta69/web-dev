document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Handle hash navigation
    function handleHash() {
        const hash = window.location.hash.slice(1); // Remove the # symbol
        if (hash) {
            const targetButton = document.querySelector(`.category-btn[data-category="${hash}"]`);
            if (targetButton) {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                targetButton.classList.add('active');
                filterGallery(hash);
            }
        }
    }

    // Filter gallery items
    function filterGallery(category) {
        galleryItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add click event to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter gallery
            filterGallery(button.dataset.category);
        });
    });

    // Initial hash check
    handleHash();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHash);
});
