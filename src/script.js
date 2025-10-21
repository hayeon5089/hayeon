// Slide Indicators
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        // Remove active class from all indicators
        indicators.forEach(ind => ind.classList.remove('active'));
        
        // Add active class to clicked indicator
        indicator.classList.add('active');
        currentSlide = index;
    });
});

// Auto-slide (optional)
function autoSlide() {
    currentSlide = (currentSlide + 1) % indicators.length;
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
}

// Uncomment to enable auto-slide every 5 seconds
// setInterval(autoSlide, 5000);

// Smooth scroll for navigation
document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const text = btn.textContent.toLowerCase();
        let targetSection;
        
        if (text === 'about') {
            targetSection = document.querySelector('.about-section');
        } else if (text === 'portfolio') {
            targetSection = document.querySelector('.portfolio-section');
        } else if (text === 'contact') {
            targetSection = document.querySelector('.contact-section');
        }
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        
        // Here you would typically send the data to a server
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe profile cards and portfolio items
document.querySelectorAll('.profile-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
