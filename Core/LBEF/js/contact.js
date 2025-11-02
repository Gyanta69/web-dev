function validateForm() {
    let isValid = true;
    const form = document.getElementById('contactForm');
    
    // Remove existing error messages
    const existingErrors = form.getElementsByClassName('error-message');
    while(existingErrors.length > 0) {
        existingErrors[0].parentNode.removeChild(existingErrors[0]);
    }

    // Reset error classes
    const inputs = form.getElementsByTagName('input');
    const textarea = form.getElementsByTagName('textarea');
    const select = form.getElementsByTagName('select');
    
    [...inputs, ...textarea, ...select].forEach(element => {
        element.classList.remove('error');
    });

    // Validate Name
    const name = document.getElementById('name');
    if (name.value.trim().length < 2) {
        showError(name, 'Name must be at least 2 characters long');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Phone
    const phone = document.getElementById('phone');
    const phoneRegex = /^\+?\d{10,}$/;
    if (!phoneRegex.test(phone.value.replace(/\s/g, ''))) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    }

    // Validate Subject
    const subject = document.getElementById('subject');
    if (subject.value === '') {
        showError(subject, 'Please select a subject');
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message');
    if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters long');
        isValid = false;
    }

    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    }

    return false; // Prevent form submission for this demo
}

function showError(element, message) {
    element.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerText = message;
    element.parentNode.appendChild(errorDiv);
}
