// nav.js - Handles navbar interactivity

// Shrink navbar on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 40) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

// Dropdown menu toggle (click for mobile)
document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = toggle.parentElement;
    parent.classList.toggle('active');
    // Update aria-expanded for accessibility
    toggle.setAttribute('aria-expanded', parent.classList.contains('active'));
  });
});

// Contact modal open/close
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.querySelector('#contactModal .close');

if (contactBtn && contactModal && closeModal) {
  contactBtn.addEventListener('click', function(e) {
    e.preventDefault();
    contactModal.classList.add('active');
  });
  closeModal.addEventListener('click', function() {
    contactModal.classList.remove('active');
  });
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      contactModal.classList.remove('active');
    }
  });
}

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.getElementById('menuOverlay');

// Overlay dropdown toggle
const overlayDropdownToggle = document.querySelector('.overlay-dropdown-toggle');
const overlayDropdown = document.querySelector('.overlay-dropdown');

if (overlayDropdownToggle && overlayDropdown) {
  overlayDropdownToggle.addEventListener('click', function(e) {
    e.preventDefault();
    overlayDropdown.classList.toggle('active');
  });
  // Optional: close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!overlayDropdown.contains(e.target) && !overlayDropdownToggle.contains(e.target)) {
      overlayDropdown.classList.remove('active');
    }
  });
}

if (hamburger && menuOverlay) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });

  // Close overlay when clicking outside links or pressing Escape
  menuOverlay.addEventListener('click', function(e) {
    if (e.target === menuOverlay) {
      hamburger.classList.remove('active');
      menuOverlay.classList.remove('active');
    }
  });
  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hamburger.classList.remove('active');
      menuOverlay.classList.remove('active');
    }
  });
}
