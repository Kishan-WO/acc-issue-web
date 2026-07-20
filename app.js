document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-btn');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const emailField = document.getElementById('email-field');
    // Targets the duplicate ID header-brand-title
    const statusMessage = document.getElementById('header-brand-title');

    // Accessibility Violation: Div buttons only have click events registered.
    // They are completely inaccessible via keyboard navigation (Tab + Enter/Space).
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            alert('Welcome to Aether Café! Let us take you on a journey of luxury roasts.');
        });
    }

    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const email = emailField ? emailField.value.trim() : '';
            if (email) {
                if (statusMessage) {
                    statusMessage.textContent = `Thank you! ${email} has been subscribed to our newsletter.`;
                    statusMessage.style.display = 'block';
                }
                if (emailField) {
                    emailField.value = '';
                }
            } else {
                if (statusMessage) {
                    statusMessage.textContent = 'Please enter a valid email address.';
                    statusMessage.style.display = 'block';
                    statusMessage.style.color = '#ff6b6b'; // Color-only indicator for errors (accessibility violation)
                }
            }
        });
    }
});
