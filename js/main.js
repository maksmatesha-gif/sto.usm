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
document.querySelectorAll('form[data-form]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    form.reset();
  });
});

// ===== SCROLL REVEAL (Intersection Observer) =====
const revealElements = document.querySelectorAll('.card, .feature, .step, .gallery-item, .section-title, .section-desc, .cta-strip');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseInt(el.getAttribute('data-delay')) || 0;
      setTimeout(() => {
        el.classList.add('visible');
      }, delay);
      // Для step используем отдельный класс
      if (el.classList.contains('step')) {
        el.classList.add('visible');
      }
      // Для карточек и фич также добавляем visible для анимации
      if (el.classList.contains('card') || el.classList.contains('feature') || el.classList.contains('gallery-item')) {
        el.classList.add('visible');
      }
      // Заголовки и описания
      if (el.classList.contains('section-title') || el.classList.contains('section-desc')) {
        el.classList.add('visible');
      }
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== PROCESS LINE ANIMATION =====
const stepsLine = document.querySelector('.steps-line');
if (stepsLine) {
  const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stepsLine.classList.add('drawn');
        lineObserver.unobserve(stepsLine);
      }
    });
  }, { threshold: 0.5 });
  lineObserver.observe(stepsLine);
}

// ===== COUNTER ANIMATION (for stats) =====
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = parseInt(target.getAttribute('data-count'));
      let current = 0;
      const increment = Math.ceil(count / 60); // 60 steps over ~1s
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

// ===== PARALLAX FOR HERO IMAGE =====
const heroVisual = document.getElementById('hero-visual');
if (heroVisual) {
  document.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroVisual.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
  });
}

// ===== AMERICAN CARS BRAND INTERACTION =====
const brandChips = document.querySelectorAll('.brand-chip');
const brandDesc = document.getElementById('brand-desc');
const brandInfo = {
  chevrolet: 'Chevrolet: диагностика, ремонт двигателей, подвески, коробок передач. Оригинальные запчасти.',
  ford: 'Ford: полный спектр услуг, включая ремонт турбированных двигателей и трансмиссий.',
  cadillac: 'Cadillac: обслуживание премиальных моделей, электронных систем и адаптивной подвески.',
  buick: 'Buick: ремонт и ТО, работа с V6 и V8 двигателями, системой охлаждения.',
  dodge: 'Dodge: мощные двигатели, ремонт ходовой, тормозной системы, замена масел.',
  jeep: 'Jeep: внедорожная подготовка, ремонт подвески, рулевого управления, дифференциалов.',
  gmc: 'GMC: ремонт пикапов и SUV, обслуживание дизельных двигателей, трансмиссий.',
  lincoln: 'Lincoln: комфортные седаны, диагностика электроники, климат-контроля, пневмоподвески.'
};
brandChips.forEach(chip => {
  chip.addEventListener('mouseenter', () => {
    const brand = chip.getAttribute('data-brand');
    if (brand && brandInfo[brand]) {
      brandDesc.textContent = brandInfo[brand];
    } else {
      brandDesc.textContent = 'Наведите на марку, чтобы увидеть информацию';
    }
  });
  chip.addEventListener('mouseleave', () => {
    brandDesc.textContent = 'Наведите на марку, чтобы увидеть информацию';
  });
});

// ===== PREFERS REDUCED MOTION =====
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (motionQuery.matches) {
  document.querySelectorAll('.glow-border').forEach(el => {
    el.style.animation = 'none';
    el.style.transition = 'none';
  });
}