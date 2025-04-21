// Main JavaScript File

// Translation data
const translations = {
  pl: {
    'home': 'Strona główna',
    'about': 'O nas',
    'hero-title': 'Twoje zdjęcia są częściowo chronione',
    'hero-description': 'Aby dokończyć proces i przywrócić pełny dostęp — aktywuj dostęp premium.',
    'telegram-button': 'Przejdź do Telegram Bota',
    'stat-users': '1,234,567',
    'stat-users-label': 'Użytkowników',
    'stat-photos': '50M+',
    'stat-photos-label': 'Chronionych zdjęć',
    'stat-countries': '180+',
    'stat-countries-label': 'Krajów',
    'stat-satisfaction': '99.9%',
    'stat-satisfaction-label': 'Zadowolonych klientów',
    'features-title': 'Dlaczego warto aktywować pełną ochronę?',
    'security-title': 'Pełne bezpieczeństwo',
    'security-description': 'Chronimy Twoje zdjęcia przed nieautoryzowanym dostępem.',
    'backup-title': 'Kopie zapasowe',
    'backup-description': 'Twoje wspomnienia są zawsze bezpieczne w chmurze.',
    'privacy-title': 'Prywatność',
    'privacy-description': 'Tylko Ty decydujesz, kto ma dostęp do Twoich wspomnień.',
    'cta-title': 'Odzyskaj pełny dostęp już teraz',
    'cta-description': 'Tylko kilka kroków dzieli Cię od pełnej ochrony Twoich wspomnień.',
    'cta-button': 'Aktywuj w Telegram',
    'footer-about': 'O nas',
    'footer-privacy': 'Polityka prywatności',
    'footer-terms': 'Warunki korzystania',
    'footer-rights': 'Wszelkie prawa zastrzeżone.',
    // About page translations
    'about-hero-title': 'O Safe Memories',
    'about-hero-description': 'Safe Memories to serwis zapewniający bezpieczeństwo i ochronę Twoich cyfrowych wspomnień.',
    'about-mission-title': 'Nasza misja',
    'about-mission-p1': 'Safe Memories to serwis, zapewniający bezpieczeństwo i zachowanie Twoich cyfrowych wspomnień. Nasza misja polega na dostarczaniu użytkownikom niezawodnych narzędzi do ochrony osobistych danych i zdjęć.',
    'about-mission-p2': 'Wierzymy, że każde wspomnienie jest bezcenne i zasługuje na najwyższy poziom ochrony. Dlatego stworzyliśmy kompleksowe rozwiązanie, które zabezpiecza Twoje zdjęcia przed nieautoryzowanym dostępem, utratą czy uszkodzeniem.',
    'about-values-title': 'Nasze wartości',
    'about-value-1-title': 'Bezpieczeństwo',
    'about-value-1-desc': 'Wykorzystujemy najnowocześniejsze technologie szyfrowania, aby zapewnić maksymalną ochronę Twoim danym.',
    'about-value-2-title': 'Prywatność',
    'about-value-2-desc': 'Respektujemy Twoją prywatność i nigdy nie udostępniamy Twoich danych osobom trzecim bez Twojej zgody.',
    'about-value-3-title': 'Niezawodność',
    'about-value-3-desc': 'Nasze systemy działają 24/7, zapewniając ciągły dostęp do Twoich zabezpieczonych wspomnień.',
    'about-value-4-title': 'Prostota',
    'about-value-4-desc': 'Oferujemy intuicyjne rozwiązania, które są łatwe w użyciu dla każdego.',
    'contact-title': 'Kontakt',
    'contact-text': 'Masz pytania? Skontaktuj się z nami:',
    'contact-button': 'Telegram Bot'
  },
  en: {
    'home': 'Home',
    'about': 'About',
    'hero-title': 'Your photos are partially protected',
    'hero-description': 'To complete the process and restore full access — activate premium access.',
    'telegram-button': 'Go to Telegram Bot',
    'stat-users': '1,234,567',
    'stat-users-label': 'Users',
    'stat-photos': '50M+',
    'stat-photos-label': 'Protected Photos',
    'stat-countries': '180+',
    'stat-countries-label': 'Countries',
    'stat-satisfaction': '99.9%',
    'stat-satisfaction-label': 'Satisfied Clients',
    'features-title': 'Why activate full protection?',
    'security-title': 'Complete security',
    'security-description': 'We protect your photos from unauthorized access.',
    'backup-title': 'Backup copies',
    'backup-description': 'Your memories are always safe in the cloud.',
    'privacy-title': 'Privacy',
    'privacy-description': 'Only you decide who has access to your memories.',
    'cta-title': 'Regain full access now',
    'cta-description': 'Only a few steps separate you from full protection of your memories.',
    'cta-button': 'Activate in Telegram',
    'footer-about': 'About us',
    'footer-privacy': 'Privacy policy',
    'footer-terms': 'Terms of use',
    'footer-rights': 'All rights reserved.',
    // About page translations
    'about-hero-title': 'About Safe Memories',
    'about-hero-description': 'Safe Memories is a service ensuring the security and protection of your digital memories.',
    'about-mission-title': 'Our mission',
    'about-mission-p1': 'Safe Memories is a service that ensures the security and preservation of your digital memories. Our mission is to provide users with reliable tools to protect personal data and photos.',
    'about-mission-p2': 'We believe that every memory is priceless and deserves the highest level of protection. That\'s why we\'ve created a comprehensive solution that secures your photos against unauthorized access, loss, or damage.',
    'about-values-title': 'Our values',
    'about-value-1-title': 'Security',
    'about-value-1-desc': 'We use the latest encryption technologies to provide maximum protection for your data.',
    'about-value-2-title': 'Privacy',
    'about-value-2-desc': 'We respect your privacy and never share your data with third parties without your consent.',
    'about-value-3-title': 'Reliability',
    'about-value-3-desc': 'Our systems operate 24/7, providing continuous access to your secured memories.',
    'about-value-4-title': 'Simplicity',
    'about-value-4-desc': 'We offer intuitive solutions that are easy to use for everyone.',
    'contact-title': 'Contact',
    'contact-text': 'Have questions? Contact us:',
    'contact-button': 'Telegram Bot'
  }
};

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');
const languageToggle = document.getElementById('languageToggle');
const header = document.getElementById('header');
const telegramButtons = document.querySelectorAll('a[href*="telegram"]');

