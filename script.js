// kys skid >>
class Portfolio {
    constructor() {
        this.isLoading = true;
        this.musicPlaying = false;
        this.init();
    }

    init() {
        this.setupEntryAnimation();
        this.setupMusic();
        this.setupInteractions();
        this.setupAnimationObserver();
    }

    setupEntryAnimation() {
        setTimeout(() => {
            const entryOverlay = document.querySelector('.entry-overlay');
            if (entryOverlay) {
                entryOverlay.style.pointerEvents = 'none';
            }
            this.isLoading = false;
        }, 3500);
    }

    setupMusic() {
        const bgMusic = document.getElementById('bgMusic');
        const musicControl = document.getElementById('musicControl');

        if (!bgMusic || !musicControl) return;

        bgMusic.volume = 0.15;

        const playMusic = () => {
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    this.musicPlaying = true;
                    musicControl.classList.add('playing');
                }).catch(error => {
                    console.log('Music autoplay prevented:', error);
                });
            }
        };

        const pauseMusic = () => {
            bgMusic.pause();
            this.musicPlaying = false;
            musicControl.classList.remove('playing');
        };

        musicControl.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.musicPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        });

        // Auto-play on first user interaction
        const enableMusic = () => {
            if (!this.musicPlaying && !this.isLoading) {
                playMusic();
            }
        };

        document.addEventListener('click', enableMusic, { once: true });
        document.addEventListener('keydown', enableMusic, { once: true });
    }

    setupInteractions() {
        // Contact button interaction
        const contactButton = document.querySelector('#contactButton');
        if (contactButton) {
            contactButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.openContactModal();
            });
        }

        // Modal interactions
        this.setupModalInteractions();

        // Avatar interaction
        const avatar = document.querySelector('.avatar');
        if (avatar) {
            avatar.addEventListener('click', () => {
                this.avatarClickEffect();
            });
        }

        // Name hover effect
        const name = document.querySelector('.name');
        if (name) {
            name.addEventListener('mouseenter', () => {
                this.nameHoverEffect();
            });
        }
    }

    setupModalInteractions() {
        const modal = document.getElementById('contactModal');
        const closeButton = document.getElementById('closeModal');
        const contactForm = document.getElementById('contactForm');

        // Close modal on close button click
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                this.closeContactModal();
            });
        }

        // Close modal on overlay click
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeContactModal();
                }
            });
        }

        // Handle form submission
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(e.target);
            });
        }

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal?.classList.contains('active')) {
                this.closeContactModal();
            }
        });
    }

    openContactModal() {
        const modal = document.getElementById('contactModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus first input
            setTimeout(() => {
                const firstInput = modal.querySelector('input');
                if (firstInput) firstInput.focus();
            }, 300);
        }
    }

    closeContactModal() {
        const modal = document.getElementById('contactModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset form
            const form = modal.querySelector('form');
            if (form) form.reset();
        }
    }

    async handleFormSubmission(form) {
        const submitButton = form.querySelector('.submit-button');
        const formData = new FormData(form);
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.querySelector('span').textContent = 'Sending...';

        try {
            const response = await fetch('https://api.die.skin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message')
                })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                this.showNotification('Message sent successfully! 🎉', 'success');
                this.closeContactModal();
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showNotification(error.message || 'Failed to send message. Please try again.', 'error');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.querySelector('span').textContent = 'Send Message';
        }
    }

    addRippleEffect(element) {
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('div');
        
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(79, 70, 229, 0.1);
            transform: translate(-50%, -50%) scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            z-index: 0;
        `;

        element.style.position = 'relative';
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        // Add ripple animation if it doesnt fucking exist already - fent
        if (!document.getElementById('ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: translate(-50%, -50%) scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }


    avatarClickEffect() {
        const avatar = document.querySelector('.avatar');
        const ring = document.querySelector('.avatar-ring');
        
        avatar.style.transform = 'scale(1.1) rotate(5deg)';
        ring.style.opacity = '1';
        ring.style.transform = 'rotate(180deg) scale(1.1)';
        
        setTimeout(() => {
            avatar.style.transform = '';
            ring.style.opacity = '';
            ring.style.transform = '';
        }, 300);
    }

    nameHoverEffect() {
        const name = document.querySelector('.name');
        const originalText = name.textContent;
        
        // might not work
        name.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            name.style.transform = '';
        }, 200);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        const bgColor = type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 
                       type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'var(--surface)';
        const borderColor = type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 
                           type === 'error' ? 'rgba(239, 68, 68, 0.3)' : 'var(--border)';
        
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: ${bgColor};
            border: 1px solid ${borderColor};
            border-radius: 8px;
            padding: 1rem 1.5rem;
            color: var(--primary);
            font-size: 0.9rem;
            z-index: 1001;
            transform: translateX(100%);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(20px);
            max-width: 300px;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, type === 'error' ? 5000 : 3000);
    }

    setupAnimationObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.triggerElementAnimation(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements that aren't already animated by CSS - fent
        const observeElements = document.querySelectorAll('.card, .contact-button');
        observeElements.forEach(el => observer.observe(el));
    }

    triggerElementAnimation(element) {
        if (element.classList.contains('card')) {
            // ima fix ts later
            const cards = Array.from(document.querySelectorAll('.card'));
            const index = cards.indexOf(element);
            element.style.animationDelay = `${index * 0.1}s`;
        }
    }
}


class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
}


class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Throttle scroll events
        this.throttledScroll = this.throttle(this.handleScroll.bind(this), 16);
        window.addEventListener('scroll', this.throttledScroll);

        // Optimize animations based on device capabilities
        this.optimizeForDevice();
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const floatingElements = document.querySelectorAll('.float-element');
        
        floatingElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = scrolled * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    optimizeForDevice() {
        // Reduce animations on lower-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.documentElement.style.setProperty('--reduced-motion', '1');
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
    new SmoothScroll();
    new PerformanceOptimizer();
});


document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});
