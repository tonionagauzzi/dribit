document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  // Sticky header shadow on scroll
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('header--scrolled', window.scrollY > 10);
    });
  }

  if (hamburger && nav) {
    // Hamburger menu toggle
    const closeMenu = () => {
      hamburger.classList.remove('header__hamburger--open');
      nav.classList.remove('header__nav--open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'メニューを開く');
    };

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('header__hamburger--open');
      nav.classList.toggle('header__nav--open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    });

    // Close menu on nav link click
    nav.querySelectorAll('.header__nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
        closeMenu();
        hamburger.focus();
      }
    });
  }
});
