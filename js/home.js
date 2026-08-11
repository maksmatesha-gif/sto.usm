// ===== MOBILE MENU =====
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

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = parseInt(target.getAttribute('data-count'));
      let current = 0;
      const increment = Math.ceil(count / 60);
      const timer = setInterval(() => {
        current += increment;
        if (current >= count) {
          target.textContent = count;
          clearInterval(timer);
        } else {
          target.textContent = current;
        }
      }, 16);
      counterObserver.unobserve(target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ===== PARALLAX HERO IMAGE =====
const heroVisual = document.getElementById('hero-visual');
if (heroVisual) {
  document.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroVisual.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
  });
}

// ===== MODAL WINDOW =====
const modal = document.getElementById('modal');
const openBtns = document.querySelectorAll('#cta-open-modal, #cta-open-modal-2');
const closeBtn = document.getElementById('modal-close');

openBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('open');
  });
});
closeBtn.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

// ===== FORM SUBMIT =====
document.getElementById('modal-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  this.reset();
  modal.classList.remove('open');
});

// ===== PREFERS REDUCED MOTION =====
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.hero-visual, .gallery-item, .brand-chip').forEach(el => {
    el.style.transition = 'none';
    el.style.animation = 'none';
  });
}