document.addEventListener('DOMContentLoaded', function() {

    // Sets up the mobile menu functionality
    function setupMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            // The onclick attribute in the HTML is already handling the toggle,
            // so we just need to handle closing the menu on link click.
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                });
            });
        }
    }

    // Toggle Mobile Menu - making it globally accessible from onclick attribute
    window.toggleMenu = function() {
        const navLinks = document.querySelector('.nav-links');
        if(navLinks) {
            navLinks.classList.toggle('active');
        }
    }

    // Simple Fade-In Animation on Scroll
    function setupScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Apply animation style initially
        document.querySelectorAll('.value-card, .service-box, .about-text, .vm-card').forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "all 0.6s ease-out";
            observer.observe(el);
        });
    }

    // Initialize everything
    setupMenu();
    setupScrollAnimations();
});