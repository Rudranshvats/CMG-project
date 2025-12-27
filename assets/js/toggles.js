/**
 * Toggle Logic for Home Page Sections
 */

function toggleSection(sectionId, btnId) {
    const content = document.getElementById(sectionId);
    const btn = document.getElementById(btnId);
    const icon = btn.querySelector('.toggle-icon');

    if (content.style.maxHeight) {
        // Collapse
        content.style.maxHeight = null;
        content.classList.add('collapsed');
        btn.innerHTML = `Show <svg class="w-4 h-4 ml-1 toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`;
    } else {
        // Expand
        content.classList.remove('collapsed');
        content.style.maxHeight = content.scrollHeight + "px";
        btn.innerHTML = `Hide <svg class="w-4 h-4 ml-1 transform rotate-180 toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach listeners if using global functions or just keep function global
    window.toggleSection = toggleSection;

    // Initialize sections as open (maxHeight = scrollHeight) to start if we want them visible by default
    // Or leave them natural height and just use toggle implementation for "Close". 
    // Requirement says "Show/Hide" controls.
    // Let's assume they start Visible.

    document.querySelectorAll('.section-content').forEach(el => {
        el.style.maxHeight = el.scrollHeight + "px";
    });
});
