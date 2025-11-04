AOS.init({ once: true, duration: 1000 });


new Typed('#typed', {
  strings: ['Sowjanya', 'a Developer', 'an ML Enthusiast'],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});
new Typed('#typed-about', {
  strings: ['About Me'],
  typeSpeed: 100,
  showCursor: false
});
new Typed('#typed-projects', {
  strings: ['Projects'],
  typeSpeed: 100,
  showCursor: false
});
new Typed('#typed-contact', {
  strings: ['Contact Me'],
  typeSpeed: 100,
  showCursor: false
});

document.getElementById('toggle-theme').addEventListener('click', (event) => {
  document.documentElement.classList.toggle('dark');
  event.target.textContent = document.documentElement.classList.contains('dark') ? '☀' : '🌙';
});

document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.remove('hidden');
});
document.getElementById('close-menu').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.add('hidden');
});
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
    },
  });
});

const colorPicker = document.getElementById('theme-picker');
const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');
const timelineStroke = document.getElementById('timeline-stroke');

colorPicker.addEventListener('input', (e) => {
  const color = e.target.value;
  const darkerColor = shadeColor(color, -20);

  document.documentElement.style.setProperty('--theme-color', color);

  navbar.style.backgroundImage = `linear-gradient(to right, ${color}, ${darkerColor})`;
  footer.style.backgroundImage = `linear-gradient(to right, ${color}, ${darkerColor})`;

  document.querySelectorAll('.typed-highlight').forEach(el => el.style.color = color);
  document.querySelectorAll('.edu-institute').forEach(el => el.style.color = color);

  timelineStroke.setAttribute('stroke', color);
});

function shadeColor(color, percent) {
  const num = parseInt(color.slice(1), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = (num >> 8 & 0x00FF) + amt,
        B = (num & 0x0000FF) + amt;

  return "#" + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.getElementById('view-more-btn').addEventListener('click', function () {
  const moreProjects = document.getElementById('more-projects');
  if (moreProjects.classList.contains('hidden')) {
    moreProjects.classList.remove('hidden');
    this.textContent = 'View Less';
  } else {
    moreProjects.classList.add('hidden');
    this.textContent = 'View More';
  }
});
