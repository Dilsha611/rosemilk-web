document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('bg-white/80');
            navbar.classList.add('bg-white/95');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.add('bg-white/80');
            navbar.classList.remove('bg-white/95');
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation classes on scroll (Simple Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.classList.remove('opacity-0'); // Ensure visibility if hidden initially
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section > div').forEach(div => {
        div.classList.add('opacity-0'); // Initially hide
        observer.observe(div);
    });
});

// Global Logout Function
function logout() {
    if (confirm("Are you sure you want to log out?")) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userRole');
        window.location.href = 'login.html';
    }
}
