/**
 * Timer Logic for CMG Tutor Page
 * 3 Month Countdown (Simulated constant countdown for demo/urgency)
 */

function startCountdown(durationDays) {
    // Set deadline to now + duration
    // For a persistent feeling demo, we'll just parse a fixed date in future or reset 
    // But prompted for "3-month countdown". Let's generate a date 3 months from now.

    // Check if we have a stored date in LocalStorage to make it consistent for the user
    let deadline = localStorage.getItem('cmg_offer_deadline');

    // [DEPLOYMENT CONFIG] Timer Duration
    // This logic sets a 3-month deadline from first visit. 
    // To set a fixed absolute date, use: deadline = new Date("2024-12-31").getTime();
    if (!deadline) {
        const now = new Date();
        now.setMonth(now.getMonth() + 3);
        deadline = now.getTime();
        localStorage.setItem('cmg_offer_deadline', deadline);
    }

    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            clearInterval(timerInterval);
            // Reset for demo purposes
            const newDate = new Date();
            newDate.setMonth(newDate.getMonth() + 3);
            localStorage.setItem('cmg_offer_deadline', newDate.getTime());
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const elDays = document.getElementById('timer-days');
        const elHours = document.getElementById('timer-hours');
        const elMinutes = document.getElementById('timer-minutes');
        const elSeconds = document.getElementById('timer-seconds');

        if (elDays) elDays.innerText = String(days).padStart(2, '0');
        if (elHours) elHours.innerText = String(hours).padStart(2, '0');
        if (elMinutes) elMinutes.innerText = String(minutes).padStart(2, '0');
        if (elSeconds) elSeconds.innerText = String(seconds).padStart(2, '0');

    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('timer-days')) {
        startCountdown(90);
    }
});
