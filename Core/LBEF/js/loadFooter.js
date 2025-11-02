document.addEventListener('DOMContentLoaded', async () => {
    // Function to load footer
    async function loadFooter() {
        try {
            const response = await fetch('/components/footer.html');
            const html = await response.text();
            
            // Insert the footer at the end of the body
            document.body.insertAdjacentHTML('beforeend', html);
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    }

    // Load the footer
    await loadFooter();
});
