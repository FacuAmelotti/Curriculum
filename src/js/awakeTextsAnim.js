// awakeTextsAnim.js
document.addEventListener('DOMContentLoaded', () => {
    // Configuración de la animación
    const INITIAL_DELAY = 200;  // Retraso inicial antes de comenzar (ms)
    const STAGGER_DELAY = 20;  // Retraso entre cada título (ms)
    
    // Seleccionar todos los títulos (h1-h6)
    const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6,ul, p, img');
    
    // Función para aplicar la animación
    function animateTitle(title, index) {
        // Configurar estado inicial
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px)';
        title.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)'; // Lento al principio
        
        // Aplicar animación con retraso escalonado
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            // Cambiar el tipo de aceleración para el final
            title.style.transition = 'all 0.6s ease-out'; // Acelera al final
        }, INITIAL_DELAY + (index * STAGGER_DELAY));
    }

    // Aplicar animación a cada título
    titles.forEach((title, index) => {
        animateTitle(title, index);
    });
});
