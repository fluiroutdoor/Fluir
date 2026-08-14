// ---------- Mobile nav toggle ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // ---------- Servicios: filter tabs ----------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');
  if (filterBtns.length && cards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        cards.forEach(card => {
          const show = cat === 'todas' || card.dataset.category === cat;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // ---------- Contacto: form submit feedback ----------
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.getElementById('form-success');
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
    });
  }
});
