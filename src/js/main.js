// Nexus Style JavaScript for Facundo Amelotti CV

document.addEventListener('DOMContentLoaded', function() {
    initializeNexusEffects();
    initializeMobileMenu();
    initializeScrollFadeEffect();

});

function initializeNexusEffects() {
    createCursors();
    createParticles();
    initializeScrollEffects();
    initializeHoverEffects();
    initializeAnimations();
    initializeMatrixBackground();

    console.log("Hola reclutador! Si estás viendo esto, ¡Hablame!");
    console.log("facuezequielamelotti@gmail.com");
    console.log(":)");
}

// NUEVO: Fondo matriz digital
function initializeMatrixBackground() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-background';
    matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.027;
    `;
    document.body.appendChild(matrixContainer);
    
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    function createMatrixRain() {
        const drops = [];
        const columns = Math.floor(window.innerWidth / 20);
        
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        matrixContainer.appendChild(canvas);
        
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#FFF';

            ctx.font = '15px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);
                
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        setInterval(draw, 56);
    }
    
    createMatrixRain();
}

// MODIFICADO: Función para el efecto de desvanecimiento más sutil en scroll
function initializeScrollFadeEffect() {
    const sections = document.querySelectorAll('section');
    
    function updateSectionOpacity() {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const scrollCenter = scrollTop + windowHeight / 2;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionCenter = sectionTop + sectionHeight / 2;
            
            // Calcular la distancia desde el centro de la ventana
            const distance = Math.abs(scrollCenter - sectionCenter);
            const maxDistance = windowHeight * 1.5; // Aumentado para efecto más gradual
            
            // Calcular opacidad basada en la distancia
            let opacity = 1 - (distance / maxDistance);
            opacity = Math.max(0.3, Math.min(1, opacity)); // Opacidad mínima de 0.3 en vez de 0
            
            // Aplicar una curva más suave y menos pronunciada
            opacity = Math.pow(opacity, 0.5); // Reducido de 0.8 a 0.5 para menos contraste
            
            // Reducir el efecto de movimiento
            const translateY = (1 - opacity) * 10; // Reducido de 20px a 10px
            
            // Aplicar el efecto
            section.style.opacity = opacity;
            section.style.transform = `translateY(${translateY}px)`;
        });
    }
    
    // Aplicar el efecto al hacer scroll
    window.addEventListener('scroll', updateSectionOpacity);
    
    // Aplicar el efecto inicial
    updateSectionOpacity();
}

// Función para inicializar el menú móvil
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) return;

    const toggleMenu = () => {
        const isActive = hamburger.classList.contains('active');
        if (isActive) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        } else {
            hamburger.classList.add('active');
            navLinks.classList.add('active');
            document.body.classList.add('menu-open');
        }
    };

    const closeMenu = () => {
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        // Nota: no tocamos hamburger.classList aquí
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeMenu();
            hamburger.classList.remove('active'); // Solo aquí si fue click en enlace
        }
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            closeMenu();
            hamburger.classList.remove('active');
        }
    });

    window.addEventListener('scroll', () => {
        closeMenu();
        hamburger.classList.remove('active');
    });
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle menú con el botón hamburguesa
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el click se propague al documento
    hamburger.classList.toggle('is-active');
    navLinks.classList.toggle('nav-active');
});

// Cierra el menú al hacer clic en cualquier link del menú
navItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navLinks.classList.remove('nav-active');
    });
});

// Cierra el menú si se hace clic fuera del menú y del botón
document.addEventListener('click', (event) => {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger) {
        hamburger.classList.remove('is-active');
        navLinks.classList.remove('nav-active');
    }
});




// MEJORADO: Cursor más fluido y reactivo
function createCursors() {
    if (!document.querySelector('.cursor')) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: radial-gradient(circle, #fff 0%, rgba(255,255,255,0.8) 100%);
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);
    }
    
    if (!document.querySelector('.cursor-outline')) {
        const cursorOutline = document.createElement('div');
        cursorOutline.className = 'cursor-outline';
        cursorOutline.style.cssText = `
            position: fixed;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            pointer-events: none;
            z-index: 9998;
            transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        `;
        document.body.appendChild(cursorOutline);
    }

    const cursor = document.querySelector('.cursor');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Suavizado mejorado con diferentes velocidades
        cursorX += (mouseX - cursorX) * 0.25;
        cursorY += (mouseY - cursorY) * 0.25;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        outlineX += (mouseX - outlineX) * 0.12;
        outlineY += (mouseY - outlineY) * 0.12;
        cursorOutline.style.left = outlineX - 16 + 'px';
        cursorOutline.style.top = outlineY - 16 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}

// NUEVO: Efecto de onda de color
function initializeColorWaveEffect() {
    const sections = document.querySelectorAll('section');
    
    function createColorWave() {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.animation = 'colorWave 2s ease-in-out';
                setTimeout(() => {
                    section.style.animation = '';
                }, 2000);
            }, index * 200);
        });
    }
    
    // Activar onda de color cada 30 segundos
    setInterval(createColorWave, 30000);
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
    const elementsToAnimate = document.querySelectorAll('.skill-item, .project-item');
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

// Caracteres Matrix para la explosión
const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

// NUEVO: Efecto de explosión Matrix al hacer click
document.addEventListener('click', (e) => {
    createMatrixExplosion(e.clientX, e.clientY);
});

function createMatrixExplosion(x, y) {
    const explosionCount = 12; // Número de caracteres que explotan
    const colors = [
        'rgba(0, 255, 0, 0.9)',      // Verde Matrix clásico
        'rgba(0, 200, 0, 0.8)',      // Verde más oscuro
        'rgba(50, 255, 50, 0.7)',    // Verde claro
        'rgba(255, 255, 255, 0.6)'   // Blanco para contraste
    ];

    for (let i = 0; i < explosionCount; i++) {
        setTimeout(() => {
            const character = document.createElement('div');
            const randomChar = characters[Math.floor(Math.random() * characters.length)];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Calcular dirección aleatoria para la explosión
            const angle = (i / explosionCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
            const velocity = Math.random() * 150 + 100; // Velocidad entre 100-250px
            const dx = Math.cos(angle) * velocity;
            const dy = Math.sin(angle) * velocity;
            
            character.textContent = randomChar;
            character.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                font-family: 'JetBrains Mono', monospace;
                font-size: ${Math.random() * 8 + 12}px;
                font-weight: ${Math.random() > 0.5 ? '600' : '400'};
            
                pointer-events: none;
                z-index: 10001;
                text-shadow: 0 0 10px currentColor;
                transform: translate(-50%, -50%);
                user-select: none;
            `;
            
            document.body.appendChild(character);
            
            // Animación de explosión con keyframes personalizados
            const animation = character.animate([
                {
                    transform: 'translate(-50%, -50%) scale(1) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translate(calc(-50% + ${dx * 0.3}px), calc(-50% + ${dy * 0.3}px)) scale(1.2) rotate(${Math.random() * 180}deg)`,
                    opacity: 0.9,
                    offset: 0.3
                },
                {
                    transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.8) rotate(${Math.random() * 360}deg)`,
                    opacity: 0.4,
                    offset: 0.7
                },
                {
                    transform: `translate(calc(-50% + ${dx * 1.2}px), calc(-50% + ${dy * 1.2}px)) scale(0.3) rotate(${Math.random() * 540}deg)`,
                    opacity: 0
                }
            ], {
                duration: Math.random() * 800 + 600, // Duración entre 600-1400ms
                easing: 'cubic-bezier(0.25, 0.46, 0.75, 0.84)'
            });
            
            animation.onfinish = () => {
                if (character.parentNode) {
                    character.remove();
                }
            };
            
        }, i * 30); // Delay escalonado para efecto más dramático
    }
    
    // Agregar ondas concéntricas Matrix-style también
    createMatrixRipples(x, y);
}

function createMatrixRipples(x, y) {
    // Ondas concéntricas con estilo Matrix
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: fixed;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                
                left: ${x}px;
                top: ${y}px;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 10000;`;
            
            document.body.appendChild(ripple);
            
            // Animación de expansión de ondas
            ripple.animate([
                {
                    transform: 'translate(-50%, -50%) scale(0)',
                    opacity: 1
                },
                {
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 0.8,
                    offset: 0.3
                },
                {
                    transform: 'translate(-50%, -50%) scale(3)',
                    opacity: 0.2,
                    offset: 0.8
                },
                {
                    transform: 'translate(-50%, -50%) scale(5)',
                    opacity: 0
                }
            ], {
                duration: 1200 + i * 200,
                easing: 'ease-out'
            }).onfinish = () => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            };
            
        }, i * 150);
    }
}

