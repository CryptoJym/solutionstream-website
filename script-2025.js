/**
 * SolutionStream 2025 - Interactive Features
 * Modern JavaScript for enhanced user experience
 */

// ============================================
// Navigation
// ============================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// ============================================
// Smooth Scroll
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Intersection Observer - Fade in animations
// ============================================

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

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// Animated Counters
// ============================================

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
};

// Trigger counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(counter => {
    const value = counter.textContent;
    counter.dataset.suffix = value.includes('+') ? '+' : '';
    counter.textContent = value.replace('+', '');
    counterObserver.observe(counter);
});

// ============================================
// Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;

        // Disable button and show loading state
        button.disabled = true;
        button.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="animation: spin 1s linear infinite;">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
                <path d="M10 2a8 8 0 0 1 8 8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
            Sending...
        `;

        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Success state
        button.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10l4 4L16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Message Sent!
        `;

        // Reset form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            button.disabled = false;
            button.innerHTML = originalText;
        }, 3000);
    });
}

// ============================================
// Parallax Effect
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax-image]');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.backgroundImage = `url('${element.dataset.parallaxImage}')`;
        element.style.backgroundPosition = `center ${yPos}px`;
        element.style.backgroundSize = 'cover';
        element.style.backgroundRepeat = 'no-repeat';
    });
});

// ============================================
// Cursor Follow Effect (Desktop only)
// ============================================

if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid #667eea;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease, opacity 0.2s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Smooth cursor movement
    const updateCursor = () => {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * 0.1;
        cursorY += dy * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(updateCursor);
    };
    updateCursor();

    // Scale cursor on hover over interactive elements
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#764ba2';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#667eea';
        });
    });
}

// ============================================
// Typing Effect for Hero
// ============================================

const typingText = (element, texts, speed = 100, deleteSpeed = 50, pauseDuration = 2000) => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
        const currentText = texts[textIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        element.textContent = currentText.substring(0, charIndex);

        let typeSpeed = isDeleting ? deleteSpeed : speed;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(type, typeSpeed);
    };

    type();
};

// ============================================
// Code Animation in Hero
// ============================================

const animateCode = () => {
    const codeLines = document.querySelectorAll('.window-content code span');

    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-10px)';

        setTimeout(() => {
            line.style.transition = 'all 0.3s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 100);
    });
};

// Trigger code animation when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCode();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ============================================
// Performance Monitoring
// ============================================

// Log page load performance
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    }
});

// ============================================
// Easter Egg - Konami Code
// ============================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

const activateEasterEgg = () => {
    // Add rainbow gradient animation to the page
    document.body.style.animation = 'rainbow 3s linear infinite';

    // Add CSS for rainbow animation if not exists
    if (!document.getElementById('easter-egg-styles')) {
        const style = document.createElement('style');
        style.id = 'easter-egg-styles';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // Show a fun message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        font-size: 2rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: fadeInUp 0.5s ease;
    `;
    message.textContent = '🎉 You found the secret! 🎉';
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(message);
            document.body.style.animation = '';
        }, 500);
    }, 3000);
};

// ============================================
// Accessibility Enhancements
// ============================================

// Add keyboard navigation for cards
document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const link = card.querySelector('a');
            if (link) link.click();
        }
    });
});

// Announce page navigation to screen readers
const announceNavigation = (text) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = text;
    document.body.appendChild(announcement);

    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
};

// Add screen reader only class
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;
document.head.appendChild(style);

// ============================================
// Initialize
// ============================================

console.log('%c🚀 SolutionStream 2025', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cBuilt with AI-powered precision', 'font-size: 14px; color: #764ba2;');
console.log('%cInterested in joining our team? Check out our careers page!', 'font-size: 12px; color: #64748b;');

// Add smooth reveal on page load
document.body.style.opacity = '0';
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
