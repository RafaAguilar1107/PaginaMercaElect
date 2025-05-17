// Intersection Observer para lazy loading de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Precarga de imágenes críticas
function preloadImages(images) {
    images.forEach(image => {
        const img = new Image();
        img.src = image;
    });
}

// Lista de imágenes críticas (visibles en el primer viewport)
const criticalImages = [
    '/assets/images/hero-image.jpg',
    '/assets/images/logo.png'
];

// Precargar imágenes críticas
preloadImages(criticalImages);

// Manejo del menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.open-menu-btn');
    const navMenu = document.getElementById('full-menu');
    const closeMenu = document.getElementById('close-full-menu');

    // Toggle del menú hamburguesa
    hamburger.addEventListener('click', function() {
        navMenu.style.display ='block';
        navMenu.classList.add('active');
        hamburger.classList.remove('hidden');
    });

    // Cerrar menú al hacer click en un enlace
    closeMenu.addEventListener('click', function() {
        navMenu.style.display = 'none';
        hamburger.classList.add('active');
        hamburger.classList.remove('hidden');
    });
});