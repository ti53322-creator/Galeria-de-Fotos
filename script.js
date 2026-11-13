// Configuración de datos de las categorías e imágenes
const galleryData = {
    carrera: {
        title: "Carrera",
        desc: "Ingeniería en Sistemas y Tecnologías de la Información",
        images: [
            { title: "Desarrollo Web Frontend", caption: "Interfaz web responsiva", desc: "Creación de interfaces responsivas y atractivas utilizando HTML5, Tailwind CSS y componentes JavaScript modernos.", url: "assets/carrera1.jpg" },
            { title: "Entorno de Trabajo", caption: "Setup de programación multimonitor", desc: "Espacio de trabajo optimizado con monitores de alta resolución para programar de manera ágil y cómoda.", url: "assets/carrera2.jpg" },
            { title: "Diseño UI/UX", caption: "Prototipado e investigación de usuario", desc: "Planificación de la estructura visual, mapa de navegación y experiencia de usuario previa a la fase de código.", url: "assets/carrera3.jpg" },
            { title: "Trabajo en Equipo", caption: "Reunión de planificación de sprint", desc: "Metodologías ágiles y colaboración constante entre desarrolladores para crear sistemas escalables.", url: "assets/carrera4.jpg" },
            { title: "Arquitectura de Código", caption: "Estructura limpia en JavaScript modular", desc: "Estructuración limpia de archivos HTML, estilos CSS organizados y lógica en JavaScript independiente.", url: "assets/carrera5.jpg" }
        ]
    },
    suenos: {
        title: "Sueños",
        desc: "Destinos internacionales, naturaleza y metas personales a futuro.",
        images: [
            { title: "Titulación Profesional", caption: "Conclusión de la carrera universitaria", desc: "Culminar la carrera académica de Ingeniería en Sistemas para consolidar bases técnicas sólidas y abrir oportunidades profesionales.", url: "assets/sueños1.jpg" },
            { title: "Emprendimiento Propio", caption: "Creación y gestión de empresa", desc: "Fundar y escalar un negocio propio en el sector tecnológico para generar valor e independencia laboral.", url: "assets/sueños2.jpg" },
            { title: "Libertad Financiera", caption: "Solvencia y patrimonio sólido", desc: "Construir una economía estable a través de múltiples fuentes de ingreso, inversiones y gestión responsable del capital.", url: "assets/sueños3.jpg" },
            { title: "Ferrari F8 Tributo", caption: "Superdeportivo de alto rendimiento", desc: "Adquirir un Ferrari F8 como símbolo de esfuerzo personal, pasión automotriz y logro de metas superadas.", url: "assets/sueños4.jpg" },
            { title: "Viajes Internacionales", caption: "Exploración de múltiples continentes", desc: "Recorrer el mundo para conocer nuevas culturas, paisajes e historias con la libertad de administrar el tiempo propio.", url: "assets/sueños5.jpg" }
        ]
    },
    peliculas: {
        title: "Películas",
        desc: "Mis peliculas y series favoritas",
        images: [
            { title: "Corazones Malheridos", caption: "Romance y superación", desc: "Un matrimonio por conveniencia entre una aspirante a música y un marine que se convierte en una historia de amor inesperada e intensa.", url: "assets/pelicula1.jpg" },
            { title: "Bridgerton", caption: "Drama de época y romance", desc: "Intrigas, alta sociedad y romances apasionados ambientados en la época de la Regencia en Londres.", url: "assets/pelicula2.jpg" },
            { title: "Lucy", caption: "Ciencia ficción y acción", desc: "Una mujer adquiere habilidades sobrehumanas y capacidades cerebrales ilimitadas tras ser expuesta accidentalmente a una droga sintética.", url: "assets/pelicula3.jpg" },
            { title: "Off Campus", caption: "Saga de romance universitario", desc: "Adaptación de la popular saga literaria centrada en jugadores de hockey universitarios y sus historias de amor y crecimiento personal.", url: "assets/pelicula4.jpg" },
            { title: "La Hipótesis del Amor", caption: "Romance en el mundo académico", desc: "Una científica y un temido profesor entablan una relación falsa en el laboratorio que termina desafiando todas las teorías del amor.", url: "assets/pelicula5.jpg" }
        ]
    },
    cantante: {
        title: "Cantante",
        desc: "Conciertos en vivo, producción musical e instrumentos.",
        images: [
            { title: "Fuerza Regida", caption: "Música regional mexicana y corridos urbanos", desc: "Energía inigualable en el escenario con éxitos que fusionan el sonido tradicional de banda y tuba con ritmos urbanos contemporáneos.", url: "assets/cantante1.jpg" },
            { title: "Olivia Rodrigo", caption: "Pop rock y baladas emotivas", desc: "Letras introspectivas, voz potente y espectáculos masivos llenos de emotividad que conectan con toda una generación.", url: "assets/cantante2.jpg" },
            { title: "Bad Bunny", caption: "Reggaeton, trap latino y versatilidad musical", desc: "Fenómeno global con producciones rompedoras de récords, versatilidad de estilos e impactos culturales masivos en la música latina.", url: "assets/cantante3.jpg" },
            { title: "Tito Double P", caption: "Corridos bélicos y composición moderna", desc: "Composición y estilo distintivo dentro de la nueva ola del movimiento regional mexicano contemporáneo.", url: "assets/cantante4.jpg" },
            { title: "Carla Morrison", caption: "Indie pop y baladas acústicas", desc: "Interpretaciones íntimas, letras profundas sobre el amor y el desamor cargadas de sentimentalismo acústico.", url: "assets/cantante5.jpg" }
        ]
    },
    hobbies: {
        title: "Hobbies",
        desc: "Fotografía, videojuegos, lectura y vida activa.",
        images: [
            { title: "Voleibol", caption: "Deporte de equipo y agilidad", desc: "Practicar voleibol para mantener el trabajo en equipo, los reflejos rápidos y una vida activa en la cancha.", url: "assets/hobbies1.jpg" },
            { title: "Dibujar", caption: "Ilustración y expresión artística", desc: "Explorar la creatividad a través del bocetaje, trazos a lápiz e ilustración digital para dar vida a ideas visuales.", url: "assets/hobbies2.jpg" },
            { title: "Lectura", caption: "Libros, novelas y aprendizaje", desc: "Dedicar tiempo a la lectura de buenas historias y libros formativos acompañado de un espacio tranquilo.", url: "assets/hobbies3.jpg" },
            { title: "Fotografía", caption: "Captura de momentos y paisajes", desc: "Retratar encuadres creativos, paisajes únicos y momentos especiales con la cámara.", url: "assets/hobbies4.jpg" },
            { title: "Ver Películas y Series", caption: "Maratones de cine y streaming", desc: "Disfrutar de maratones cinematográficos, historias envolventes y producciones visuales impactantes en el tiempo libre.", url: "assets/hobbies5.jpg" }
        ]
    }
};

