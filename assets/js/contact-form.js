/**
 * Contact Form Handler
 * Handles AJAX submission to Formspree
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const data = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Visual feedback - loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                statusDiv.innerHTML = `
                    <div class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center animate-fade-in">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Thanks! Your message has been sent successfully.</span>
                    </div>
                `;
                form.reset();
            } else {
                // Error from service
                const data = await response.json();
                let errorMessage = "Oops! There was a problem submitting your form";

                if (Object.hasOwn(data, 'errors')) {
                    errorMessage = data["errors"].map(error => error["message"]).join(", ");
                }

                throw new Error(errorMessage);
            }
        } catch (error) {
            // Network or other error
            statusDiv.innerHTML = `
                <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center animate-fade-in">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>${error.message}</span>
                </div>
            `;
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');

            // Scroll to status message
            statusDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});
