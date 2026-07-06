/**
 * components.js - Modular Component Loader for V-Marketers
 * Injects Navbar and Footer HTML strings into placeholders across all pages.
 * This JS-based approach works even when opening files directly (file:// protocol).
 */

window.injectComponents = () => {
    // Determine the base path prefix (e.g., '../' if inside Service_Pages)
    // We use path segments to be more reliable across different environments
    const pathParts = window.location.pathname.split('/');
    const isSubdir = pathParts.includes('Service_Pages') || pathParts.includes('pages');
    const basePath = isSubdir ? '../' : '';

    // --- 1. Navbar HTML String ---
   const navbarHTML = `
    <div class="absolute lg:fixed top-0 left-0 right-0 w-full flex justify-center mt-4 z-[90] pointer-events-none">
        <header
            class="pointer-events-auto w-[95%] max-w-6xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] rounded-2xl transition-all duration-300"
            data-aos="fade-down" data-aos-duration="1000">
            <nav class="px-8 h-20 flex items-center justify-between">
                <a href="${basePath}index.html" class="flex items-center custom-hover">
                    <img src="${basePath}assets/union.png" alt="V-Marketers Logo" 
                         width="70" height="40" loading="eager"
                         class="h-8 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105">
                </a>
                
                <div class="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
                    <a class="hover:text-primary transition-colors duration-300 custom-hover"
                        href="${basePath}pages/about.html">About</a>
                    <a class="hover:text-primary transition-colors duration-300 custom-hover"
                        href="${basePath}pages/services.html">Services</a>
                    <a class="hover:text-primary transition-colors duration-300 custom-hover"
                        href="${basePath}pages/contact.html">Contact</a>
                </div>
                <button id="mobile-menu-btn" type="button" aria-label="Open menu" class="md:hidden custom-hover p-2 text-brand-charcoal">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 8h16M4 16h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                        </path>
                    </svg>
                </button>
            </nav>
        </header>
    </div>

    <div id="mobile-menu"
        class="fixed inset-0 z-[100] bg-brand-softWhite/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 text-xl uppercase tracking-widest font-medium transition-transform duration-500 translate-x-full md:hidden pointer-events-auto">
        <button id="close-menu-btn" type="button" aria-label="Close menu" class="absolute top-8 right-8 p-2 text-brand-charcoal custom-hover">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <a class="mobile-link custom-hover hover:text-primary transition-colors duration-300"
            href="${basePath}pages/about.html">About</a>
        <a class="mobile-link custom-hover hover:text-primary transition-colors duration-300"
            href="${basePath}pages/services.html">Services</a>
        <a class="mobile-link custom-hover hover:text-primary transition-colors duration-300"
            href="${basePath}pages/contact.html">Contact</a>
    </div>
    `;

    // --- 2. Footer HTML String ---
   const footerHTML = `
            <footer
                class="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 pt-16 md:pt-24 pb-10"
                aria-labelledby="footer-heading">
                <h2 id="footer-heading" class="sr-only">Footer</h2>
                <div class="container mx-auto px-6 lg:px-12">
                    <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-6 mb-16 md:mb-20">

                        <div class="col-span-1 md:col-span-2 lg:col-span-2">
    <a href="${basePath}index.html" class="inline-block mb-6 custom-hover block">
        <img src="${basePath}assets/footer-logo.png" 
             alt="V-Marketers Logo" 
             width="172" height="80" loading="lazy"
             class="h-12 md:h-16 lg:h-20 w-auto max-w-[300px] object-contain transition-transform duration-300 hover:scale-105">
    </a>
    <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm md:text-base max-w-xs font-medium">
        Redefining B2B growth through human connections, data excellence, and elite creative strategy.
    </p>
    <address class="not-italic text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
        2nd Floor, Office No. 203, Khadi Machine Chowk,<br>
        Opp. Reliance Smart, Tyni Audyogic Wasahat,<br>
        Kondhwa, Pune, Maharashtra 411048, India<br>
        <a href="tel:+917709751757" class="hover:text-orange-500 transition-colors">+91 77097 51757</a> &nbsp;·&nbsp;
        <a href="mailto:support@v-marketers.com" class="hover:text-orange-500 transition-colors">support@v-marketers.com</a>
    </address>
                            <div class="flex gap-3">
                                <a href="https://www.linkedin.com/company/v-marketers/" target="_blank" rel="noopener noreferrer" aria-label="Follow V-Marketers on LinkedIn"
                                    class="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300">
                                    <i class="fa-brands fa-linkedin text-lg"></i>
                                </a>
                            </div>
                        </div>

                        <div class="lg:col-span-1">
                            <h4
                                class="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-[0.2em]">
                                Solutions</h4>
                            <nav aria-label="B2B Marketing Services">
                            <ul class="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                                <li><a href="${basePath}Service_Pages/lead-generation.html"
                                        class="hover:text-orange-500 transition-colors">Lead Generation</a></li>
                                <li><a href="${basePath}Service_Pages/lead-nurturing.html"
                                        class="hover:text-orange-500 transition-colors">Lead Nurturing</a></li>
                                <li><a href="${basePath}Service_Pages/email-marketing.html"
                                        class="hover:text-orange-500 transition-colors">Email Marketing</a></li>
                                <li><a href="${basePath}Service_Pages/demand-generation.html"
                                        class="hover:text-orange-500 transition-colors">Demand Generation</a></li>
                                <li><a href="${basePath}Service_Pages/content-marketing.html"
                                        class="hover:text-orange-500 transition-colors">Content Marketing</a></li>
                                <li><a href="${basePath}Service_Pages/content-syndication.html"
                                        class="hover:text-orange-500 transition-colors">Content Syndication</a></li>
                            </ul>
                            </nav>
                        </div>

                        <div class="lg:col-span-1">
                            <h4
                                class="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-[0.2em]">
                                Company</h4>
                            <nav aria-label="Company pages">
                            <ul class="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                                <li><a href="${basePath}pages/about.html" class="hover:text-orange-500 transition-colors">About Us</a>
                                </li>
                                <li><a href="${basePath}pages/services.html" class="hover:text-orange-500 transition-colors">Services</a>
                                </li>
                                <li><a href="${basePath}pages/contact.html" class="hover:text-orange-500 transition-colors">Contact
                                        Us</a></li>
                                <li><a href="${basePath}pages/privacy-policy.html" class="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                                <li><a href="${basePath}pages/terms.html" class="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                            </ul>
                            </nav>
                        </div>

                        <div class="lg:col-span-2">
                            <h4
                                class="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-[0.2em]">
                                Stay Updated</h4>
                            <p class="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                                Get the latest B2B growth tips and strategy direct to your inbox.
                            </p>
                            <form class="flex flex-col sm:flex-row gap-2">
                                <label for="footer-email" class="sr-only">Email address</label>
                                <input id="footer-email" type="email" placeholder="Email address" required
                                    class="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500/20 transition-all" />
                                <button type="submit"
                                    class="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-orange-500/20 transition-all text-sm whitespace-nowrap">
                                    Subscribe
                                </button>
                            </form>
                        </div>

                    </div>

                    <div
                        class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-slate-100 dark:border-slate-800 pt-8 md:pt-10 text-[10px] md:text-xs tracking-wider uppercase font-bold text-slate-400">
                        <p class="text-center md:text-left">
                            © <span id="current-year"></span> V-Marketers. Engineered for Excellence.
                        </p>
                        <p class="text-center">
                            Powered by <a href="https://amogamedia.com/"
                                class="text-slate-900 dark:text-white hover:text-orange-500 transition-colors">AMOGA
                                MEDIA</a>
                        </p>
                        <div class="flex justify-center md:justify-end gap-6">
                            <a href="${basePath}pages/privacy-policy.html" class="hover:text-orange-500 transition-colors">Privacy</a>
                            <a href="${basePath}pages/terms.html" class="hover:text-orange-500 transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
    `;

    // --- 3. Injection Logic ---
    const navContainer = document.getElementById('navbar-placeholder');
    const footerContainer = document.getElementById('footer-placeholder');

    if (navContainer) {
        navContainer.innerHTML = navbarHTML;
    }
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        
       // --- 4. Newsletter Form Handler (Updated for Supabase) ---
        const newsletterForm = footerContainer.querySelector('form');
        if (newsletterForm) {
            // Initialize Supabase
            const supabaseUrl = 'https://bmuchtkmunsjnwyyxihw.supabase.co';
            const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdWNodGttdW5zam53eXl4aWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTQ1NDQsImV4cCI6MjA5MTMzMDU0NH0.gd6lNFXqZsz-YTzt1A8oOY-bl9jz-iCoRlm1UF7lIYs';

            newsletterForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('#footer-email');
                const submitBtn = newsletterForm.querySelector('button[type="submit"]');

                if (!emailInput || !emailInput.value) return;

                // Check Supabase availability at submit time (not at load time)
                if (typeof supabase === 'undefined') {
                    console.error('Supabase library not loaded.');
                    alert('Newsletter service unavailable. Please try again later.');
                    return;
                }

                const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = '...';
                }

                try {
                    const { error } = await _supabase
                        .from('newsletter_subs')
                        .insert([{ email: emailInput.value }]);

                    if (error) {
                        if (error.code === '23505') {
                            alert('You are already subscribed!');
                        } else {
                            throw error;
                        }
                    } else {
                        alert('Subscribed successfully!');
                        newsletterForm.reset();
                    }
                } catch (err) {
                    console.error('Newsletter Error:', err);
                    alert('Submission failed: ' + (err.message || 'Unknown Error'));
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Subscribe';
                    }
                }
            });
        }
    }

    // Update current year if footer was injected
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set global flag and fire event
    window.componentsAreLoaded = true;
    document.dispatchEvent(new Event('componentsLoaded'));
};

// Initial injection on load
document.addEventListener('DOMContentLoaded', window.injectComponents);