// Efecto especial en elementos interactivos
document.querySelectorAll('a, button, .skill-item, .project-item, .card').forEach(element => {
    element.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar doble explosión
        
        // Explosión más intensa en elementos interactivos
        setTimeout(() => {
            createMatrixExplosion(e.clientX, e.clientY);
            
            // Segundo burst más pequeño
            setTimeout(() => {
                for (let i = 0; i < 6; i++) {
                    const char = document.createElement('div');
                    const randomChar = characters[Math.floor(Math.random() * characters.length)];
                    
                    char.textContent = randomChar;
                    char.style.cssText = `
                        position: fixed;
                        left: ${e.clientX + (Math.random() - 0.5) * 40}px;
                        top: ${e.clientY + (Math.random() - 0.5) * 40}px;
                        font-family: 'JetBrains Mono', monospace;
                        font-size: ${Math.random() * 4 + 8}px;
                   
                        pointer-events: none;
                        z-index: 10001;
                        text-shadow: 0 0 5px currentColor;
                        transform: translate(-50%, -50%);
                    `;
                    
                    document.body.appendChild(char);
                    
                    char.animate([
                        { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' },
                        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
                        { opacity: 0, transform: 'translate(-50%, -50%) scale(1.5)' }
                    ], {
                        duration: 400,
                        easing: 'ease-out'
                    }).onfinish = () => {
                        if (char.parentNode) {
                            char.remove();
                        }
                    };
                }
            }, 200);
        }, 50);
    });
});

