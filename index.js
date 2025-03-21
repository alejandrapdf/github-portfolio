/* Back-to-top button controls */
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    const show = window.scrollY > 700;
    Object.assign(backToTopButton.style, {
      visibility: show ? 'visible' : 'hidden',
      opacity: show ? '1' : '0',
      transform: show ? 'scale(1)' : 'scale(0)'
    });
  });
});

/* keyboard tabbing */
window.addEventListener('keydown', function handleKeyDown(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', () => {
      document.body.classList.remove('user-is-tabbing');
      window.addEventListener('keydown', handleKeyDown, { once: true });
    }, { once: true });
  }
}, { once: true });