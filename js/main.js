// Mobile menu
document.querySelectorAll('.menu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('mobile-nav')?.classList.add('open');
  });
});
document.querySelectorAll('.mobile-nav .close, .mobile-nav a').forEach(el => {
  el.addEventListener('click', () => {
    document.getElementById('mobile-nav')?.classList.remove('open');
  });
});

// Forms
document.querySelectorAll('form[data-form], form.form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    form.reset();
  });
});

// Scroll reveal (lightweight)
const revealElements = document.querySelectorAll('.card, .feature, .step, .gallery-item, .card-with-img');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(el => revealObserver.observe(el));
}
