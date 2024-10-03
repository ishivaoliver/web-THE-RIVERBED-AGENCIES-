document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile navigation menu
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    navbarToggler.addEventListener('click', () => {
        navbarNav.classList.toggle('show');
    });

    // Form validation for contact and login forms
    const contactForm = document.querySelector('#contact form');
    const loginForm = document.querySelector('#login form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form submission for demo
            alert('Message sent successfully!');
            contactForm.reset(); // Reset form after submission
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form submission for demo
            alert('Login successful!');
            loginForm.reset(); // Reset form after submission
        });
    }

    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 5ec41bed78079fd1d35a231cceef7d8df420eca2
