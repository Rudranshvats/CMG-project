/**
 * Logic for Rotating/Revolving Content
 * - CMG Tutor: Pros/Cons rotation
 * - For Parents: Struggles rotation
 */

// [DEPLOYMENT CONFIG] Tutor Comparison Data
// Add, remove, or edit these objects to change the comparison text
const tutorComparisons = [
    {
        old: "Waiting for doubts: You forget the question by the time teacher is free.",
        imgOld: "",
        new: "Instant AI 24/7: Snap a photo, get logic in 2 seconds."
    },
    {
        old: "Generic Homework: Practicing what you already know is a waste.",
        imgOld: "",
        new: "Adaptive Practice: Questions that target YOUR weak spots."
    },
    {
        old: "Long Textbooks: Reading 50 pages to find 1 concept.",
        imgOld: "",
        new: "Concept Clarity: Precise explanations that get to the point."
    }
];

// [DEPLOYMENT CONFIG] Parent Struggles Data
// Add, remove, or edit these objects to change rotating struggles on Parent Page
const parentStruggles = [
    {
        struggle: "I don't know if they are actually studying or just staring at the screen.",
        solution: "CMG Tutor provides detailed activity and progress reports, not just 'time spent'."
    },
    {
        struggle: "We fight about mobile usage every single day.",
        solution: "Our counsellors help create a 'Digital Agreement' that respects both study and play."
    },
    {
        struggle: "I'm worried they chose the wrong stream for peer pressure.",
        solution: "CMG College uses psychometric data to validate or pivot career choices objectively."
    }
];

function rotateTutorComparison() {
    let index = 0;
    const oldTextEl = document.getElementById('comp-old-text');
    const newTextEl = document.getElementById('comp-new-text');

    if (!oldTextEl || !newTextEl) return;

    setInterval(() => {
        index = (index + 1) % tutorComparisons.length;

        // Simple fade effect (manual class toggle if needed, or just text swap for MVP)
        oldTextEl.style.opacity = 0;
        newTextEl.style.opacity = 0;

        setTimeout(() => {
            oldTextEl.innerText = tutorComparisons[index].old;
            newTextEl.innerText = tutorComparisons[index].new;

            oldTextEl.style.opacity = 1;
            newTextEl.style.opacity = 1;
        }, 300);

    }, 4000);
}

function rotateParentStruggles() {
    let index = 0;
    const struggleEl = document.getElementById('struggle-text');
    const solutionEl = document.getElementById('solution-text');

    if (!struggleEl || !solutionEl) return;

    setInterval(() => {
        index = (index + 1) % parentStruggles.length;

        const container = document.getElementById('struggle-container');
        if (container) {
            container.classList.add('opacity-0', 'translate-y-2');
            setTimeout(() => {
                struggleEl.innerText = `"${parentStruggles[index].struggle}"`;
                solutionEl.innerText = parentStruggles[index].solution;
                container.classList.remove('opacity-0', 'translate-y-2');
            }, 300);
        }
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    rotateTutorComparison();
    rotateParentStruggles();
});