// Initialize language
let currentLang = localStorage.getItem('language') || 'pl';
document.documentElement.lang = currentLang;
languageToggle.textContent = currentLang === 'pl' ? 'EN' : 'PL';

// Apply translations on page load
applyTranslations();

// Toggle mobile menu
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });
}

// Language switching
if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    localStorage.setItem('language', currentLang);
    document.documentElement.lang = currentLang;
    languageToggle.textContent = currentLang === 'pl' ? 'EN' : 'PL';
    applyTranslations();
    updatePageTitle();
  });
}

// Statistics animation
function animateStatistics() {
  const statistics = document.querySelectorAll('.statistic__number');
  let animated = false;

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function animateValue(element, start, endStr, duration) {
    const match = endStr.match(/^([\d,.]+)([^\d]*)$/);
    if (!match) return;
  
    const [ , numberPart, suffix ] = match;
    const numericEnd = parseFloat(numberPart.replace(/,/g, ''));
  
    const isFloat = numberPart.includes('.');
    const startTimestamp = performance.now();
  
    function step(timestamp) {
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const currentValue = start + (numericEnd - start) * easeProgress;
  
      const formattedNumber = isFloat
        ? Number(currentValue).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
        : Math.round(currentValue).toLocaleString();
  
      element.textContent = formattedNumber + suffix;
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }

  function startAnimation() {
    const section = document.querySelector('.statistics');
    if (!animated && isElementInViewport(section)) {
      statistics.forEach(stat => {
        const endValue = stat.textContent.trim();
        stat.textContent = '0';
        animateValue(stat, 0, endValue, 2000);
      });
      animated = true;
      window.removeEventListener('scroll', startAnimation);
    }
  }

  window.addEventListener('scroll', startAnimation);
  startAnimation(); // Проверка при загрузке
}

// Apply translations to all elements
function applyTranslations() {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLang][key];
      } else {
        element.textContent = translations[currentLang][key];
      }
    }
  });
}

// Update page title based on current language
function updatePageTitle() {
  if (document.title.includes('Safe Memories')) {
    if (currentLang === 'pl') {
      if (window.location.pathname.includes('about')) {
        document.title = 'O nas - Safe Memories';
      } else {
        document.title = 'Safe Memories - Ochrona Twoich Wspomnień';
      }
    } else {
      if (window.location.pathname.includes('about')) {
        document.title = 'About Us - Safe Memories';
      } else {
        document.title = 'Safe Memories - Protect Your Memories';
      }
    }
  }
}

// Scrolling header effect
function handleScroll() {
  if (window.scrollY > 50) {
    header.style.boxShadow = 'var(--shadow-md)';
  } else {
    header.style.boxShadow = 'var(--shadow-sm)';
  }
}

window.addEventListener('scroll', handleScroll);

// Add animations to Telegram buttons
telegramButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'translateY(-5px)';
    button.style.boxShadow = 'var(--shadow-lg)';
  });
  
  button.addEventListener('mouseout', () => {
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '';
  });
  
  button.addEventListener('click', () => {
    console.log('Telegram button clicked');
  });
});

// Image carousel functionality
function setupCarousel() {
  const carouselItems = document.querySelectorAll('.hero__carousel-item');
  if (!carouselItems.length) return; // Exit if no carousel items exist

  let currentIndex = 0;

  function showNextSlide() {
    carouselItems[currentIndex].classList.remove('active');
    carouselItems[currentIndex].classList.add('exit');

    currentIndex = (currentIndex + 1) % carouselItems.length;

    setTimeout(() => {
      carouselItems.forEach(item => item.classList.remove('exit'));
    }, 600);

    carouselItems[currentIndex].classList.add('active');
  }

  setInterval(showNextSlide, 3000);
}

// Add smooth reveal animations to sections
function revealSections() {
  if (!document.getElementById('reveal-animation-style')) {
    const style = document.createElement('style');
    style.id = 'reveal-animation-style';
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  }
  
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.classList.add('reveal');
    setTimeout(() => {
      section.classList.add('active');
    }, 200 * (index + 1));
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  revealSections();
  applyTranslations();
  setupCarousel();
  animateStatistics();
});



