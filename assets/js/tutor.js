/**
 * Logic for CMG Tutor Page
 * 1. FAQs Carousel (Rotation + Controls)
 */

// [DEPLOYMENT CONFIG] FAQ Content (Carousel)
// Add, remove, or edit FAQ objects here.
const faqs = [
    {
        q: "How fast will I get doubts solved?",
        a: "Our AI responds within seconds. Complex problems are broken down step-by-step instantly."
    },
    {
        q: "Is it suitable for all boards?",
        a: "Yes. CMG Tutor is trained on CBSE, ICSE, and State Board curriculums for Class 1 to 12."
    },
    {
        q: "Can I use it on mobile?",
        a: "Absolutely. The platform is mobile-optimized so you can learn on the go."
    },
    {
        q: "Is there a free trial?",
        a: "We offer a 7-day money-back guarantee instead of a limited trial, so you can experience full features risk-free."
    }
];

let faqIndex = 0;
let faqInterval = null;
let faqPaused = false;
const faqTime = 6000;

function renderFaq() {
    const qEl = document.getElementById('faq-question');
    const aEl = document.getElementById('faq-answer');
    const container = document.getElementById('faq-content');

    if (container) {
        container.classList.add('opacity-0');
        setTimeout(() => {
            if (qEl) qEl.innerText = faqs[faqIndex].q;
            if (aEl) aEl.innerText = faqs[faqIndex].a;
            container.classList.remove('opacity-0');
        }, 300);
    }
}

function nextFaq() {
    faqIndex = (faqIndex + 1) % faqs.length;
    renderFaq();
}

function prevFaq() {
    faqIndex = (faqIndex - 1 + faqs.length) % faqs.length;
    renderFaq();
}

function toggleFaqPlay() {
    const icon = document.getElementById('faq-play-icon');
    faqPaused = !faqPaused;

    if (faqPaused) {
        clearInterval(faqInterval);
        if (icon) icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`;
    } else {
        startFaqRotation();
        if (icon) icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>`;
    }
}

function startFaqRotation() {
    if (faqInterval) clearInterval(faqInterval);
    faqInterval = setInterval(() => {
        if (!faqPaused) nextFaq();
    }, faqTime);
}

document.addEventListener('DOMContentLoaded', () => {
    // Only init if we are on the page with FAQ elements
    if (document.getElementById('faq-question')) {
        renderFaq();
        startFaqRotation();

        window.faqNext = () => {
            nextFaq();
            if (!faqPaused) startFaqRotation();
        };
        window.faqPrev = () => {
            prevFaq();
            if (!faqPaused) startFaqRotation();
        };
        window.faqToggle = toggleFaqPlay;
    }
});
