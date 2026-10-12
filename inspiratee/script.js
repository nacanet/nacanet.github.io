const T = {
  es: {
    title: 'Inspiratee — Camisetas para respirar',
    description: 'Inspiratee: camisetas con mensajes de calma y atención plena. Respira en paz, exhala tensión. Tienda online en construcción.',
    skip: 'Saltar al contenido',
    'hero.kicker': 'Inspiratee · camisetas para respirar',
    'hero.in': 'Respira<br>en paz.',
    'hero.out': 'Exhala<br>tensión.',
    'hero.lead': 'Camisetas con mensajes de calma y atención plena, para volver al presente cada vez que te las pongas.',
    'tone.label': 'Color',
    'lau.title': 'Los diseños, a secar al sol.',
    'lau.sub': 'Cuelgan de la cuerda. Desliza para verlos todos.',
    'lau.c1': 'el diseño de las camisetas',
    'lau.c2': 'ilustración',
    'lau.c3': 'ilustración',
    'lau.c4': 'en uso',
    'shop.kicker': 'Detrás de la marca',
    'shop.title': 'Y una tienda hecha a medida, sin prisas.',
    'sh1.t': 'Catálogo', 'sh1.d': 'Producto por color, con selector de talla.',
    'sh2.t': 'Carrito', 'sh2.d': 'Se guarda aunque cierres la pestaña.',
    'sh3.t': 'Compra en pasos', 'sh3.d': 'Un proceso corto y claro, pensado para móvil.',
    'sh4.t': 'Boletín', 'sh4.d': 'Para avisar de cada lanzamiento.',
    'shop.stamp': 'En construcción',
    'shop.stamp2': 'los pagos llegan en la siguiente fase',
    'not.title': 'Avísame cuando abra.',
    'not.d': 'Escríbenos y te contamos cuando la colección esté disponible.',
    'not.btn': 'Quiero que me avisen',
    'cta.docs': 'Leer el README (ES / EN)',
    'foot.l': 'Un producto de <a href="../">nacanet</a>',
    tones: { salvia: 'Salvia', arena: 'Arena', crema: 'Crema', blanco: 'Blanco' },
    alt: (n) => `Camiseta Inspiratee «breathe in peace, breathe out tension» en color ${n}`,
  },
  en: {
    title: 'Inspiratee — T-shirts to breathe in',
    description: 'Inspiratee: t-shirts with messages of calm and mindfulness. Breathe in peace, breathe out tension. Online shop under construction.',
    skip: 'Skip to content',
    'hero.kicker': 'Inspiratee · t-shirts to breathe in',
    'hero.in': 'Breathe<br>in peace.',
    'hero.out': 'Breathe<br>out tension.',
    'hero.lead': 'T-shirts with messages of calm and mindfulness, to bring you back to the present every time you put one on.',
    'tone.label': 'Colour',
    'lau.title': 'The designs, drying in the sun.',
    'lau.sub': 'They hang from the line. Slide to see them all.',
    'lau.c1': 'the t-shirt design',
    'lau.c2': 'illustration',
    'lau.c3': 'illustration',
    'lau.c4': 'worn',
    'shop.kicker': 'Behind the brand',
    'shop.title': 'And a custom-built shop, in no hurry.',
    'sh1.t': 'Catalogue', 'sh1.d': 'Products by colour, with a size selector.',
    'sh2.t': 'Cart', 'sh2.d': 'It stays saved even if you close the tab.',
    'sh3.t': 'Step-by-step checkout', 'sh3.d': 'A short, clear process designed for mobile.',
    'sh4.t': 'Newsletter', 'sh4.d': 'To announce every launch.',
    'shop.stamp': 'Under construction',
    'shop.stamp2': 'payments arrive in the next phase',
    'not.title': 'Let me know when it opens.',
    'not.d': 'Write to us and we will tell you when the collection is available.',
    'not.btn': 'Keep me posted',
    'cta.docs': 'Read the README (ES / EN)',
    'foot.l': 'A product by <a href="../">nacanet</a>',
    tones: { salvia: 'Sage', arena: 'Sand', crema: 'Cream', blanco: 'White' },
    alt: (n) => `Inspiratee “breathe in peace, breathe out tension” t-shirt in ${n}`,
  },
};
const THEME_COLORS = { salvia: '#dbe5d1', arena: '#eadfc8', crema: '#f4eddd', blanco: '#edf2f1' };
const ORDER = ['salvia', 'arena', 'crema', 'blanco'];

let lang = localStorage.getItem('lang') || (navigator.language.startsWith('es') ? 'es' : 'en');
let tone = 'salvia';

const root = document.documentElement;
const tag = document.querySelector('.tag');

function renderTone(swing) {
  const d = T[lang];
  const name = d.tones[tone];
  root.dataset.tone = tone;
  document.querySelector('meta[name="theme-color"]').setAttribute('content', THEME_COLORS[tone]);
  document.getElementById('tone-name').textContent = name;
  document.getElementById('tag-name').textContent = name;
  document.querySelectorAll('.swatches button').forEach((b) => {
    b.setAttribute('aria-checked', b.dataset.tone === tone ? 'true' : 'false');
    b.setAttribute('aria-label', d.tones[b.dataset.tone]);
    b.tabIndex = b.dataset.tone === tone ? 0 : -1;
  });
  document.querySelectorAll('.shot').forEach((img) => {
    const on = img.dataset.tone === tone;
    img.classList.toggle('is-on', on);
    img.alt = on ? d.alt(name) : '';
    if (on) img.loading = 'eager';
  });
  if (swing) {
    tag.classList.remove('swing');
    void tag.offsetWidth;
    tag.classList.add('swing');
  }
}

function applyLang(l) {
  lang = l;
  const d = T[l];
  root.lang = l;
  document.title = d.title;
  document.querySelector('meta[name="description"]').setAttribute('content', d.description);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.dataset.i18n;
    if (typeof d[k] === 'string') el.innerHTML = d[k];
  });
  document.getElementById('lang-label').textContent = l === 'es' ? 'EN' : 'ES';
  localStorage.setItem('lang', l);
  renderTone(false);
}

document.getElementById('lang-toggle').addEventListener('click', () => applyLang(lang === 'es' ? 'en' : 'es'));

const group = document.querySelector('.swatches');
group.addEventListener('click', (e) => {
  const b = e.target.closest('button[data-tone]');
  if (!b || b.dataset.tone === tone) return;
  tone = b.dataset.tone;
  renderTone(true);
});
group.addEventListener('keydown', (e) => {
  const i = ORDER.indexOf(tone);
  let n = null;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = ORDER[(i + 1) % ORDER.length];
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = ORDER[(i + ORDER.length - 1) % ORDER.length];
  if (!n) return;
  e.preventDefault();
  tone = n;
  renderTone(true);
  group.querySelector(`[data-tone="${n}"]`).focus();
});

applyLang(lang);
