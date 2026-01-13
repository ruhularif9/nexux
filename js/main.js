document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Get Started Modal Logic ---
    const modal = document.getElementById('modal');
    const getStartedBtns = document.querySelectorAll('.get-started-btn');
    const closeBtn = document.querySelector('.modal-close');

    if (modal && getStartedBtns.length > 0) {
        // Open Modal
        getStartedBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });

        // Close Modal via X button
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            });
        }

        // Close Modal via Outside Click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }

    // --- 2. Form Validation Logic ---
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const emailError = document.getElementById('emailError');

    if (emailInput && submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent actual form submission for demo

            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {
                showError("Please enter your email address.");
            } else if (!emailRegex.test(email)) {
                showError("Please enter a valid email address.");
            } else {
                // Success case
                showError(""); // Clear errors
                alert(`Success! You've joined the waitlist with: ${email}`);
                emailInput.value = ""; // Reset input
            }
        });

        function showError(message) {
            if (emailError) {
                emailError.textContent = message;
                emailError.style.display = message ? 'block' : 'none';
                emailError.style.color = '#ff4d4d';
                emailError.style.marginTop = '10px';
                emailError.style.fontSize = '14px';
            }
        }
    }

    // --- 3. Back to Top Button Logic ---
    const backToTopBtn = document.querySelector('.back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.pointerEvents = 'auto';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.pointerEvents = 'none';
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
