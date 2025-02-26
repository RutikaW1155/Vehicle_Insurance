// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Populate vehicle years
    const vehicleYearSelect = document.getElementById('vehicleYear');
    const currentYear = new Date().getFullYear();
    
    for (let i = 0; i < 10; i++) {
        const year = currentYear - i;
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        vehicleYearSelect.appendChild(option);
    }

    // Handle form submission
    const quoteForm = document.getElementById('quoteForm');
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const vehicleType = document.getElementById('vehicleType').value;
        const vehicleYear = document.getElementById('vehicleYear').value;
        
        if (!vehicleType || !vehicleYear) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Quote requested for:', {
            vehicleType,
            vehicleYear
        });
        
        alert('Thank you for requesting a quote! We will contact you soon.');
    });

    // Add animation classes on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.coverage-card, .contact-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for animation
    document.querySelectorAll('.coverage-card, .contact-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    // Initial check for elements in view
    animateOnScroll();
});
