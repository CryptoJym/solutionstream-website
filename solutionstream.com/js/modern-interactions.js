/**
 * Modern Interactions Engine
 * Handles Scroll Reveal & Parallax
 */

// Expose a global init function so dynamic content can re-trigger it
window.initModernInteractions = function() {
    // 1. Scroll Reveal System (Apple-style fade ups)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% visible
    };

    // Disconnect old observer if it exists to prevent duplicates
    if (window.scrollObserver) {
        window.scrollObserver.disconnect();
    }

    window.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll, h1, h2, h3, p, .button, .about-services li, .logo-wall li, .company-stats li, .blog-card, .blog-content');
    revealElements.forEach(el => {
        // Add the class if it's missing (for auto-handling static content)
        if (!el.classList.contains('reveal-on-scroll')) {
            el.classList.add('reveal-on-scroll');
        }
        window.scrollObserver.observe(el);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize on load
    window.initModernInteractions();

    // 2. Advanced Parallax & Depth Engine
    const parallaxContainers = document.querySelectorAll('.page-header-wrapper');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxContainers.forEach(container => {
            const limit = container.offsetHeight;
            if (scrolled <= limit) {
                const content = container.querySelector('.container');
                if (content) {
                    content.style.transform = `translateY(${scrolled * 0.3}px)`;
                    content.style.opacity = 1 - (scrolled / limit);
                }
            }
        });
    });
});