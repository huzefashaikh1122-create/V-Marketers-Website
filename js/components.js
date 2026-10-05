/**
 * components.js - Modular Component Loader for V-Marketers
 * Injects Enterprise B2B Navbar and Footer HTML strings into placeholders across all pages.
 * Supports direct file:// preview and hosted environments.
 */

window.injectComponents = () => {
    // Determine the base path prefix robustly across local file://, Netlify, and subpath URLs
    const currentPath = (window.location.pathname || '').replace(/\\/g, '/').toLowerCase();
    const currentHref = (window.location.href || '').replace(/\\/g, '/').toLowerCase();
    const pathSegments = currentPath.split('/').filter(Boolean);

    const isSubdir = pathSegments.some(seg => seg === 'service_pages' || seg === 'pages') ||
                     currentPath.includes('/service_pages/') ||
                     currentPath.includes('/pages/') ||
                     currentHref.includes('/service_pages/') ||
                     currentHref.includes('/pages/');

    const basePath = isSubdir ? '../' : '';

    // --- 1. Enterprise B2B Navbar HTML String ---
    const navbarHTML = `
    <div class="fixed top-0 left-0 right-0 w-full flex justify-center pt-3 pb-3 px-4 z-[99] pointer-events-none transition-all duration-300" id="main-header-wrapper">
        <header
            class="pointer-events-auto w-full max-w-7xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.06)] rounded-2xl transition-all duration-300">
            <nav class="px-5 lg:px-8 h-18 md:h-20 flex items-center justify-between">
                <!-- Logo -->
                <a href="${basePath}index.html" class="flex items-center gap-2 group">
                    <img src="${basePath}assets/union.png" alt="V-Marketers Logo" 
                         width="70" height="40" loading="eager"
                         class="h-7 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105">
                    <span class="sr-only">V-Marketers</span>
                </a>
                
                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    <a href="${basePath}index.html" class="px-3 py-2 rounded-lg hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors">Home</a>
                    
                    <!-- Services Dropdown -->
                    <div class="relative group">
                        <button type="button" class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors focus:outline-none" aria-expanded="false">
                            <span>Services & Solutions</span>
                            <svg class="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        
                        <!-- Dropdown Menu -->
                        <div class="absolute left-0 top-full pt-2 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                            <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 p-3 space-y-1">
                                <a href="${basePath}Service_Pages/content-syndication.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors group/item">
                                    <div class="w-9 h-9 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                                        <i class="fa-solid fa-bullhorn text-sm"></i>
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                                            <span>Content Syndication</span>
                                            <span class="bg-orange-500 text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded">Core</span>
                                        </div>
                                        <p class="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5">Multi-channel asset distribution to 95M+ buyers</p>
                                    </div>
                                </a>
                                
                                <a href="${basePath}Service_Pages/lead-generation.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors group/item">
                                    <div class="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                        <i class="fa-solid fa-filter text-sm"></i>
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold text-slate-900 dark:text-white">MQL, HQL & BANT Leads</div>
                                        <p class="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5">Dual-verified decision maker pipelines</p>
                                    </div>
                                </a>

                                <a href="${basePath}Service_Pages/demand-generation.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors group/item">
                                    <div class="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                        <i class="fa-solid fa-chart-line text-sm"></i>
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold text-slate-900 dark:text-white">Demand Generation & ABM</div>
                                        <p class="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5">Target Account List (TAL) precision penetration</p>
                                    </div>
                                </a>

                                <a href="${basePath}Service_Pages/email-marketing.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors group/item">
                                    <div class="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                                        <i class="fa-solid fa-envelope-open-text text-sm"></i>
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold text-slate-900 dark:text-white">Email Outreach & Sequences</div>
                                        <p class="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5">High-inbox rate personalized outbound</p>
                                    </div>
                                </a>

                                <a href="${basePath}Service_Pages/content-marketing.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors group/item">
                                    <div class="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                                        <i class="fa-solid fa-file-signature text-sm"></i>
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold text-slate-900 dark:text-white">B2B Content Strategy</div>
                                        <p class="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5">Whitepapers, eBooks & research briefs</p>
                                    </div>
                                </a>

                                <a href="${basePath}Service_Pages/lead-nurturing.html" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50 dark:hover:bg-slate-800 transition-colors group/item">
                                    <div class="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                                        <i class="fa-solid fa-arrows-spin text-sm"></i>
                                    </div>
                                    <div>
                                        <div class="text-xs font-bold text-slate-900 dark:text-white">Multi-Touch Lead Nurturing</div>
                                        <p class="text-[11px] text-slate-500 dark:text-slate-400 font-normal mt-0.5">Convert cold interest into sales conversations</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="${basePath}pages/services.html" class="px-3 py-2 rounded-lg hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors">Services</a>
                    <a href="${basePath}pages/about.html" class="px-3 py-2 rounded-lg hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors">About Us</a>
                    <a href="${basePath}pages/contact.html" class="px-3 py-2 rounded-lg hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-800/50 transition-colors">Contact</a>
                </div>

                <!-- Desktop CTA & Contact -->
                <div class="hidden lg:flex items-center space-x-4">
                    <a href="${basePath}pages/contact.html" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md hover:shadow-orange-500/25 transition-all">
                        <span>Request B2B Proposal</span>
                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </a>
                </div>

                <!-- Mobile Hamburger Button -->
                <button id="mobile-menu-btn" type="button" aria-label="Open mobile navigation" class="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>
        </header>
    </div>

    <!-- Enhanced Full-Featured Mobile Drawer -->
    <div id="mobile-menu"
        class="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-xl transition-all duration-300 opacity-0 pointer-events-none lg:hidden flex justify-end">
        <div id="mobile-menu-panel" class="w-[88%] max-w-md h-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto transform translate-x-full transition-transform duration-300 ease-out border-l border-slate-200 dark:border-slate-800">
            
            <!-- Mobile Header Top -->
            <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-10">
                <a href="${basePath}index.html" class="flex items-center">
                    <img src="${basePath}assets/union.png" alt="V-Marketers Logo" width="60" height="32" class="h-7 w-auto object-contain">
                </a>
                <button id="close-menu-btn" type="button" aria-label="Close navigation" class="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu Links -->
            <div class="p-5 space-y-6 flex-1">
                <!-- Quick CTA Button -->
                <a href="${basePath}pages/contact.html" class="mobile-link flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/20 text-center">
                    <i class="fa-solid fa-paper-plane text-xs"></i>
                    <span>Request Custom Lead Proposal</span>
                </a>

                <!-- Primary Nav -->
                <div class="space-y-1">
                    <a href="${basePath}index.html" class="mobile-link flex items-center justify-between p-3 rounded-xl font-bold text-slate-900 dark:text-white hover:bg-orange-50 dark:hover:bg-slate-800 text-base">
                        <span>Home</span>
                        <i class="fa-solid fa-angle-right text-xs text-slate-400"></i>
                    </a>
                    <a href="${basePath}pages/services.html" class="mobile-link flex items-center justify-between p-3 rounded-xl font-bold text-slate-900 dark:text-white hover:bg-orange-50 dark:hover:bg-slate-800 text-base">
                        <span>All Services Overview</span>
                        <i class="fa-solid fa-angle-right text-xs text-slate-400"></i>
                    </a>
                    <a href="${basePath}pages/about.html" class="mobile-link flex items-center justify-between p-3 rounded-xl font-bold text-slate-900 dark:text-white hover:bg-orange-50 dark:hover:bg-slate-800 text-base">
                        <span>About V-Marketers</span>
                        <i class="fa-solid fa-angle-right text-xs text-slate-400"></i>
                    </a>
                </div>

                <!-- Services Section -->
                <div>
                    <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-3 mb-2">
                        Demand Gen & Syndication Services
                    </div>
                    <div class="space-y-1 bg-slate-50 dark:bg-slate-800/40 p-2 rounded-2xl border border-slate-100 dark:border-slate-800/60">
                        <a href="${basePath}Service_Pages/content-syndication.html" class="mobile-link flex items-center gap-3 p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 font-medium text-slate-800 dark:text-slate-200 text-sm">
                            <span class="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-bullhorn"></i></span>
                            <span class="flex-1">Content Syndication</span>
                            <span class="text-[9px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded uppercase">Core</span>
                        </a>
                        <a href="${basePath}Service_Pages/lead-generation.html" class="mobile-link flex items-center gap-3 p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 font-medium text-slate-800 dark:text-slate-200 text-sm">
                            <span class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-filter"></i></span>
                            <span class="flex-1">MQL, HQL & BANT Leads</span>
                        </a>
                        <a href="${basePath}Service_Pages/demand-generation.html" class="mobile-link flex items-center gap-3 p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 font-medium text-slate-800 dark:text-slate-200 text-sm">
                            <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-chart-line"></i></span>
                            <span class="flex-1">Demand Generation & ABM</span>
                        </a>
                        <a href="${basePath}Service_Pages/email-marketing.html" class="mobile-link flex items-center gap-3 p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 font-medium text-slate-800 dark:text-slate-200 text-sm">
                            <span class="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-envelope-open-text"></i></span>
                            <span class="flex-1">Email Outreach Marketing</span>
                        </a>
                        <a href="${basePath}Service_Pages/content-marketing.html" class="mobile-link flex items-center gap-3 p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 font-medium text-slate-800 dark:text-slate-200 text-sm">
                            <span class="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-file-signature"></i></span>
                            <span class="flex-1">B2B Content Strategy</span>
                        </a>
                        <a href="${basePath}Service_Pages/lead-nurturing.html" class="mobile-link flex items-center gap-3 p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 font-medium text-slate-800 dark:text-slate-200 text-sm">
                            <span class="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-arrows-spin"></i></span>
                            <span class="flex-1">Multi-Touch Lead Nurturing</span>
                        </a>
                    </div>
                </div>

                <!-- Legal / Compliance -->
                <div class="space-y-1">
                    <a href="${basePath}pages/privacy-policy.html" class="mobile-link flex items-center justify-between p-3 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-800 text-sm">
                        <span class="flex items-center gap-2"><i class="fa-solid fa-shield-halved text-orange-500"></i> Data Privacy & CCPA</span>
                        <i class="fa-solid fa-angle-right text-xs text-slate-400"></i>
                    </a>
                    <a href="${basePath}pages/terms.html" class="mobile-link flex items-center justify-between p-3 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-800 text-sm">
                        <span class="flex items-center gap-2"><i class="fa-solid fa-file-contract text-orange-500"></i> Terms of Service</span>
                        <i class="fa-solid fa-angle-right text-xs text-slate-400"></i>
                    </a>
                    <a href="${basePath}pages/opt-out.html" class="mobile-link flex items-center justify-between p-3 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-800 text-sm">
                        <span class="flex items-center gap-2"><i class="fa-solid fa-user-xmark text-orange-500"></i> Do Not Sell / Opt-Out</span>
                        <i class="fa-solid fa-angle-right text-xs text-slate-400"></i>
                    </a>
                    <a href="${basePath}pages/contact.html" class="mobile-link flex items-center justify-between p-3 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-800 text-sm">
                        <span class="flex items-center gap-2"><i class="fa-solid fa-headset text-orange-500"></i> Contact Strategists</span>
                        <i class="fa-solid fa-angle-right text-xs text-slate-400"></i>
                    </a>
                </div>
            </div>

            <!-- Mobile Footer Bottom -->
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 text-xs text-slate-500 dark:text-slate-400 space-y-2">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-envelope text-orange-500"></i>
                    <a href="mailto:support@v-marketers.com" class="font-semibold text-slate-800 dark:text-slate-200">support@v-marketers.com</a>
                </div>
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-location-dot text-orange-500"></i>
                    <span>Pune, MH, India • Global Client Delivery</span>
                </div>
            </div>

        </div>
    </div>
    `;

    // --- 2. Enterprise B2B Footer HTML String ---
    const footerHTML = `
    <footer class="bg-slate-50 text-slate-700 border-t border-slate-200/90 pt-16 md:pt-24 pb-12" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="container mx-auto px-6 lg:px-12">
            <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-12 mb-16 md:mb-20">

                <!-- Company Info & Badges -->
                <div class="lg:col-span-4 space-y-6">
                    <a href="${basePath}index.html" class="inline-block">
                        <img src="${basePath}assets/union.png" 
                             alt="V-Marketers B2B Lead Gen Logo" 
                             width="180" height="70" loading="lazy"
                             class="h-8 sm:h-10 w-auto object-contain">
                    </a>
                    <p class="text-slate-600 text-sm leading-relaxed max-w-sm">
                        Enterprise B2B Demand Generation & Content Syndication Agency. Delivering high-intent, 100% opt-in MQL, HQL, and BANT-qualified pipelines to B2B technology leaders worldwide.
                    </p>
                    
                    <!-- Compliance Badges -->
                    <div class="flex flex-wrap gap-2 pt-1">
                        <span class="inline-flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm px-2.5 py-1 rounded-lg text-[11px] font-bold text-emerald-700">
                            <i class="fa-solid fa-check-double text-[10px] text-emerald-600"></i> 100% Human & SMTP Verified
                        </span>
                        <span class="inline-flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm px-2.5 py-1 rounded-lg text-[11px] font-bold text-blue-700">
                            <i class="fa-solid fa-shield-check text-[10px] text-blue-600"></i> CCPA / CPRA Ready
                        </span>
                        <span class="inline-flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm px-2.5 py-1 rounded-lg text-[11px] font-bold text-orange-700">
                            <i class="fa-solid fa-envelope-circle-check text-[10px] text-orange-600"></i> CAN-SPAM Certified
                        </span>
                    </div>

                    <div class="pt-2">
                        <a href="https://www.linkedin.com/company/v-marketers/" target="_blank" rel="noopener noreferrer" aria-label="Follow V-Marketers on LinkedIn"
                            class="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-white text-slate-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 border border-slate-200 shadow-sm transition-all text-xs font-semibold group">
                            <i class="fa-brands fa-linkedin text-base text-blue-600 group-hover:text-white transition-colors"></i>
                            <span>Follow on LinkedIn</span>
                        </a>
                    </div>
                </div>

                <!-- B2B Solutions -->
                <div class="lg:col-span-3">
                    <h3 class="font-extrabold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-orange-500"></span> Demand Gen Solutions
                    </h3>
                    <nav aria-label="B2B Demand Generation Solutions">
                        <ul class="space-y-3.5 text-sm font-medium text-slate-600">
                            <li><a href="${basePath}Service_Pages/content-syndication.html" class="hover:text-orange-600 transition-colors flex items-center justify-between group">
                                <span>Content Syndication</span> <span class="text-[9px] bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-bold border border-orange-200">Top</span>
                            </a></li>
                            <li><a href="${basePath}Service_Pages/lead-generation.html" class="hover:text-orange-600 transition-colors">MQL & HQL Lead Generation</a></li>
                            <li><a href="${basePath}Service_Pages/demand-generation.html" class="hover:text-orange-600 transition-colors">Account-Based Marketing (ABM)</a></li>
                            <li><a href="${basePath}Service_Pages/email-marketing.html" class="hover:text-orange-600 transition-colors">Multi-Channel Email Outreach</a></li>
                            <li><a href="${basePath}Service_Pages/content-marketing.html" class="hover:text-orange-600 transition-colors">B2B Content & Asset Strategy</a></li>
                            <li><a href="${basePath}Service_Pages/lead-nurturing.html" class="hover:text-orange-600 transition-colors">Multi-Touch Lead Nurturing</a></li>
                        </ul>
                    </nav>
                </div>

                <!-- Company & Governance -->
                <div class="lg:col-span-2">
                    <h3 class="font-extrabold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-blue-600"></span> Company & Trust
                    </h3>
                    <nav aria-label="Company Links">
                        <ul class="space-y-3.5 text-sm font-medium text-slate-600">
                            <li><a href="${basePath}pages/about.html" class="hover:text-orange-600 transition-colors">About Us</a></li>
                            <li><a href="${basePath}pages/services.html" class="hover:text-orange-600 transition-colors">Service Overview</a></li>
                            <li><a href="${basePath}pages/contact.html" class="hover:text-orange-600 transition-colors">Book Strategy Call</a></li>
                            <li><a href="${basePath}pages/privacy-policy.html" class="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="${basePath}pages/terms.html" class="hover:text-orange-600 transition-colors">Terms of Service</a></li>
                        </ul>
                    </nav>
                </div>

                <!-- Enterprise Contact & Newsletter -->
                <div class="lg:col-span-3 space-y-4">
                    <h3 class="font-extrabold text-slate-900 mb-4 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-600"></span> Pipeline Insights
                    </h3>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Join 12,000+ B2B CMOs receiving quarterly B2B intent signals, CPL benchmarks & syndication trends.
                    </p>
                    <form class="flex flex-col gap-2">
                        <label for="footer-email" class="sr-only">Business Email</label>
                        <input id="footer-email" type="email" placeholder="Enter work email..." required
                            class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm transition-all" />
                        <button type="submit"
                            class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-4 py-3 rounded-xl transition-all text-xs uppercase tracking-wider shadow-md shadow-orange-500/20">
                            Subscribe to Benchmarks
                        </button>
                    </form>
                    <div class="pt-2 text-[11px] text-slate-500">
                        <i class="fa-solid fa-lock text-[10px] text-slate-400 mr-1"></i> We respect your privacy. Unsubscribe at any time.
                    </div>
                </div>

            </div>

            <!-- Bottom Sub-Footer -->
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-slate-200 pt-8 text-xs text-slate-500">
                <p class="text-center md:text-left">
                    © <span id="current-year"></span> <strong class="text-slate-800 font-semibold">V-Marketers</strong>. Engineered for Enterprise Pipeline Growth.
                </p>
                <div class="flex flex-wrap justify-center md:justify-end gap-6 text-xs font-medium">
                    <a href="${basePath}pages/privacy-policy.html" class="hover:text-orange-600 text-slate-600 transition-colors">Privacy Policy</a>
                    <a href="${basePath}pages/terms.html" class="hover:text-orange-600 text-slate-600 transition-colors">Terms of Service</a>
                    <a href="${basePath}pages/opt-out.html" class="hover:text-orange-600 text-slate-600 transition-colors">Do Not Sell My Info / Opt-Out</a>
                    <button id="open-cookie-preferences-btn" type="button" class="hover:text-orange-600 text-slate-600 transition-colors focus:outline-none font-medium">Cookie Preferences</button>
                    <a href="${basePath}pages/contact.html" class="hover:text-orange-600 text-slate-600 transition-colors">Contact Support</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    // --- 3. Cookie Consent Banner & Customization Modal HTML ---
    const cookieConsentHTML = `
    <!-- Floating Cookie Consent Banner -->
    <div id="vm-cookie-banner" class="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[9999] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.25)] rounded-3xl p-5 md:p-6 transition-all duration-500 transform translate-y-8 opacity-0 pointer-events-none" role="region" aria-label="Cookie Consent Banner">
        <div class="flex items-start gap-3.5">
            <div class="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0 text-lg">
                <i class="fa-solid fa-shield-halved"></i>
            </div>
            <div class="flex-1 space-y-1.5">
                <div class="flex items-center justify-between">
                    <h4 class="text-sm font-black text-slate-900 dark:text-white">Cookie & Privacy Preferences</h4>
                    <span class="text-[9px] font-extrabold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/60 px-2 py-0.5 rounded-full border border-orange-500/20">Privacy Notice</span>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    We use cookies to enhance navigation, analyze B2B campaign metrics, and serve personalized content. Learn more in our <a href="${basePath}pages/privacy-policy.html" class="text-orange-600 dark:text-orange-400 underline font-semibold hover:text-orange-500">Privacy Policy</a>.
                </p>
            </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            <button id="vm-cookie-customize-btn" type="button" class="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-center sm:text-left py-1 focus:outline-none">
                <i class="fa-solid fa-sliders text-[11px] mr-1"></i> Customize
            </button>
            <div class="flex items-center gap-2">
                <button id="vm-cookie-reject-btn" type="button" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 focus:outline-none">
                    Reject Non-Essential
                </button>
                <button id="vm-cookie-accept-btn" type="button" class="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md transition-all focus:outline-none">
                    Accept All
                </button>
            </div>
        </div>
    </div>

    <!-- Customize Cookies Modal -->
    <div id="vm-cookie-modal" class="fixed inset-0 z-[10000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 opacity-0 pointer-events-none" role="dialog" aria-modal="true" aria-labelledby="vm-modal-title">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            
            <div class="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div class="space-y-1">
                    <h3 id="vm-modal-title" class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-cookie-bite text-orange-500"></i>
                        <span>Customize Cookie Preferences</span>
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400">
                        Manage your consent preferences for different categories of cookies.
                    </p>
                </div>
                <button id="vm-cookie-modal-close" type="button" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center shrink-0 transition-colors focus:outline-none" aria-label="Close modal">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Cookie Categories List -->
            <div class="space-y-3.5 text-xs">
                
                <!-- Category 1: Strictly Necessary (Locked) -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                    <div class="flex items-center justify-between">
                        <div class="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span>Strictly Necessary</span>
                            <span class="text-[9px] font-extrabold text-slate-500 uppercase bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">Always Active</span>
                        </div>
                        <input type="checkbox" checked disabled class="rounded text-orange-500 focus:ring-orange-500 cursor-not-allowed opacity-60">
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
                        Required for core site security, user session handling, and compliance preferences. These cannot be disabled.
                    </p>
                </div>

                <!-- Category 2: Performance & Analytics -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                    <div class="flex items-center justify-between">
                        <div class="font-bold text-slate-900 dark:text-white">Performance & Analytics</div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input id="vm-pref-analytics" type="checkbox" checked class="sr-only peer">
                            <div class="w-9 h-5 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
                        </label>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
                        Helps us measure site traffic, page speed, and content syndication click-through metrics to optimize user experience.
                    </p>
                </div>

                <!-- Category 3: B2B Intent & Experience -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                    <div class="flex items-center justify-between">
                        <div class="font-bold text-slate-900 dark:text-white">B2B Intent & Personalization</div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input id="vm-pref-intent" type="checkbox" checked class="sr-only peer">
                            <div class="w-9 h-5 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
                        </label>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
                        Enables industry-tailored whitepaper recommendations and remembers your role preferences across visits.
                    </p>
                </div>

                <!-- Category 4: Marketing & Conversion -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                    <div class="flex items-center justify-between">
                        <div class="font-bold text-slate-900 dark:text-white">Marketing & Partner Attribution</div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input id="vm-pref-marketing" type="checkbox" class="sr-only peer">
                            <div class="w-9 h-5 bg-slate-300 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
                        </label>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[11px]">
                        Used to measure conversion effectiveness on B2B lead generation campaigns from verified partner networks.
                    </p>
                </div>

            </div>

            <!-- Modal Action Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button id="vm-cookie-modal-save" type="button" class="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700">
                    Save Preferences
                </button>
                <button id="vm-cookie-modal-accept" type="button" class="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md transition-all">
                    Accept All
                </button>
            </div>

        </div>
    </div>
    `;

    // --- 4. Injection Logic ---
    const navContainer = document.getElementById('navbar-placeholder');
    const footerContainer = document.getElementById('footer-placeholder');

    if (navContainer) {
        navContainer.innerHTML = navbarHTML;
    }
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        
        // Newsletter Form Handler (Supabase)
        const newsletterForm = footerContainer.querySelector('form');
        if (newsletterForm) {
            const supabaseUrl = 'https://bmuchtkmunsjnwyyxihw.supabase.co';
            const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdWNodGttdW5zam53eXl4aWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTQ1NDQsImV4cCI6MjA5MTMzMDU0NH0.gd6lNFXqZsz-YTzt1A8oOY-bl9jz-iCoRlm1UF7lIYs';

            newsletterForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('#footer-email');
                const submitBtn = newsletterForm.querySelector('button[type="submit"]');

                if (!emailInput || !emailInput.value) return;

                if (typeof supabase === 'undefined') {
                    console.error('Supabase library not loaded.');
                    alert('Newsletter service temporarily unavailable. Please try again later.');
                    return;
                }

                const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Processing...';
                }

                try {
                    const { error } = await _supabase
                        .from('newsletter_subs')
                        .insert([{ email: emailInput.value }]);

                    if (error) {
                        if (error.code === '23505') {
                            alert('You are already subscribed to pipeline insights!');
                        } else {
                            throw error;
                        }
                    } else {
                        alert('Thank you! You are subscribed to V-Marketers quarterly pipeline insights.');
                        newsletterForm.reset();
                    }
                } catch (err) {
                    console.error('Newsletter Error:', err);
                    alert('Submission failed: ' + (err.message || 'Unknown Error'));
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Subscribe to Benchmarks';
                    }
                }
            });
        }
    }

    // --- 5. Inject & Initialize Cookie Consent System ---
    let cookieContainer = document.getElementById('cookie-consent-container');
    if (!cookieContainer) {
        cookieContainer = document.createElement('div');
        cookieContainer.id = 'cookie-consent-container';
        document.body.appendChild(cookieContainer);
    }
    cookieContainer.innerHTML = cookieConsentHTML;

    // Cookie Logic & Event Handlers
    const cookieBanner = document.getElementById('vm-cookie-banner');
    const cookieModal = document.getElementById('vm-cookie-modal');
    const acceptBtn = document.getElementById('vm-cookie-accept-btn');
    const rejectBtn = document.getElementById('vm-cookie-reject-btn');
    const customizeBtn = document.getElementById('vm-cookie-customize-btn');
    const modalCloseBtn = document.getElementById('vm-cookie-modal-close');
    const modalSaveBtn = document.getElementById('vm-cookie-modal-save');
    const modalAcceptBtn = document.getElementById('vm-cookie-modal-accept');
    const openPrefFooterBtn = document.getElementById('open-cookie-preferences-btn');

    const analyticsCheck = document.getElementById('vm-pref-analytics');
    const intentCheck = document.getElementById('vm-pref-intent');
    const marketingCheck = document.getElementById('vm-pref-marketing');

    const STORAGE_KEY = 'vmarketers_cookie_consent';

    function hideBanner() {
        if (cookieBanner) {
            cookieBanner.classList.add('translate-y-8', 'opacity-0', 'pointer-events-none');
            cookieBanner.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
        }
    }

    function showBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('translate-y-8', 'opacity-0', 'pointer-events-none');
            cookieBanner.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
        }
    }

    function openModal() {
        // Load current saved preferences if any
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
            if (analyticsCheck && typeof saved.analytics === 'boolean') analyticsCheck.checked = saved.analytics;
            if (intentCheck && typeof saved.intent === 'boolean') intentCheck.checked = saved.intent;
            if (marketingCheck && typeof saved.marketing === 'boolean') marketingCheck.checked = saved.marketing;
        } catch (e) {}

        if (cookieModal) {
            cookieModal.classList.remove('opacity-0', 'pointer-events-none');
            cookieModal.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (cookieModal) {
            cookieModal.classList.add('opacity-0', 'pointer-events-none');
            cookieModal.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        }
    }

    function saveConsent(status, prefs) {
        const consentData = {
            status: status,
            necessary: true,
            analytics: prefs.analytics,
            intent: prefs.intent,
            marketing: prefs.marketing,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
        hideBanner();
        closeModal();
    }

    // Check if new user or no consent recorded
    const existingConsent = localStorage.getItem(STORAGE_KEY);
    if (!existingConsent) {
        setTimeout(showBanner, 700);
    }

    // Bind event listeners
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            saveConsent('all_accepted', { analytics: true, intent: true, marketing: true });
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            saveConsent('rejected_non_essential', { analytics: false, intent: false, marketing: false });
        });
    }

    if (customizeBtn) {
        customizeBtn.addEventListener('click', openModal);
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalAcceptBtn) {
        modalAcceptBtn.addEventListener('click', () => {
            saveConsent('all_accepted', { analytics: true, intent: true, marketing: true });
        });
    }

    if (modalSaveBtn) {
        modalSaveBtn.addEventListener('click', () => {
            saveConsent('customized', {
                analytics: analyticsCheck ? analyticsCheck.checked : false,
                intent: intentCheck ? intentCheck.checked : false,
                marketing: marketingCheck ? marketingCheck.checked : false
            });
        });
    }

    if (cookieModal) {
        cookieModal.addEventListener('click', (e) => {
            if (e.target === cookieModal) {
                closeModal();
            }
        });
    }

    if (openPrefFooterBtn) {
        openPrefFooterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cookieModal && !cookieModal.classList.contains('opacity-0')) {
            closeModal();
        }
    });

    // Update current year if footer was injected
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Fire event
    window.componentsAreLoaded = true;
    document.dispatchEvent(new Event('componentsLoaded'));
};

// Initial injection on load
document.addEventListener('DOMContentLoaded', window.injectComponents);

