window.tailwind = window.tailwind || {};
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4DA2FF',
        secondary: '#7CEEFF',
        tertiary: '#ffb961',
        background: '#07111F',
        surface: '#07111F',
        'surface-dim': '#101419',
        'surface-container': '#1c2026',
        'surface-container-low': '#181c21',
        'surface-container-high': '#272a30',
        'surface-container-highest': '#31353b',
        'surface-variant': '#31353b',
        'on-surface': '#e0e2ea',
        'on-surface-variant': '#c0c7d4',
        outline: '#8a919d',
        'outline-variant': '#404752',
        'on-primary': '#00315c',
        'on-secondary': '#00363d',
        'inverse-surface': '#e0e2ea',
        'inverse-primary': '#0060aa',
        'primary-container': '#4da2ff',
        'secondary-container': '#0d9faf',
        'tertiary-fixed': '#ffddb8',
        'tertiary-fixed-dim': '#ffb961',
        'secondary-fixed-dim': '#62d6e7',
        error: '#ffb4ab',
        'error-container': '#93000a',
        'on-error': '#690005'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        'container-max': '1440px',
        gutter: '24px',
        unit: '4px',
        'margin-mobile': '16px',
        'margin-desktop': '48px'
      },
      maxWidth: {
        'container-max': '1440px'
      },
      padding: {
        'margin-mobile': '16px',
        'margin-desktop': '48px'
      },
      margin: {
        'margin-mobile': '16px',
        'margin-desktop': '48px'
      },
      gap: {
        gutter: '24px'
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-lg-mobile': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '600' }]
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-page]').forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });

  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-nav');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu?.classList.add('hidden');
    });
  });

  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookies = document.getElementById('accept-cookies');
  const dismissCookies = document.getElementById('dismiss-cookies');

  if (cookieBanner) {
    if (localStorage.getItem('sidmiai_cookies_accepted')) {
      cookieBanner.style.display = 'none';
    } else {
      acceptCookies?.addEventListener('click', function () {
        localStorage.setItem('sidmiai_cookies_accepted', 'true');
        cookieBanner.style.transform = 'translateY(150%)';
        setTimeout(() => cookieBanner.style.display = 'none', 500);
      });
      dismissCookies?.addEventListener('click', function () {
        localStorage.setItem('sidmiai_cookies_accepted', 'false');
        cookieBanner.style.transform = 'translateY(150%)';
        setTimeout(() => cookieBanner.style.display = 'none', 500);
      });
    }
  }
});
