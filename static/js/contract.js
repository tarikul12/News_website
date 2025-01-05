function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^\+?[\d\s-]{10,}$/.test(phone);
}

function showError(field, show) {
    const errorElement = document.getElementById(`${field}Error`);
    const inputElement = document.getElementById(field);
    
    errorElement.style.display = show ? 'block' : 'none';
    if (show) {
        inputElement.classList.add('error-field');
    } else {
        inputElement.classList.remove('error-field');
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
    
    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
        showError('email', true);
        isValid = false;
    } else {
        showError('email', false);
    }

    // Validate phone
    if (!validatePhone(phone)) {
        showError('phone', true);
        isValid = false;
    } else {
        showError('phone', false);
    }

    // Validate description
    if (description.trim().length < 1) {
        showError('description', true);
        isValid = false;
    } else {
        showError('description', false);
    }

    if (isValid) {
        // Here you would typically send the form data to your server
        console.log('Form submitted:', { email, phone, description });
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }

    return false;
}

// Add input event listeners to clear errors on type
['email', 'phone', 'description'].forEach(field => {
    document.getElementById(field).addEventListener('input', () => {
        showError(field, false);
    });
});