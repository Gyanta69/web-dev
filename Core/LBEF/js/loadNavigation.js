document.addEventListener('DOMContentLoaded', async () => {
    // Function to load navigation
    async function loadNavigation() {
        try {
            const response = await fetch('/components/navigation.html');
            const html = await response.text();
            
            // Insert the navigation at the start of the body
            document.body.insertAdjacentHTML('afterbegin', html);
            
            // Add padding to body to account for fixed navigation
            const navbar = document.querySelector('.navbar');
            const navHeight = navbar.offsetHeight;
            document.body.style.paddingTop = `${navHeight}px`;
            
            // Highlight current page in navigation
            highlightCurrentPage();
            
            // Initialize navigation functionality
            initializeNavigation();
        } catch (error) {
            console.error('Error loading navigation:', error);
        }
    }

    // Function to highlight current page in navigation
    function highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Function to initialize navigation functionality
    function initializeNavigation() {
        // Navigation elements
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const dropdowns = document.querySelectorAll('.dropdown');

        // Toggle mobile menu
        navToggle?.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = navToggle.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Handle dropdowns
        dropdowns.forEach(dropdown => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');

            // Toggle dropdown on click
            dropdownToggle?.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.querySelector('.dropdown-menu').classList.remove('show');
                        otherDropdown.querySelector('.dropdown-toggle').classList.remove('active');
                    }
                });

                // Toggle current dropdown
                dropdownMenu.classList.toggle('show');
                dropdownToggle.classList.toggle('active');
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(dropdown => {
                    dropdown.querySelector('.dropdown-menu').classList.remove('show');
                    dropdown.querySelector('.dropdown-toggle').classList.remove('active');
                });
            }
        });
    }

    // Load the navigation
    await loadNavigation();
});
