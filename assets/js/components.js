/**
 * Reusable Components (Navbar & Footer)
 * Updated logic for Fixed Navbar and Dynamic Logo for CMG Tutor
 */

// LOGO CONFIGURATION
// [DEPLOYMENT CONFIG] Update this URL to change the CMG Tutor specific logo
// Instructions: Upload your logo to the assets/images/ folder and update the path below relative to the root,
// e.g., "assets/images/tutor-logo.png" or use an external URL.
const CMG_TUTOR_LOGO_URL = "https://via.placeholder.com/150x50?text=CMG+Tutor"; // REPLACE_THIS_URL

const NavbarHTML = `
<nav class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-shadow duration-300" id="main-navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <!-- Logo Container -->
            <div class="flex-shrink-0 flex items-center" id="navbar-logo-container">
                <a href="index.html" class="flex items-center gap-2 group">
                    <div class="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-sky-500 transition-colors">C</div>
                    <span class="font-bold text-xl text-blue-900 tracking-tight">College Mil Gaya</span>
                </a>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="my-tutor.html" class="text-slate-600 hover:text-blue-900 font-medium transition-colors">CMG Tutor</a>
                <a href="my-mentor.html" class="text-slate-600 hover:text-blue-900 font-medium transition-colors">CMG Mentor</a>
                <a href="my-college.html" class="text-slate-600 hover:text-blue-900 font-medium transition-colors">CMG College</a>
                
                <!-- Services Dropdown -->
                <div class="relative group">
                    <button class="flex items-center text-slate-600 group-hover:text-blue-900 font-medium transition-colors focus:outline-none">
                        Explore
                        <svg class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown Menu -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-slate-100 rounded-xl shadow-lg p-2">
                        <a href="for-parents.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900 rounded-lg">For Parents</a>
                        <a href="for-students.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900 rounded-lg">For Students</a>
                        <a href="for-educational-institutes.html" class="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-900 rounded-lg">For Institutes</a>
                    </div>
                </div>

                <a href="blog.html" class="text-slate-600 hover:text-blue-900 font-medium transition-colors">Blog</a>
                <a href="about.html" class="text-slate-600 hover:text-blue-900 font-medium transition-colors">About</a>
            </div>

            <!-- CTA Button -->
            <div class="hidden md:flex items-center">
                <a href="contact.html" class="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-sm hover:shadow-md">
                    Contact Us
                </a>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button id="mobile-menu-btn" class="text-slate-600 hover:text-blue-900 focus:outline-none p-2">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu Panel -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-100 shadow-xl max-h-[80vh] overflow-y-auto">
        <div class="px-4 pt-2 pb-6 space-y-2">
            <a href="my-tutor.html" class="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg">CMG Tutor</a>
            <a href="my-mentor.html" class="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg">CMG Mentor</a>
            <a href="my-college.html" class="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg">CMG College</a>
            <div class="border-t border-slate-100 my-2 pt-2">
                <div class="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Services</div>
                <a href="for-parents.html" class="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg pl-6">For Parents</a>
                <a href="for-students.html" class="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg pl-6">For Students</a>
                <a href="for-educational-institutes.html" class="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg pl-6">For Institutes</a>
            </div>
            <a href="blog.html" class="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg">Blog</a>
            <a href="about.html" class="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-900 hover:bg-slate-50 rounded-lg">About</a>
            <a href="contact.html" class="block w-full text-center mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition-all">
                Contact Us
            </a>
        </div>
    </div>
</nav>
`;

// Footer HTML remains similar but included for completeness of the file rewrite
const FooterHTML = `
<footer class="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <!-- Brand -->
            <div class="col-span-1 lg:col-span-2">
                <a href="index.html" class="flex items-center gap-2 mb-6">
                    <div class="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
                    <span class="font-bold text-xl text-blue-900">College Mil Gaya</span>
                </a>
                <p class="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
                    Empowering students and parents with clarity, confidence, and the right tools for a brighter educational journey. No hype, just honest guidance.
                </p>
                <div class="flex space-x-4">
                    <!-- Social Placeholders -->
                    <a href="#" class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-900 hover:border-blue-900 transition-all">
                        <span class="sr-only">Facebook</span>
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-900 hover:border-blue-900 transition-all">
                        <span class="sr-only">Instagram</span>
                       <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="font-semibold text-blue-900 mb-4">Focus Areas</h3>
                <ul class="space-y-3">
                    <li><a href="my-tutor.html" class="text-slate-600 hover:text-blue-900 text-sm transition-colors">CMG Tutor</a></li>
                    <li><a href="my-mentor.html" class="text-slate-600 hover:text-blue-900 text-sm transition-colors">CMG Mentor</a></li>
                    <li><a href="my-college.html" class="text-slate-600 hover:text-blue-900 text-sm transition-colors">CMG College</a></li>
                    <li><a href="blog.html" class="text-slate-600 hover:text-blue-900 text-sm transition-colors">Latest Insights</a></li>
                </ul>
            </div>

            <!-- Services -->
            <div>
                <h3 class="font-semibold text-blue-900 mb-4">Who We Help</h3>
                <ul class="space-y-3">
                    <li><a href="for-parents.html" class="text-slate-600 hover:text-blue-900 text-sm transition-colors">For Parents</a></li>
                    <li><a href="for-students.html" class="text-slate-600 hover:text-blue-900 text-sm transition-colors">For Students</a></li>
                    <li><a href="for-educational-institutes.html" class="text-slate-600 hover:text-blue-900 text-sm transition-colors">For Institutes</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h3 class="font-semibold text-blue-900 mb-4">Contact</h3>
                <ul class="space-y-3">
                    <li class="text-slate-600 text-sm">Advice: <a href="contact.html" class="text-blue-900 hover:underline">Know what’s best</a></li>
                    <li class="text-slate-600 text-sm">Product: <a href="my-tutor.html" class="text-blue-900 hover:underline">Buy CMG Tutor</a></li>
                    <li class="mt-4 pt-4 border-t border-slate-200">
                         <a href="contact.html" class="inline-flex items-center text-sm font-semibold text-blue-900 hover:text-blue-700">
                            Get in touch <span aria-hidden="true" class="ml-1">&rarr;</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-slate-400 text-sm text-center md:text-left">
                &copy; ${new Date().getFullYear()} College Mil Gaya. All rights reserved.
            </p>
            <div class="flex space-x-6 text-sm text-slate-400">
                <a href="#" class="hover:text-slate-600">Privacy Policy</a>
                <a href="#" class="hover:text-slate-600">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>
`;

// Inject components
document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) navPlaceholder.innerHTML = NavbarHTML;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.innerHTML = FooterHTML;

    // Mobile Menu logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Sticky/Fixed Shadow Logic
    const nav = document.getElementById('main-navbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        });
    }

});
