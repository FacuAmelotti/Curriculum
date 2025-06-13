// Nexus Style JavaScript for Facundo Amelotti CV

document.addEventListener('DOMContentLoaded', function() {
    initializeNexusEffects();
    initializeMobileMenu(); // NUEVO: Inicializar menú móvil
});

function initializeNexusEffects() {
    createCursors();
    createParticles();
    initializeScrollEffects();
    initializeHoverEffects();
    initializeAnimations();
}

// NUEVO: Función para inicializar el menú móvil
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle del menú hamburguesa
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Cerrar menú al hacer click en un enlace
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Cerrar menú al hacer click fuera de él
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Cerrar menú al hacer scroll
    window.addEventListener('scroll', () => {
        if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// Crear cursores personalizados
function createCursors() {
    // Crear elementos del cursor si no existen
    if (!document.querySelector('.cursor')) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        document.body.appendChild(cursor);
    }
    
    if (!document.querySelector('.cursor-outline')) {
        const cursorOutline = document.createElement('div');
        cursorOutline.className = 'cursor-outline';
        document.body.appendChild(cursorOutline);
    }

    const cursor = document.querySelector('.cursor');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let outlineX = 0, outlineY = 0;

    // Seguimiento del mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animación del cursor
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        outlineX += (mouseX - outlineX) * 0.1;
        outlineY += (mouseY - outlineY) * 0.1;
        cursorOutline.style.left = outlineX - 16 + 'px';
        cursorOutline.style.top = outlineY - 16 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}

// Crear partículas de fondo
function createParticles() {
    // Crear contenedor de partículas si no existe
    if (!document.querySelector('.particles')) {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        document.querySelector('.particles').appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 15000);
    }

    // Crear partículas periódicamente
    setInterval(createParticle, 800);
}

// Efectos de scroll
function initializeScrollEffects() {
    // Animación de entrada para elementos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll('section, .skill-item, .project-item');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Efectos de hover
function initializeHoverEffects() {
    const interactiveElements = document.querySelectorAll('a, .skill-item, .project-item, .contact-item');
    const cursor = document.querySelector('.cursor');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor && cursorOutline) {
                cursor.style.transform = 'scale(2)';
                cursorOutline.style.transform = 'scale(1.5)';
                cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.6)';
            }
        });
        
        el.addEventListener('mouseleave', () => {
            if (cursor && cursorOutline) {
                cursor.style.transform = 'scale(1)';
                cursorOutline.style.transform = 'scale(1)';
                cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }
        });
    });
}

document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 1000);
});



// Inicializar animaciones
function initializeAnimations() {
    // Animación de escritura para el nombre
    const nameElement = document.querySelector('h1');
    if (nameElement) {
        const text = nameElement.textContent;
        nameElement.textContent = '';
        nameElement.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                nameElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Animación de aparición gradual de elementos
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.8s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });
}


// Smooth scroll para navegación interna
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Header con blur al hacer scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (scrolled > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.backdropFilter = 'blur(30px)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
        header.style.backdropFilter = 'blur(20px)';
    }
});

// Efectos de paralaje sutil
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Mover partículas con el scroll
    const particles = document.querySelector('.particles');
    if (particles) {
        particles.style.transform = `translateY(${rate}px)`;
    }
});

// Función para cerrar panel (si existe)
function closePanel() {
    const panel = document.getElementById('image-panel');
    if (panel) {
        panel.style.display = 'none';
    }
}

// Función para cambiar imagen (si existe)
function changeImage(direction) {
    // Implementación básica para compatibilidad
    console.log('Change image:', direction);
}

// Exponer funciones globalmente para compatibilidad
window.descargarCV = descargarCV;
window.closePanel = closePanel;
window.changeImage = changeImage;

// Efectos adicionales de UI
document.addEventListener('click', (e) => {
    // Efecto de ondas en clicks
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.left = e.clientX - 10 + 'px';
    ripple.style.top = e.clientY - 10 + 'px';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '10000';
    ripple.style.animation = 'ripple 0.6s ease-out forwards';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Añadir estilos de animación de ondas
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Mejorar la experiencia de carga
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Configurar opacidad inicial
document.body.style.opacity = '0';

// Simple JS para el menú hamburguesa
document.querySelector('.hamburger').addEventListener('click', function () {
  this.classList.toggle('is-active');
  document.querySelector('.nav-links').classList.toggle('nav-active');
});
