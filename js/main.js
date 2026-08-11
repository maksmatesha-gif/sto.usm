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
