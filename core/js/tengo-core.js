/**
 * ==========================================================================
 * TENGO WEB — CORE JAVASCRIPT (tengo-core.js)
 * Lógica modular nativa sin dependencias pesadas.
 * Diseñar – Diseño gráfico y web (Río Tercero, Cba)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initScrollSpy();
  initScrollAnimations();
  initCategoryTabs();
  initWhatsAppForms();
});

/**
 * 1. Sticky Header con efecto scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.tw-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Menú de navegación móvil y cierre automático al cliquear enlaces
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.tw-mobile-toggle');
  const navCollapse = document.querySelector('.tw-nav-collapse');
  if (!toggleBtn || !navCollapse) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navCollapse.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
    }
  });

  // Cerrar menú al hacer clic en un enlace de ancla
  navCollapse.querySelectorAll('.tw-nav-link, .tw-btn').forEach(link => {
    link.addEventListener('click', () => {
      navCollapse.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'bi bi-list';
    });
  });
}

/**
 * 3. ScrollSpy con IntersectionObserver (Resalta el enlace activo según la sección)
 */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.tw-nav-link[href^="#"]');
  const sections = [];

  navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      sections.push({ section, link });
    }
  });

  if (sections.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(l => {
          if (l.getAttribute('href') === `#${activeId}`) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(item => observer.observe(item.section));
}

/**
 * 4. Animaciones de entrada al hacer scroll (Scroll Reveal nativo)
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-tw-animate]');
  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animated');
        obs.unobserve(entry.target); // Se anima una sola vez
      }
    });
  }, {
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * 5. Pestañas de Filtrado de Categorías (Estilo Catálogo Savora)
 */
function initCategoryTabs() {
  const tabContainers = document.querySelectorAll('[data-tw-tabs]');
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tw-cat-tab-btn');
    const targetSelector = container.getAttribute('data-tw-target');
    const targetGrid = document.querySelector(targetSelector);
    if (!targetGrid) return;

    const items = targetGrid.querySelectorAll('[data-category]');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        items.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (filter === 'all' || itemCat === filter) {
            item.style.display = '';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  });
}

/**
 * 6. Formularios con envío directo a WhatsApp
 * Atributo: data-tw-wa-form="5493571XXXXXX"
 */
function initWhatsAppForms() {
  const forms = document.querySelectorAll('[data-tw-wa-form]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = form.getAttribute('data-tw-wa-form') || '5493571000000';
      const nameInput = form.querySelector('[name="nombre"]');
      const topicInput = form.querySelector('[name="asunto"], [name="rubro"]');
      const messageInput = form.querySelector('[name="mensaje"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const topic = topicInput ? topicInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      let text = `*Consulta desde Tengo Web*\n\n`;
      if (name) text += `*Nombre / Negocio:* ${name}\n`;
      if (topic) text += `*Rubro o Actividad:* ${topic}\n`;
      if (message) text += `*¿Qué hacés o necesitás mostrar?:* ${message}\n`;

      const encodedText = encodeURIComponent(text);
      const waUrl = `https://wa.me/${phone}?text=${encodedText}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  });
}