// Agregar CSS adicional para mejorar el efecto
const matrixStyle = document.createElement('style');
matrixStyle.textContent = `
    @keyframes matrixGlow {
        0%, 100% { text-shadow: 0 0 5px currentColor; }
        50% { text-shadow: 0 0 15px currentColor, 0 0 25px currentColor; }
    }
    
    /* Prevenir selección de texto durante las explosiones */
    body.matrix-exploding {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
`;
document.head.appendChild(matrixStyle);

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
}

// MEJORADO: Smooth scroll con animación personalizada
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.offsetTop - 80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;
            
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const progressPercentage = Math.min(progress / duration, 1);
                
                // Función de easing suave
                const easeInOutCubic = progressPercentage < 0.5 
                    ? 4 * progressPercentage * progressPercentage * progressPercentage 
                    : (progressPercentage - 1) * (2 * progressPercentage - 2) * (2 * progressPercentage - 2) + 1;
                
                window.scrollTo(0, startPosition + distance * easeInOutCubic);
                
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }
            
            window.requestAnimationFrame(step);
        }
    });
});

// MEJORADO: Header con efectos avanzados de blur y transparencia
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (header) {
        const scrollDirection = scrolled > lastScrollTop ? 'down' : 'up';
        const blurAmount = Math.min(scrolled / 10, 30);
        const opacity = Math.max(0.7, 1 - (scrolled / 500));
        
        if (scrolled > 100) {
            header.style.background = `rgba(0, 0, 0, ${opacity})`;
            header.style.backdropFilter = `blur(${blurAmount}px) saturate(1.2)`;
            header.style.borderBottomColor = `rgba(255, 255, 255, ${opacity * 0.1})`;
            
      
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollTop = scrolled;
}, { passive: true });


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
    
    section {
        transition: opacity 0.3s ease, transform 0.3s ease;
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

// Menú hamburguesa adicional (por compatibilidad)
const hamburgerElement = document.querySelector('.hamburger');
if (hamburgerElement) {
    hamburgerElement.addEventListener('click', function () {
        this.classList.toggle('is-active');
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('nav-active');
        }
    });
}
