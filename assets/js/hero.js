/**
 * Hero Section Rotation Logic (Enhanced)
 * Supports Manual Prev/Next, Play/Pause, and Auto-Rotation
 */

// [DEPLOYMENT CONFIG] Hero Carousel Content
// Add, remove, or edit objects in this array to change the rotating hero section.
// Ensure 'theme' matches a valid Tailwind color (blue, emerald, indigo, etc.).
const heroContent = [
    {
        title: "Master Your Exams with <span class='text-blue-600'>CMG Tutor</span>",
        subtitle: "AI-powered learning that adapts to you. Clear concepts, unlimited practice, and zero stress.",
        primaryCta: "Buy CMG Tutor",
        primaryLink: "my-tutor.html",
        theme: "blue"
    },
    {
        title: "Find Balance with <span class='text-emerald-600'>CMG Mentor</span>",
        subtitle: "Professional counselling for a happier student & parent life. Stress management, not stress creation.",
        primaryCta: "Join Waitlist",
        primaryLink: "my-mentor.html",
        theme: "emerald"
    },
    {
        title: "Future Ready with <span class='text-indigo-600'>CMG College</span>",
        subtitle: "Clarity for Class 9–12. Map your stream, exams, and college choices with confidence.",
        primaryCta: "Explore Options",
        primaryLink: "my-college.html",
        theme: "indigo"
    }
];

let currentIndex = 0;
let intervalId = null;
let isPaused = false;
const intervalTime = 5000; // 5 seconds

function renderHero() {
    const titleEl = document.getElementById('hero-title');
    const subtitleEl = document.getElementById('hero-subtitle');
    const ctaEl = document.getElementById('hero-primary-cta');
    const containerEl = document.getElementById('hero-container');

    // Fade out
    if (containerEl) {
        containerEl.classList.add('opacity-0', 'translate-y-4');

        setTimeout(() => {
            // Update content
            const content = heroContent[currentIndex];
            if (titleEl) titleEl.innerHTML = content.title;
            if (subtitleEl) subtitleEl.textContent = content.subtitle;

            if (ctaEl) {
                ctaEl.textContent = content.primaryCta;
                ctaEl.href = content.primaryLink;

                // Update button color classes dynamically based on theme
                ctaEl.className = `inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-${content.theme}-600 rounded-full hover:bg-${content.theme}-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1`;
            }

            // Fade in
            containerEl.classList.remove('opacity-0', 'translate-y-4');
        }, 300); // Short wait for fade out to register
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % heroContent.length;
    renderHero();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + heroContent.length) % heroContent.length;
    renderHero();
}

function toggleAutoPlay() {
    const btnIcon = document.getElementById('hero-play-pause-icon');
    isPaused = !isPaused;

    if (isPaused) {
        clearInterval(intervalId);
        intervalId = null;
        if (btnIcon) btnIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`; // Play Icon
    } else {
        startRotation();
        if (btnIcon) btnIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>`; // Pause Icon
    }
}

function startRotation() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
        if (!isPaused) nextSlide();
    }, intervalTime);
}

document.addEventListener('DOMContentLoaded', () => {
    // Expose control functions to window for onclick attributes
    window.heroNext = () => {
        nextSlide();
        // Reset timer on manual interaction
        if (!isPaused) startRotation();
    };
    window.heroPrev = () => {
        prevSlide();
        if (!isPaused) startRotation();
    };
    window.heroToggle = toggleAutoPlay;

    // Start auto rotation
    startRotation();
});
