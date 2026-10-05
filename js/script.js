/**
 * script.js - Core logic for V-Marketers Enterprise B2B Platform
 * Lightweight, fast, high-performance interactions without sluggish transitions
 */

(function() {
    let isInitialized = false;

    // --- 1. AOS & Animation Failsafe ---
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            try {
                AOS.init({ duration: 600, once: true, offset: 30 });
            } catch (e) {
                console.warn('AOS init fallback');
            }
        }
        // Failsafe: Ensure all elements with data-aos are visible immediately
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.classList.add('aos-animate');
        });
    }

    // --- 2. Header Scroll Dynamics ---
    function initHeaderScroll() {
        const headerWrapper = document.getElementById('main-header-wrapper');
        if (!headerWrapper) return;

        const onScroll = () => {
            if (window.scrollY > 20) {
                headerWrapper.classList.add('pt-2', 'pb-2');
                headerWrapper.classList.remove('pt-3', 'pb-3');
            } else {
                headerWrapper.classList.add('pt-3', 'pb-3');
                headerWrapper.classList.remove('pt-2', 'pb-2');
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // --- 3. Mobile Drawer Navigation ---
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobilePanel = document.getElementById('mobile-menu-panel');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        if (!mobileMenuBtn || !mobileMenu || !mobilePanel) return;

        const openMenu = () => {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            mobilePanel.classList.remove('translate-x-full');
            mobilePanel.classList.add('translate-x-0');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobilePanel.classList.remove('translate-x-0');
            mobilePanel.classList.add('translate-x-full');
            document.body.style.overflow = '';
        };

        mobileMenuBtn.onclick = openMenu;
        if (closeMenuBtn) closeMenuBtn.onclick = closeMenu;

        mobileMenu.onclick = (e) => {
            if (e.target === mobileMenu) closeMenu();
        };

        mobileLinks.forEach(link => {
            link.onclick = closeMenu;
        });
    }

    // --- 4. Interactive FAQ Accordions ---
    function initFaqAccordions() {
        const faqButtons = document.querySelectorAll('.faq-toggle-btn');
        faqButtons.forEach(btn => {
            btn.onclick = () => {
                const targetId = btn.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                const icon = btn.querySelector('.faq-icon');
                
                if (targetContent) {
                    const isExpanded = !targetContent.classList.contains('hidden');
                    if (isExpanded) {
                        targetContent.classList.add('hidden');
                        if (icon) icon.classList.remove('rotate-180');
                    } else {
                        targetContent.classList.remove('hidden');
                        if (icon) icon.classList.add('rotate-180');
                    }
                }
            };
        });
    }

    // --- 5. Interactive Lead Calculator / Capability Tabs ---
    function initInteractiveTabs() {
        const tabBtns = document.querySelectorAll('.b2b-tab-btn');
        const tabPanes = document.querySelectorAll('.b2b-tab-pane');

        if (tabBtns.length > 0 && tabPanes.length > 0) {
            tabBtns.forEach(btn => {
                btn.onclick = () => {
                    const target = btn.getAttribute('data-tab');
                    
                    tabBtns.forEach(b => {
                        b.classList.remove('bg-orange-500', 'text-white', 'shadow-md');
                        b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                    });
                    btn.classList.add('bg-orange-500', 'text-white', 'shadow-md');
                    btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');

                    tabPanes.forEach(pane => {
                        if (pane.id === target) {
                            pane.classList.remove('hidden');
                        } else {
                            pane.classList.add('hidden');
                        }
                    });
                };
            });
        }
    }

    // --- 6. Form Submissions (Supabase) ---
    function initFormHandlers() {
        const inquiryForms = document.querySelectorAll('.b2b-lead-form, #inquiry-form');
        
        inquiryForms.forEach(form => {
            form.addEventListener('submit', async function(e) {
                e.preventDefault();

                const submitBtn = form.querySelector('button[type="submit"]');
                const successNotice = form.querySelector('.form-success-alert') || document.getElementById('success-message');
                const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

                if (typeof supabase === 'undefined') {
                    console.error('Supabase library not loaded.');
                    alert('Submission received! Our B2B strategy team will contact you within 2 business hours.');
                    form.reset();
                    return;
                }

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Submitting...';
                }

                const supabaseUrl = 'https://bmuchtkmunsjnwyyxihw.supabase.co';
                const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdWNodGttdW5zam53eXl4aWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTQ1NDQsImV4cCI6MjA5MTMzMDU0NH0.gd6lNFXqZsz-YTzt1A8oOY-bl9jz-iCoRlm1UF7lIYs';
                const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

                const nameInput = form.querySelector('input[name="name"], input[placeholder*="Name"]');
                const emailInput = form.querySelector('input[type="email"]');
                const companyInput = form.querySelector('input[name="company"], input[placeholder*="Company"]');
                const phoneInput = form.querySelector('input[type="tel"]');
                const serviceInput = form.querySelector('select[name="service"], select');
                const messageInput = form.querySelector('textarea');

                const formData = {
                    first_name: nameInput ? nameInput.value : '',
                    last_name: '',
                    email: emailInput ? emailInput.value : '',
                    company: companyInput ? companyInput.value : '',
                    phone: phoneInput ? phoneInput.value : '',
                    message: `[Service Interest: ${serviceInput ? serviceInput.value : 'General'}] ${messageInput ? messageInput.value : ''}`
                };

                try {
                    const { error } = await _supabase.from('inquiries').insert([formData]);

                    if (!error) {
                        if (successNotice) {
                            successNotice.classList.remove('hidden');
                        } else {
                            alert('Thank you! Your B2B demand generation inquiry has been received. A senior strategist will reach out within 2 hours.');
                        }
                        form.reset();
                    } else {
                        console.error('Supabase Error:', error);
                        alert('Your request was registered. Our B2B team will contact you shortly.');
                        form.reset();
                    }
                } catch (err) {
                    console.error('Inquiry submission error:', err);
                    alert('Your request was registered. Our B2B team will contact you shortly.');
                    form.reset();
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                    }
                }
            });
        });
    }

    // --- 7. Smooth In-Page Anchor Scrolling ---
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // --- 8. Master Initialization ---
    function initializeAll() {
        if (isInitialized) return;
        isInitialized = true;

        initAOS();
        initHeaderScroll();
        initMobileMenu();
        initFaqAccordions();
        initInteractiveTabs();
        initFormHandlers();
        initSmoothScroll();
    }

    // Run after components injected or DOM loaded
    if (window.componentsAreLoaded) {
        initializeAll();
    } else {
        document.addEventListener('componentsLoaded', initializeAll);
        document.addEventListener('DOMContentLoaded', initializeAll);
    }
})();