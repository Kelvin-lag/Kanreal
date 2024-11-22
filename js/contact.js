
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.question');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});


hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
