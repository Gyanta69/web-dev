// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Show error message
function showError(element, message) {
    // Remove existing error
    const existingError = element.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error class
    element.classList.add('error');
    
    // Create and append error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerText = message;
    element.parentElement.appendChild(errorDiv);
}

// Clear error
function clearError(element) {
    element.classList.remove('error');
    const errorMessage = element.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Validate login form
function validateLoginForm() {
    let isValid = true;
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Clear previous errors
    clearError(email);
    clearError(password);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Password validation
    if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters long');
        isValid = false;
    }

    if (isValid) {
        // Store user data
        localStorage.setItem('userEmail', email.value);
        localStorage.setItem('isLoggedIn', 'true');
        
        // Show success message with loading animation
        const btn = document.querySelector('.btn-primary');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        btn.disabled = true;
        
        // Redirect to home page after a short delay
        setTimeout(() => {
            window.location.href = '/index.html';
        }, 1500);
    }

    return false; // Prevent form submission for this demo
}

// Validate registration form
function validateRegisterForm() {
    let isValid = true;
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const studentId = document.getElementById('studentId');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');

    // Clear previous errors
    [fullName, email, studentId, password, confirmPassword].forEach(clearError);

    // Full name validation
    if (fullName.value.trim().length < 2) {
        showError(fullName, 'Full name must be at least 2 characters long');
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Student ID validation
    const studentIdRegex = /^[A-Z0-9]{6,}$/i;
    if (!studentIdRegex.test(studentId.value)) {
        showError(studentId, 'Please enter a valid student ID');
        isValid = false;
    }

    // Password validation
    if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters long');
        isValid = false;
    }

    // Confirm password validation
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    }

    // Terms validation
    if (!terms.checked) {
        alert('Please accept the Terms & Conditions');
        isValid = false;
    }

    if (isValid) {
        // Here you would typically send the form data to a server
        // For demo, we'll just store in localStorage
        localStorage.setItem('userEmail', email.value);
        localStorage.setItem('userName', fullName.value);
        alert('Registration successful!');
    }

    return false; // Prevent form submission for this demo
}

// Add input event listeners to clear errors when user types
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => clearError(input));
    });
});
