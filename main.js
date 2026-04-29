/* =============================================
   MG Glamour Nails — Scripts
   main.js
   ============================================= */

// ---- Cursor personalizado ----
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform  = 'translate(-50%,-50%) scale(2)';
    cursor.style.background = 'var(--gold)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform  = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = 'var(--purple)';
  });
});

// ---- Navbar al hacer scroll ----
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Animaciones fade-up al entrar en viewport ----
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
