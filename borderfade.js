  const toggleBtn = document.getElementById('menuToggle');
  const menu = document.querySelector('.menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggleBtn.classList.toggle('no-border');
  }
);
