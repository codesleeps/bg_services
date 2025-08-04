function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('active');
    document.querySelector('.nav-toggle').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                document.querySelector('.nav-menu').classList.remove('active');
                document.querySelector('.nav-toggle').classList.remove('active');
            }
        });
    });
    
    // Booking form functionality
    const bookingForm = document.getElementById('bookingForm');
    const quoteForm = document.getElementById('quoteForm');
    
    // Set minimum date to today
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.min = today;
    });
    
    // Booking form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            // Validate required fields before submission
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    field.style.borderColor = '#e0e0e0';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return false;
            }
            
            // If validation passes, form will submit naturally to Netlify
            // Show loading message
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
        });
    }
    
    // Quote form submission
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            // Get selected services
            const serviceCheckboxes = this.querySelectorAll('input[name="services"]:checked');
            
            // Validate required fields
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    field.style.borderColor = '#e0e0e0';
                }
            });
            
            // Check if at least one service is selected
            if (serviceCheckboxes.length === 0) {
                alert('Please select at least one service.');
                isValid = false;
            }
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields and select at least one service.');
                return false;
            }
            
            // If validation passes, form will submit naturally to Netlify
            // Show loading message
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
        });
    }
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and feature cards
    const animatedElements = document.querySelectorAll('.service-card, .feature');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Tab switching functionality
function showTab(tabName) {
    // Hide all forms
    document.getElementById('booking-form').classList.remove('active');
    document.getElementById('quote-form').classList.remove('active');
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected form and activate tab
    if (tabName === 'booking') {
        document.getElementById('booking-form').classList.add('active');
        document.querySelector('.tab-btn[onclick="showTab(\'booking\')"]').classList.add('active');
    } else if (tabName === 'quote') {
        document.getElementById('quote-form').classList.add('active');
        document.querySelector('.tab-btn[onclick="showTab(\'quote\')"]').classList.add('active');
    }
}

// Initialize with booking tab active
document.addEventListener('DOMContentLoaded', function() {
    showTab('booking');
});