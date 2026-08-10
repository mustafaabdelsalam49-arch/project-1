
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileMenu');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');

    function openMobileNav() {
      mobileNav?.classList.add('active');
      mobileNavOverlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
      mobileNav?.classList.remove('active');
      mobileNavOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    }

    menuToggle?.addEventListener('click', openMobileNav);
    mobileNavClose?.addEventListener('click', closeMobileNav);
    mobileNavOverlay?.addEventListener('click', closeMobileNav);

    // Scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  