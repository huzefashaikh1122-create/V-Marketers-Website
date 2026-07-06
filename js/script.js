/**
 * script.js - Core logic for V-Marketers site
 * Handles Lenis, AOS, Global Cursor, Barba Transitions, and Mobile Menu
 */

(function() {
    let lenis;
    let cursor;
    let isInitialized = false;

    function initCursor() {
        if (document.getElementById('custom-cursor')) return;
        cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        cursor.className = 'custom-cursor hidden md:block';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });
    }

    function initLenis() {
        if (lenis) lenis.destroy();
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        window.lenis = lenis;
    }

    function initAOS() {
        // Reset AOS so elements animate in again on new pages
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.classList.remove('aos-animate');
        });
        setTimeout(() => {
            if (typeof AOS !== 'undefined') {
                AOS.init({ duration: 1000, once: true, offset: 50 });
                AOS.refresh();
            }
        }, 100);
    }

    function initCursorEvents() {
        if (!cursor) return;
        const hoverElements = document.querySelectorAll('a, button, .custom-hover, input, textarea');
        const images = document.querySelectorAll('.interactive-img, img');

        cursor.classList.remove('hovered', 'img-hovered');

        hoverElements.forEach(el => {
            el.onmouseenter = () => cursor.classList.add('hovered');
            el.onmouseleave = () => cursor.classList.remove('hovered');
        });

        images.forEach(el => {
            el.onmouseenter = () => cursor.classList.add('img-hovered');
            el.onmouseleave = () => cursor.classList.remove('img-hovered');
        });
    }

    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
            const openMenu = () => {
                mobileMenu.classList.remove('translate-x-full');
                if (lenis) lenis.stop();
            };
            const closeMenu = () => {
                mobileMenu.classList.add('translate-x-full');
                if (lenis) lenis.start();
            };

            mobileMenuBtn.onclick = openMenu;
            closeMenuBtn.onclick = closeMenu;
            mobileLinks.forEach(link => {
                link.onclick = closeMenu;
            });
        }
    }

    function initPageSpecificLogic() {
        // --- Testimonial Slider ---
        const cards = document.querySelectorAll('.testimonial-card');
        const btnPrev = document.getElementById('prev-testimonial');
        const btnNext = document.getElementById('next-testimonial');
        const dotsContainer = document.getElementById('testimonial-dots');
        const sliderContainer = document.getElementById('testimonial-slider-container');
        
        if(cards.length > 0 && dotsContainer && sliderContainer) {
            let currentIndex = 0;
            let autoplayTimer;
            dotsContainer.innerHTML = '';
            cards.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = index === 0 ? 'h-2 w-8 rounded-full bg-orange-600 transition-all duration-300' : 'h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300';
                dot.onclick = () => { updateCarousel(index); resetAutoplay(); };
                dotsContainer.appendChild(dot);
            });

            const dots = dotsContainer.querySelectorAll('button');
            function updateCarousel(newIndex) {
                cards[currentIndex].classList.add('opacity-0', '-translate-x-8', 'pointer-events-none');
                cards[currentIndex].classList.remove('opacity-100', 'translate-x-0', 'z-10');
                dots[currentIndex].className = 'h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700 transition-all duration-300';
                
                currentIndex = newIndex;
                
                cards[currentIndex].classList.add('translate-x-8');
                setTimeout(() => {
                    cards[currentIndex].classList.remove('opacity-0', 'translate-x-8', 'pointer-events-none');
                    cards[currentIndex].classList.add('opacity-100', 'translate-x-0', 'z-10');
                    dots[currentIndex].className = 'h-2 w-8 rounded-full bg-orange-600 transition-all duration-300';
                }, 50);
            }

            const startAutoplay = () => { autoplayTimer = setInterval(() => { updateCarousel((currentIndex + 1) % cards.length); }, 5000); };
            const stopAutoplay = () => { clearInterval(autoplayTimer); };
            const resetAutoplay = () => { stopAutoplay(); startAutoplay(); };

            if(btnNext) btnNext.onclick = () => { updateCarousel((currentIndex + 1) % cards.length); resetAutoplay(); };
            if(btnPrev) btnPrev.onclick = () => { updateCarousel((currentIndex - 1 + cards.length) % cards.length); resetAutoplay(); };
            sliderContainer.onmouseenter = stopAutoplay;
            sliderContainer.onmouseleave = startAutoplay;
            startAutoplay();
        }

        // --- Inquiry Smooth Scroll ---
        const inquiryBtn = document.querySelector('a[href="#inquiryform"]');
        if (inquiryBtn) {
            inquiryBtn.onclick = (e) => {
                e.preventDefault();
                if (lenis) lenis.scrollTo('#inquiryform', { offset: -50, duration: 1.5 });
                else document.querySelector('#inquiryform').scrollIntoView({ behavior: 'smooth' });
            };
        }
        
        // --- Intersections ---
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks.length > 0) {
            const spyObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach(link => {
                            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                        });
                    }
                });
            }, { rootMargin: '-20% 0px -70% 0px' });
            document.querySelectorAll('section[id]').forEach((section) => spyObserver.observe(section));
        }

        const stepContents = document.querySelectorAll('.step-content');
        if (stepContents.length > 0) {
            const stepObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('opacity-100', entry.isIntersecting);
                    entry.target.classList.toggle('scale-100', entry.isIntersecting);
                    entry.target.classList.toggle('opacity-30', !entry.isIntersecting);
                    entry.target.classList.toggle('scale-95', !entry.isIntersecting);
                });
            }, { threshold: 0.5 });
            stepContents.forEach(item => {
                item.classList.add('transform', 'transition-all', 'duration-700');
                stepObserver.observe(item);
            });
        }

        // --- Inquiry Form Handler (Supabase) ---
        const inquiryForm = document.getElementById('inquiry-form');
        if (inquiryForm) {
            // Remove previous event listeners if any to prevent duplicate submissions on Barba transitions
            const newForm = inquiryForm.cloneNode(true);
            inquiryForm.parentNode.replaceChild(newForm, inquiryForm);
            
            const successMessage = document.getElementById('success-message');
            const submitBtn = newForm.querySelector('button[type="submit"]');

            newForm.addEventListener('submit', async function (event) {
                event.preventDefault();
                
                if (typeof supabase === 'undefined') {
                    console.error('Supabase library not loaded.');
                    alert('Service unavailable. Please try again later.');
                    return;
                }

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerText = 'Sending...';
                }
                
                const supabaseUrl = 'https://bmuchtkmunsjnwyyxihw.supabase.co';
                const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdWNodGttdW5zam53eXl4aWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTQ1NDQsImV4cCI6MjA5MTMzMDU0NH0.gd6lNFXqZsz-YTzt1A8oOY-bl9jz-iCoRlm1UF7lIYs';
                const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

                const formData = {
                    first_name: newForm.querySelector('input[placeholder*="Alexander"]').value,
                    last_name: newForm.querySelector('input[placeholder*="Sterling"]').value,
                    email: newForm.querySelector('input[type="email"]').value,
                    company: newForm.querySelector('input[placeholder*="Brand"]').value,
                    phone: newForm.querySelector('input[type="tel"]').value,
                    message: newForm.querySelector('textarea').value
                };

                try {
                    const { error } = await _supabase.from('inquiries').insert([formData]);

                    if (!error) {
                        if (successMessage) successMessage.classList.remove('hidden');
                        newForm.reset();
                    } else {
                        console.error('Supabase Error:', error);
                        alert('Something went wrong. Please check again.');
                    }
                } catch (err) {
                    console.error('Inquiry Error:', err);
                    alert('Submission failed: ' + (err.message || 'Unknown Error'));
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerText = 'Request Consultation';
                    }
                }
            });
        }
    }

    function initializeAll() {
        if (isInitialized) return;
        isInitialized = true;
        initCursor();
        initLenis();
        initAOS();
        initCursorEvents();
        initMobileMenu();
        initPageSpecificLogic();
        console.log('Site Initialized');
    }

    function initBarba() {
        if (typeof barba === 'undefined') return;
        barba.init({
            sync: true,
            transitions: [{
                name: 'fade',
                leave: (data) => gsap.to(data.current.container, { opacity: 0, duration: 0.4 }),
                enter: (data) => {
                    window.scrollTo(0, 0);
                    return gsap.from(data.next.container, { opacity: 0, duration: 0.4 });
                }
            }]
        });
        barba.hooks.after(() => {
            // Refresh Navbar/Footer with correct relative paths for the new URL
            if (window.injectComponents) window.injectComponents();
            
            // Re-run init logic for new container
            isInitialized = false; 
            initializeAll();
        });
    }

    // Main entry point
    const start = () => {
        initializeAll();
        initBarba();
    };

    // Fail-safe: if components take too long (e.g. offline/error), init anyway
    const fallback = setTimeout(start, 2000);

    if (window.componentsAreLoaded) {
        clearTimeout(fallback);
        start();
    } else {
        document.addEventListener('componentsLoaded', () => {
            clearTimeout(fallback);
            start();
        });
    }
})();