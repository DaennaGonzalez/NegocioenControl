function hydrateSharedShell() {
  const page = document.body.dataset.page || "inicio";
  const headerMount = document.querySelector("[data-site-header]");
  const footerMount = document.querySelector("[data-site-footer]");
  const whatsappMount = document.querySelector("[data-whatsapp-float]");

  const navItems = [
    ["inicio", "Inicio", "index.html"],
    ["sistemas", "Sistemas", "sistemas.html"],
    ["paginasweb", "Páginas web", "paginasweb.html"],
    ["publicidad", "Publicidad y redes", "publicidad.html"],
    ["testimonios", "Testimonios", "testimonios.html"],
    ["analisis", "Análisis gratis", "analisis.html"],
    ["planes", "Planes", "planes.html"],
    ["soporte", "Soporte", "soporte.html"],
    ["blog", "Blog", "blog.html"],
    ["contacto", "Contacto", "contacto.html"]
  ];

  if (headerMount) {
    headerMount.innerHTML = `
      <header class="site-header">
        <nav class="navbar" aria-label="Menú principal">
          <a class="brand brand-image" href="index.html" aria-label="Negocio en Control">
            <img src="imgs/icono-horizontal-contexto.webp" alt="Negocio en Control" />
          </a>
          <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-controls="main-menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <div class="nav-panel" id="main-menu">
            ${navItems.map(([key, label, href]) => `<a class="${page === key ? "active" : ""}" href="${href}">${label}</a>`).join("")}
            <a class="nav-cta" href="analisis.html">
              <img class="nav-robot" src="imgs/robot-senalderecha.webp" alt="" />
              <span>Solicitar análisis</span>
            </a>
          </div>
        </nav>
      </header>
    `;
  }

  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div>
            <img class="footer-logo" src="imgs/icono-horizontal-contexto.webp" alt="Negocio en Control" />
            <p>Tu negocio más organizado, más visible y más fácil de controlar.</p>
            <div class="social-row">
              <a href="https://wa.me/528116718765" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="imgs/icono-whatsapp.png" alt="" /></a>
              <a href="mailto:daenna2001@gmail.com" aria-label="Correo"><img src="imgs/icono-gmail.png" alt="" /></a>
              <a href="https://facebook.com/negocioencontrol" target="_blank" rel="noopener" aria-label="Facebook"><img src="imgs/icono-facebook.png" alt="" /></a>
            </div>
          </div>
          <div>
            <h3>Menú</h3>
            <a href="index.html">Inicio</a>
            <a href="sistemas.html">Sistemas</a>
            <a href="paginasweb.html">Páginas web</a>
            <a href="publicidad.html">Publicidad</a>
            <a href="contacto.html">Contacto</a>
          </div>
          <div>
            <h3>Servicios</h3>
            <a href="analisis.html">Análisis gratis</a>
            <a href="planes.html">Planes</a>
            <a href="soporte.html">Soporte</a>
            <a href="blog.html">Blog</a>
          </div>
          <div>
            <h3>Contacto</h3>
            <p>Daenna González</p>
            <a href="https://wa.me/528116718765" target="_blank" rel="noopener">+52 8116718765</a>
            <a href="mailto:daenna2001@gmail.com">daenna2001@gmail.com</a>
            <p>Monterrey, Nuevo León</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Negocio en Control. Todos los derechos reservados.</p>
        </div>
      </footer>
    `;
  }

  if (whatsappMount) {
    whatsappMount.innerHTML = `
      <a class="whatsapp-float" href="https://wa.me/528116718765" target="_blank" rel="noopener" aria-label="Solicitar análisis por WhatsApp">
        <img src="imgs/icono-whatsapp.png" alt="" />
        <span>Solicitar análisis</span>
      </a>
    `;
  }
}

hydrateSharedShell();

const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

const carousel = document.querySelector("#heroCarousel");
const slideKicker = document.querySelector("#slideKicker");
const slideTitle = document.querySelector("#slideTitle");
const slideDescription = document.querySelector("#slideDescription");
const slidePerson = document.querySelector("#slidePerson");
const slideShotOne = document.querySelector("#slideShotOne");
const slideShotTwo = document.querySelector("#slideShotTwo");
const slideShotThree = document.querySelector("#slideShotThree");
const slideNoticeOne = document.querySelector("#slideNoticeOne");
const slideNoticeTwo = document.querySelector("#slideNoticeTwo");
const dots = document.querySelectorAll(".dot");

const slides = [
  {
    kicker: "Control empresarial",
    title: 'Controla <span>ventas</span>, <span>clientes</span> y pendientes desde una sola pantalla.',
    description: "Ideal para negocios que quieren ver lo importante sin revisar libretas, mensajes o archivos sueltos.",
    person: "imgs/persona-corporativo.webp",
    alt: "Persona corporativa usando sistema digital",
    shots: ["imgs/software-empresarial-vista1.webp", "imgs/software-empresarial-vista2.webp", "imgs/software-empresarial-vista3.webp"],
    notices: ["imgs/software-empresarial-notificacion1.webp", "imgs/software-empresarial-notificacion2.webp"]
  },
  {
    kicker: "Abarrotes y tiendas",
    title: 'Vende, registra y organiza tu <span>tienda</span> sin perder el control.',
    description: "Controla ventas, productos, pagos y reportes de forma más sencilla.",
    person: "imgs/persona-abarrotes.webp",
    alt: "Persona atendiendo tienda de abarrotes",
    shots: ["imgs/software-abarrotes-vista1.webp", "imgs/software-abarrotes-vista2.webp", "imgs/software-abarrotes-vista3.webp"],
    notices: ["imgs/software-abarrotes-notificacion1.webp", "imgs/software-abarrotes-notificacion2.webp"]
  },
  {
    kicker: "Inventario y almacén",
    title: 'Evita quedarte sin producto y controla tu <span>inventario</span> a tiempo.',
    description: "Registra entradas, salidas, productos bajos y movimientos de almacén.",
    person: "imgs/persona-almacenista.webp",
    alt: "Persona almacenista revisando inventario",
    shots: ["imgs/software-inventario-vista1.webp", "imgs/software-inventario-vista2.webp", "imgs/software-inventario-vista3.webp"],
    notices: ["imgs/software-inventario-notificacion1.webp", "imgs/software-inventario-notificacion2.webp"]
  },
  {
    kicker: "Citas y servicios",
    title: 'Agenda <span>citas</span>, clientes y servicios sin enredos.',
    description: "Organiza horarios, recordatorios, clientes frecuentes y servicios realizados.",
    person: "imgs/persona-estilista.webp",
    alt: "Persona estilista organizando citas",
    shots: ["imgs/sistema-peluqueria-vista1.webp", "imgs/sistema-peluqueria-vista2.webp", "imgs/sistema-peluqueria-vista3.webp"],
    notices: ["imgs/sistema-peluqueria-notificacion1.webp", "imgs/sistema-peluqueria-notificacion2.webp"]
  },
  {
    kicker: "Restaurantes y pedidos",
    title: 'Organiza <span>pedidos</span>, entregas y ventas sin que nada se pierda.',
    description: "Ideal para restaurantes, comida rápida, cafeterías, taquerías y negocios con entregas.",
    person: "imgs/persona-cocinero.webp",
    alt: "Persona cocinera administrando pedidos",
    shots: ["imgs/software-restaurante-vista1.webp", "imgs/software-restaurante-vista2.webp", "imgs/software-restaurante-vista3.webp"],
    notices: ["imgs/software-restaurante-notificacion1.webp", "imgs/software-restaurante-notificacion2.webp"]
  },
  {
    kicker: "Páginas web y catálogo",
    title: 'Muestra tu trabajo, atrae clientes y <span>vende más fácil</span> en línea.',
    description: "Creamos páginas web, catálogos y contenido para que más personas conozcan lo que haces.",
    person: "imgs/persona-artista.webp",
    alt: "Persona artista mostrando su trabajo en línea",
    shots: ["imgs/paginaweb-artista-vista1.webp", "imgs/paginaweb-artista-vista2.webp", "imgs/paginaweb-artista-vista3.webp"],
    notices: ["imgs/paginaweb-artista-notificacion1.webp", "imgs/paginaweb-artista-notificacion2.webp"]
  }
];

let activeSlide = 0;
let carouselTimer;
let interactionLock = false;

function closeMenu() {
  if (!menuToggle || !navPanel) return;
  menuToggle.setAttribute("aria-expanded", "false");
  navPanel.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navPanel.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function setImage(image, src, alt = "") {
  if (!image) return;
  image.classList.remove("is-hidden");
  if (image.dataset.src === src) {
    image.alt = alt;
    return;
  }

  const nextImage = new Image();
  nextImage.onload = () => {
    image.src = src;
    image.alt = alt;
    image.dataset.src = src;
  };
  nextImage.src = src;
}

function preloadSlideImages() {
  const sources = new Set();
  slides.forEach((slide) => {
    sources.add(slide.person);
    slide.shots.forEach((source) => sources.add(source));
    slide.notices.forEach((source) => sources.add(source));
  });

  sources.forEach((source) => {
    const image = new Image();
    image.src = source;
  });
}

function renderSlide(index) {
  if (!carousel) return;
  const slide = slides[index];
  carousel.classList.add("is-changing");

  window.setTimeout(() => {
    slideKicker.textContent = slide.kicker;
    slideTitle.innerHTML = slide.title;
    slideDescription.textContent = slide.description;
    setImage(slidePerson, slide.person, slide.alt);
    setImage(slideShotOne, slide.shots[0], "Captura principal del sistema");
    setImage(slideShotTwo, slide.shots[1], "Captura secundaria del sistema");
    setImage(slideShotThree, slide.shots[2], "Captura de reportes o tablero");
    setImage(slideNoticeOne, slide.notices[0], "Notificación del sistema");
    setImage(slideNoticeTwo, slide.notices[1], "Notificación del sistema");
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
    carousel.classList.remove("is-changing");
  }, 300);
}

function goToSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  renderSlide(activeSlide);
}

function nextSlide() {
  goToSlide(activeSlide + 1);
}

function restartCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(nextSlide, 1800);
}

if (carousel) {
  preloadSlideImages();

  carousel.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    nextSlide();
    restartCarousel();
  });

  carousel.addEventListener("pointerenter", () => {
    if (interactionLock) return;
    interactionLock = true;
    nextSlide();
    restartCarousel();
    window.setTimeout(() => {
      interactionLock = false;
    }, 450);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      restartCarousel();
    });
  });

  restartCarousel();
}

document.querySelectorAll("img").forEach((image) => {
  image.setAttribute("decoding", image.getAttribute("decoding") || "async");
  if (!image.closest(".site-header") && !image.closest(".hero-carousel")) {
    image.setAttribute("loading", image.getAttribute("loading") || "lazy");
  }

  image.addEventListener("error", () => {
    image.classList.add("is-hidden");
  });
});

document.querySelectorAll(".disabled-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const lines = [
      "Hola, quiero solicitar una cotización/análisis para mi negocio.",
      "",
      `Nombre: ${data.get("nombre") || ""}`,
      `Negocio: ${data.get("negocio") || ""}`,
      `Teléfono/WhatsApp: ${data.get("telefono") || ""}`,
      `Necesidad: ${data.get("necesidad") || ""}`,
      `Mensaje: ${data.get("mensaje") || ""}`
    ];

    const whatsappUrl = `https://wa.me/528116718765?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener");

    if (formNote) {
      formNote.textContent = "Abrimos WhatsApp con tu solicitud lista para enviar.";
    }
  });
}
document.querySelectorAll(".option-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    const href = card.getAttribute("href");

    if (!href || href === "#") return;

    event.preventDefault();

    card.classList.remove("is-clicked");

    window.setTimeout(() => {
      card.classList.add("is-clicked");
    }, 10);

    window.setTimeout(() => {
      window.location.href = href;
    }, 360);
  });
});

