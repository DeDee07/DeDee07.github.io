const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  });

  form.addEventListener('submit', (e) => {
    if (!email.value.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      e.preventDefault();
    }
  });
  
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('open');
  });
  