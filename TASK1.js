// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Event listener for the mobile menu button
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.createElement('div');
    mobileMenuButton.classList.add('mobile-menu-button');
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header').appendChild(mobileMenuButton);

    mobileMenuButton.addEventListener('click', toggleMobileMenu);
});