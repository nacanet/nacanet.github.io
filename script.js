const translations = {
  es: {
    title: 'nacanet — Desarrollador fullstack',
    description: 'Desarrollador fullstack. React, Python, PHP, WordPress, extensiones de navegador y más.',
    'nav.proyectos': 'proyectos',
    'nav.stack': 'stack',
    'nav.contacto': 'contacto',
    'hero.tag': 'disponible para proyectos',
    'hero.title': 'Desarrollador<br>fullstack',
    'hero.desc': 'Diseño y construyo productos digitales completos — desde la base de datos hasta la interfaz. Especializado en inteligencia artificial: avatares, agentes, automatizaciones e integraciones. React, Python, PHP, WordPress y lo que haga falta.',
    'hero.btnPrimary': 'ver proyectos',
    'hero.btnSecondary': 'contactar',
    'proyectos.label': 'proyectos',
    'proyectos.title': 'Trabajo reciente',
    'proyectos.sub': 'Algunas de las cosas que he construido — apps, extensiones, plugins, plataformas y más.',
    'card1.tag': 'IA · agentes',
    'card1.title': 'Soluciones con IA',
    'card1.desc': 'Avatares con IA, agentes conversacionales, automatizaciones e integraciones con modelos de lenguaje.',
    'card2.tag': 'extensión · Chrome',
    'card2.desc': 'Extensión de navegador para gestión del flujo de trabajo y productividad. JS + manifest v3.',
    'card3.tag': 'plataforma · fullstack',
    'card3.desc': 'Plataforma completa con backend en Node.js, API REST y frontend para creadores y diseñadores.',
    'card4.tag': 'plugin · WordPress',
    'card4.desc': 'Plugin PHP para WordPress con integración completa de pagos via Stripe API.',
    'card.viewProject': 'ver proyecto <i class="ti ti-arrow-up-right"></i>',
    'stack.label': 'tecnologías',
    'stack.title': 'Stack completo',
    'stack.sub': 'Trabajo en toda la pila — frontend, backend, bases de datos, integraciones y automatizaciones.',
    'contacto.label': 'contacto',
    'contacto.title': 'Hablemos',
    'contacto.sendEmail': 'enviar email <i class="ti ti-arrow-right"></i>',
    'footer.rights': '© 2026 — todos los derechos reservados',
  },
  en: {
    title: 'nacanet — Fullstack developer',
    description: 'Fullstack developer. React, Python, PHP, WordPress, browser extensions and more.',
    'nav.proyectos': 'projects',
    'nav.stack': 'stack',
    'nav.contacto': 'contact',
    'hero.tag': 'available for projects',
    'hero.title': 'Fullstack<br>developer',
    'hero.desc': 'I design and build complete digital products — from the database to the interface. Specialized in artificial intelligence: avatars, agents, automations and integrations. React, Python, PHP, WordPress and whatever it takes.',
    'hero.btnPrimary': 'view projects',
    'hero.btnSecondary': 'get in touch',
    'proyectos.label': 'projects',
    'proyectos.title': 'Recent work',
    'proyectos.sub': 'Some of the things I have built — apps, extensions, plugins, platforms and more.',
    'card1.tag': 'AI · agents',
    'card1.title': 'AI solutions',
    'card1.desc': 'AI avatars, conversational agents, automations and integrations with language models.',
    'card2.tag': 'extension · Chrome',
    'card2.desc': 'Browser extension for workflow management and productivity. JS + manifest v3.',
    'card3.tag': 'platform · fullstack',
    'card3.desc': 'Full platform with a Node.js backend, REST API and frontend for creators and designers.',
    'card4.tag': 'plugin · WordPress',
    'card4.desc': 'PHP plugin for WordPress with full payment integration via the Stripe API.',
    'card.viewProject': 'view project <i class="ti ti-arrow-up-right"></i>',
    'stack.label': 'technologies',
    'stack.title': 'Full stack',
    'stack.sub': 'I work across the whole stack — frontend, backend, databases, integrations and automations.',
    'contacto.label': 'contact',
    'contacto.title': "Let's talk",
    'contacto.sendEmail': 'send email <i class="ti ti-arrow-right"></i>',
    'footer.rights': '© 2026 — all rights reserved',
  },
};

const langLabel = document.getElementById('lang-label');
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = dict.title;
  document.querySelector('meta[name="description"]').setAttribute('content', dict.description);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
  langToggle.setAttribute('aria-label', lang === 'es' ? 'Change to English' : 'Cambiar a español');
  localStorage.setItem('lang', lang);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'light' ? 'ti ti-moon' : 'ti ti-sun';
  themeToggle.setAttribute('aria-label', theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
  localStorage.setItem('theme', theme);
}

const initialLang = localStorage.getItem('lang') || (navigator.language.startsWith('es') ? 'es' : 'en');
applyLanguage(initialLang);

const initialTheme = document.documentElement.getAttribute('data-theme') || 'dark';
applyTheme(initialTheme);

langToggle.addEventListener('click', () => {
  const current = document.documentElement.lang === 'es' ? 'en' : 'es';
  applyLanguage(current);
});

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(current);
});