// --- LÓGICA DEL CARRUSEL ---
let currentSlide = 0;
let carouselInterval = null;

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('#carousel-dots button');
    
    slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
            slide.classList.remove('opacity-0');
            slide.classList.add('opacity-100');
        } else {
            slide.classList.remove('opacity-100');
            slide.classList.add('opacity-0');
        }
    });

    dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
            dot.className = "w-2.5 h-2.5 rounded-full bg-indigo-500 transition-all";
        } else {
            dot.className = "w-2.5 h-2.5 rounded-full bg-white/40 hover:bg-white transition-all";
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function startCarousel() {
    if (!carouselInterval) {
        carouselInterval = setInterval(nextSlide, 4000);
    }
}

function stopCarousel() {
    clearInterval(carouselInterval);
    carouselInterval = null;
}

// --- NAVEGACIÓN Y DROPDOWN ---
function toggleDropdown() {
    const menu = document.getElementById('dropdown-menu');
    const icon = document.getElementById('dropdown-icon');
    menu.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

window.addEventListener('click', function(e) {
    const btn = document.getElementById('dropdown-btn');
    const menu = document.getElementById('dropdown-menu');
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
        document.getElementById('dropdown-icon').classList.remove('rotate-180');
    }
});

function showHome() {
    document.getElementById('home-section').classList.remove('hidden');
    document.getElementById('gallery-section').classList.add('hidden');
    
    document.getElementById('btn-home').className = "px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold transition";
    document.getElementById('dropdown-btn').className = "px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition flex items-center space-x-2";
    
    startCarousel();
}

// --- GENERACIÓN DE GALERÍA DE IMÁGENES ---
function selectCategory(categoryKey) {
    const data = galleryData[categoryKey];
    if (!data) return;

    stopCarousel();

    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('gallery-section').classList.remove('hidden');
    document.getElementById('dropdown-menu').classList.add('hidden');
    document.getElementById('dropdown-icon').classList.remove('rotate-180');

    document.getElementById('btn-home').className = "px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition";
    document.getElementById('dropdown-btn').className = "px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold transition flex items-center space-x-2";

    document.getElementById('category-title').innerText = data.title;
    document.getElementById('category-desc').innerText = data.desc;
    document.getElementById('card-count').innerText = `${data.images.length} imágenes`;

    // Mostrar solo las imágenes (al dar clic se abre el modal con su información)
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = '';

    data.images.forEach(img => {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = "h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:opacity-90 transition";
        imgWrapper.onclick = () => openModal(img.url, img.title, img.desc);

        imgWrapper.innerHTML = `
            <img src="${img.url}" alt="${img.title}" class="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105" onerror="this.src='https://placehold.co/600x400/1e293b/ffffff?text=Agrega+tu+imagen'">
        `;
        grid.appendChild(imgWrapper);
    });
}

// --- FUNCIONES DEL MODAL LIGHTBOX ---
function openModal(url, title, desc) {
    const modal = document.getElementById('image-modal');
    document.getElementById('modal-img').src = url;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// --- CONTROL PARA MINIMIZAR/MAXIMIZAR EL WIDGET DE SPOTIFY ---
let isSpotifyMinimized = false;

function toggleSpotifyWidget() {
    const container = document.getElementById('spotify-iframe-container');
    const icon = document.getElementById('spotify-toggle-icon');
    
    isSpotifyMinimized = !isSpotifyMinimized;
    
    if (isSpotifyMinimized) {
        container.style.height = '0px';
        container.style.overflow = 'hidden';
        icon.className = 'fa-solid fa-chevron-up';
    } else {
        container.style.height = '80px';
        icon.className = 'fa-solid fa-chevron-down';
    }
}

// Iniciar el carrusel automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', startCarousel);