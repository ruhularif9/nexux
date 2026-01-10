// ================= UI BEHAVIORS: Modal, Smooth Scroll, Back-to-top, Small Enhancements =================

// Modal (Get Started)
const modal = document.getElementById('modal');
const getStartedBtns = document.querySelectorAll('.get-started-btn');
const modalClose = document.querySelector('.modal-close');

function openModal() {
  if (!modal) return;
  modal.classList.add('active');
  // prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

getStartedBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });
});

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Smooth scroll for same-page anchors
document.addEventListener('click', function (e) {
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if (href.startsWith('#')) {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

// Back to top behavior
const backToTop = document.querySelector('.back-to-top');
function updateBackToTop() {
  if (!backToTop) return;
  if (window.scrollY > 400) {
    backToTop.style.opacity = '1';
    backToTop.style.pointerEvents = 'auto';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.pointerEvents = 'none';
  }
}

window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();

if (backToTop) {
  backToTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Small intersection observer to add .in-view for animated sections
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.feature-card, .benefit-card, .testimonial, .step, .pricing-card').forEach(el => io.observe(el));

// Keep header small on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 20) header.classList.add('scrolled'); else header.classList.remove('scrolled');
}, { passive: true });

// End of main UI script


