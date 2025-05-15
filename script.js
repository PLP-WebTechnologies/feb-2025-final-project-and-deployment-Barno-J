// script.js

// Contact form save to localStorage
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.elements[0].value;
  const email = this.elements[1].value;
  const message = this.elements[2].value;

  localStorage.setItem('contactFormData', JSON.stringify({ name, email, message }));
  alert('Thanks for reaching out! We’ll get back to you.');
  this.reset();
});

// Optional: Animate on scroll (CSS class toggling)
window.addEventListener('scroll', function () {
  const tips = document.getElementById('tips');
  if (window.scrollY > 100) {
    tips.style.transition = 'opacity 1s ease-in-out';
    tips.style.opacity = 1;
  }
});

