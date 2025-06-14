// startAnim.js - Animación de introducción épica y elegante
function startAnim() {
    // Array de frases tecnológicas aleatorias
    const techFacts = [
    "La vida es muy simple, pero insistimos en hacerla complicada. — Confucio",
    "La verdadera sabiduría está en reconocer la propia ignorancia. — Sócrates",
    "El sabio puede cambiar de opinión. El necio, nunca. — Immanuel Kant",
    "La paciencia es la compañera de la sabiduría. — San Agustín",
    "La sabiduría comienza en la maravilla. — Sócrates",
    "La educación es el encendido de una llama, no el llenado de un recipiente. — Sócrates",
    "Donde hay amor, hay vida. — Mahatma Gandhi",
    "No basta tener buen ingenio; lo principal es aplicarlo bien. — René Descartes",
    "La sabiduría es evitar todos los pensamientos que nos debilitan. — Wayne Dyer",
    "Aprender sin reflexionar es malgastar energía. — Confucio",
    "Conócete a ti mismo. — Templo de Apolo en Delfos",
    "La sabiduría no viene por edad, sino por entendimiento. — William Shakespeare",
    "No se trata de saber mucho, sino de comprender bien. — Demócrito",
    "El conocimiento habla, pero la sabiduría escucha. — Jimi Hendrix",
    "Piensa como un sabio, pero habla como la gente común. — W. B. Yeats",
    "La humildad es la base de toda verdadera grandeza. — James Allen",
    "Vive como si fueras a morir mañana. Aprende como si fueras a vivir siempre. — Mahatma Gandhi",
    "La duda es el principio de la sabiduría. — Aristóteles",
    "Saber y saberlo demostrar es valer dos veces. — Baltasar Gracián",
    "El ignorante afirma, el sabio duda y reflexiona. — Aristóteles",
    "Nadie es más esclavo que quien se cree libre sin serlo. — Goethe",
    "El que tiene imaginación sin instrucción tiene alas sin pies. — Joseph Joubert",
    "Solo sé que no sé nada. — Sócrates",
    "No hay camino hacia la verdad, la verdad es el camino. — Mahatma Gandhi",
    "Un libro abierto es un cerebro que habla. — Proverbio árabe",
    "El sentido común no es tan común. — Voltaire",
    "La mente es como un paracaídas: solo funciona si se abre. — Albert Einstein",
    "La sabiduría viene de escuchar, no de hablar. — Proverbio japonés",
    "Quien domina a otros es fuerte; quien se domina a sí mismo es poderoso. — Lao Tsé",
    "No hay riqueza como el conocimiento, ni pobreza como la ignorancia. — Ali ibn Abi Talib",
    "Pensar es fácil, actuar es difícil, y poner los pensamientos en acción es lo más difícil del mundo. — Goethe",
    "El arte de ser sabio es saber qué pasar por alto. — William James",
    "El que no sabe es como el que no ve. — Proverbio popular",
    "El sabio no dice todo lo que piensa, pero siempre piensa todo lo que dice. — Aristóteles",
    "El alma que hablar puede con los ojos, también puede besar con la mirada. — Gustavo A. Bécquer",
    "Escoge una ocupación que ames y no tendrás que trabajar ni un día de tu vida. — Confucio",
    "Hay más sabiduría en una lágrima sincera que en mil palabras vacías. — Anónimo",
    "La reflexión es el camino hacia la inmortalidad; la falta de reflexión, el camino hacia la muerte. — Buda",
    "La experiencia no es lo que te sucede, sino lo que haces con lo que te sucede. — Aldous Huxley",
    "No hay camino para la paz, la paz es el camino. — Mahatma Gandhi",
    "Lo esencial es invisible a los ojos. — Antoine de Saint-Exupéry",
    "La disciplina es la parte más importante del éxito. — Truman Capote",
    "El silencio es un amigo que nunca traiciona. — Confucio",
    "La libertad no consiste en tener un buen amo, sino en no tener ninguno. — Cicerón",
    "El hombre sabio no acumula. Cuanto más ayuda a los demás, más se beneficia él. — Lao Tsé",
    "El que busca la verdad corre el riesgo de encontrarla. — Manuel Vicent",
    "La sabiduría es saber cuál es el siguiente paso; la virtud es llevarlo a cabo. — David Starr Jordan",
    "No es pobre el que tiene poco, sino el que mucho desea. — Séneca",
    "Haz lo que puedas, con lo que tengas, donde estés. — Theodore Roosevelt",
    "Cuando el sabio señala la luna, el necio mira el dedo. — Proverbio chino",
    "La verdad se corrompe tanto con la mentira como con el silencio. — Cicerón",
    "El sentido de la vida es darle sentido a la vida. — Viktor Frankl",
    "No llores porque terminó, sonríe porque sucedió. — Dr. Seuss",
    "La mente lo es todo. En lo que piensas, te conviertes. — Buda",
    "La felicidad no es algo hecho. Proviene de tus propias acciones. — Dalai Lama",
    "El pasado no se puede cambiar. El futuro aún está en tu poder. — Mary Pickford",
    "No cuentes los días, haz que los días cuenten. — Muhammad Ali",
    "El hombre que se conquista a sí mismo es más grande que quien conquista a mil hombres en batalla. — Buda",
    "No vemos las cosas como son, las vemos como somos. — Anaïs Nin",
    "El conocimiento es poder. — Francis Bacon",
    "No se puede desatar un nudo sin saber cómo está hecho. — Aristóteles",
    "El mayor enemigo del conocimiento no es la ignorancia, sino la ilusión del conocimiento. — Stephen Hawking",
    "Cuando cambias la forma en que miras las cosas, las cosas que miras cambian. — Wayne Dyer",
    "Un viaje de mil millas comienza con un solo paso. — Lao Tsé",
    "No hay mayor riqueza que una mente tranquila. — Anónimo",
     "Sé tú el cambio que quieres ver en el mundo. — Mahatma Gandhi",
    "El que no puede cambiar su mente no puede cambiar nada. — George Bernard Shaw",
    "Quien en verdad sabe de qué habla, no encuentra razones para levantar la voz. — Leonardo da Vinci",
    "El tiempo es el mejor maestro, desgraciadamente mata a todos sus alumnos. — Louis Hector Berlioz",
    "Prefiero molestar con la verdad que complacer con adulaciones. — Séneca",
    "Nada en la vida debe ser temido, solo comprendido. — Marie Curie",
    "El sabio no enseña con palabras, sino con actos. — Lao Tsé",
    "La libertad es el derecho de hacer lo que no perjudica a los demás. — Montesquieu",
    "Una vida sin reflexión no merece ser vivida. — Sócrates",
    "No esperes por una crisis para descubrir lo que es importante en tu vida. — Platón",
    "La imaginación es más importante que el conocimiento. — Albert Einstein",
    "La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento. — Maya Angelou",
    "Un hombre con una idea nueva es un loco hasta que la idea triunfa. — Mark Twain",
    "El mayor poder es el dominio de uno mismo. — Séneca",
    "La recompensa del trabajo bien hecho es la oportunidad de hacer más trabajo bien hecho. — Jonas Salk",
    "No hay viento favorable para el que no sabe a dónde va. — Séneca",
    "La sabiduría es hija de la experiencia. — Leonardo da Vinci",
    "El conocimiento te dará poder, pero el carácter te dará respeto. — Bruce Lee",
    "Cuida tus pensamientos, se convierten en palabras. — Lao Tsé",
    "Es mejor encender una vela que maldecir la oscuridad. — Proverbio chino",
    "La adversidad no construye el carácter, lo revela. — James Lane Allen",
    "Solo quienes se arriesgan a ir demasiado lejos pueden descubrir qué tan lejos se puede llegar. — T. S. Eliot",
    "No busques los errores, busca un remedio. — Henry Ford",
    "La verdadera inteligencia consiste en saber que no se sabe nada. — Sócrates",
    "La lectura es para la mente lo que el ejercicio es para el cuerpo. — Joseph Addison"
    ];
    
    // Seleccionar frase aleatoria
    const randomFact = techFacts[Math.floor(Math.random() * techFacts.length)];
    
    // Crear overlay principal con efecto de cristal
    const overlay = document.createElement('div');
    overlay.id = 'intro-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: radial-gradient(ellipse at center, rgba(15, 15, 15, 0.95) 0%, #0c0c0c 100%);
        backdrop-filter: blur(20px);
        z-index: 10000;
        pointer-events: none;
        transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    `;
    
    // Crear múltiples capas de grid animadas
    const gridLayers = document.createElement('div');
    gridLayers.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    `;
    
    // Grid principal con efecto de escaneo
    const gridPattern = document.createElement('div');
    gridPattern.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 120%;
        height: 120%;
        background-image: 
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
        background-size: 60px 60px;
        animation: gridScan 2s ease-in-out infinite alternate, gridSlide 8s linear infinite;
        transform: translate(-10%, -10%);
    `;
    
    // Grid secundario con movimiento diagonal
    const gridPattern2 = document.createElement('div');
    gridPattern2.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 120%;
        height: 120%;
        background-image: 
            linear-gradient(45deg, rgba(160, 160, 160, 0.03) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(160, 160, 160, 0.03) 1px, transparent 1px);
        background-size: 40px 40px;
        animation: gridRotate 6s linear infinite;
        transform: translate(-10%, -10%);
    `;
    
    // Crear starburst de partículas
    const starburst = document.createElement('div');
    starburst.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 2px;
        transform: translate(-50%, -50%);
        opacity: 0%;
    `;
    
    // Generar rayos de luz radiales
    for (let i = 0; i < 24; i++) {
        const ray = document.createElement('div');
        ray.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 300px;
            background: linear-gradient(to bottom, 
                rgba(255, 255, 255, 0.8) 0%, 
                rgba(255, 255, 255, 0.3) 20%, 
                transparent 100%);
            transform-origin: bottom center;
            transform: rotate(${i * 15}deg) translateY(-300px);
            animation: rayExpand 0.8s ease-out ${i * 0.02}s forwards, rayPulse 2s ease-in-out ${0.8 + i * 0.02}s infinite;
            opacity: 0;
        `;
        starburst.appendChild(ray);
    }
    
    // Crear constelación de puntos brillantes
    const constellation = document.createElement('div');
    constellation.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `;
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1;
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: starTwinkle ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 2}s infinite,
                       starFloat ${Math.random() * 20 + 10}s linear infinite;
            box-shadow: 0 0 ${size * 4}px rgba(255, 255, 255, 0.5);
        `;
        constellation.appendChild(star);
    }
    
    // Crear el logo/texto central con efecto holográfico
    const centerContent = document.createElement('div');
    centerContent.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        opacity: 0;
        animation: centerReveal 1s ease-out 0.3s forwards;
        max-width: 90vw;
    `;
    
    const logoText = document.createElement('div');
    logoText.textContent = 'CARGANDO';
    logoText.style.cssText = `
        font-family: 'JetBrains Mono', monospace;
        font-size: clamp(2rem, 6vw, 4rem);
        font-weight: 700;
        letter-spacing: 8px;
        background: linear-gradient(135deg, 
            #ffffff 0%, 
            #f8fafc 25%, 
            #ffffff 50%, 
            #e2e8f0 75%, 
            #ffffff 100%);
        background-size: 200% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: holographicShimmer 2s ease-in-out infinite,
                   textGlow 3s ease-in-out infinite alternate;
        filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
        margin-bottom: 20px;
    `;
    
    const subtitle = document.createElement('div');
    subtitle.textContent = randomFact;
    subtitle.style.cssText = `
        font-family: 'Inter', sans-serif;
        font-size: clamp(11px, 2.5vw, 14px);
        font-weight: 300;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 20px;
        animation: subtitleFade 1s ease-out 0.8s forwards;
        opacity: 0;
        line-height: 1.4;
        max-width: 80vw;
        margin-left: auto;
        margin-right: auto;
    `;
    
    // Crear barra de progreso futurista
    const progressContainer = document.createElement('div');
    progressContainer.style.cssText = `
        position: relative;
        width: min(300px, 80vw);
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        margin: 30px auto 0;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    `;
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.8) 50%, 
            transparent 100%);
        animation: progressFlow 0.6s ease-out 0.4s forwards;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
    `;
    
    const progressGlow = document.createElement('div');
    progressGlow.style.cssText = `
        position: absolute;
        top: -2px;
        left: -10px;
        width: 20px;
        height: 8px;
        background: radial-gradient(ellipse, rgba(255, 255, 255, 0.8) 0%, transparent 100%);
        border-radius: 50%;
        animation: progressGlowMove 0.6s ease-out 0.4s forwards;
        filter: blur(2px);
    `;
    
    // Añadir todos los estilos de animación
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        @keyframes gridScan {
            0% { filter: brightness(1) contrast(1); }
            50% { filter: brightness(1.2) contrast(1.1) hue-rotate(10deg); }
            100% { filter: brightness(1) contrast(1); }
        }
        
        @keyframes gridSlide {
            0% { transform: translate(-10%, -10%); }
            100% { transform: translate(-5%, -5%); }
        }
        
        @keyframes gridRotate {
            0% { transform: translate(-10%, -10%) rotate(0deg); }
            100% { transform: translate(-10%, -10%) rotate(360deg); }
        }
        
        @keyframes rayExpand {
            0% { 
                opacity: 0; 
                transform: rotate(var(--rotation)) translateY(-300px) scaleY(0);
            }
            50% {
                opacity: 1;
            }
            100% { 
                opacity: 0.8; 
                transform: rotate(var(--rotation)) translateY(-300px) scaleY(1);
            }
        }
        
        @keyframes rayPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
        }
        
        @keyframes starTwinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes starFloat {
            0% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(120deg); }
            66% { transform: translateY(5px) rotate(240deg); }
            100% { transform: translateY(0px) rotate(360deg); }
        }
        
        @keyframes centerReveal {
            0% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.8) rotateY(45deg);
                filter: blur(10px);
            }
            100% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1) rotateY(0deg);
                filter: blur(0px);
            }
        }
        
        @keyframes holographicShimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        @keyframes textGlow {
            0% { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3)); }
            100% { filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.6)); }
        }
        
        @keyframes subtitleFade {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes progressFlow {
            0% { width: 0; }
            100% { width: 100%; }
        }
        
        @keyframes progressGlowMove {
            0% { left: -10px; opacity: 1; }
            100% { left: 300px; opacity: 0; }
        }
        
        @keyframes elementSlideUp {
            0% { 
                opacity: 0; 
                transform: translateY(50px) scale(0.95);
                filter: blur(5px);
            }
            100% { 
                opacity: 1; 
                transform: translateY(0) scale(1);
                filter: blur(0px);
            }
        }
        
        @keyframes matrixReveal {
            0% { 
                opacity: 0;
                transform: translateZ(-100px) rotateX(30deg);
            }
            100% { 
                opacity: 1;
                transform: translateZ(0px) rotateX(0deg);
            }
        }
    `;
    
    document.head.appendChild(animationStyles);
    
    // Ensamblar toda la estructura
    gridLayers.appendChild(gridPattern);
    gridLayers.appendChild(gridPattern2);
    
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressGlow);
    
    centerContent.appendChild(logoText);
    centerContent.appendChild(subtitle);
    centerContent.appendChild(progressContainer);
    
    overlay.appendChild(gridLayers);
    overlay.appendChild(constellation);
    overlay.appendChild(starburst);
    overlay.appendChild(centerContent);
    
    document.body.appendChild(overlay);
    
    // Ocultar contenido principal con estilo
    const mainElements = document.querySelectorAll('.header, .hero, .section, .footer');
    mainElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.98)';
        el.style.filter = 'blur(3px)';
    });
    
    // Secuencia de animación épica
    setTimeout(() => {
        // Fase 1: Explosión de desvanecimiento del overlay
        overlay.style.opacity = '0';
        overlay.style.transform = 'scale(1.1)';
        overlay.style.filter = 'blur(10px)';
        
        // Fase 2: Revelación dramática de elementos
        mainElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
                el.style.filter = 'blur(0px)';
                
                // Efecto de onda en cada elemento
                el.style.animation = `matrixReveal 0.8s ease-out`;
            }, index * 150);
        });
        
        // Fase 3: Activar partículas y efectos ambientales
        setTimeout(() => {
            const particles = document.querySelector('.particles');
            if (particles) {
                particles.style.opacity = '1';
                particles.style.animation = 'elementSlideUp 1s ease-out';
            }
            
        }, 400);
        
        // Limpieza final
        setTimeout(() => {
            overlay.remove();
            animationStyles.remove();
        }, 1200);
        
    }, 4500); // Duración total aumentada para el drama
    
    // Inicializar efectos complementarios
    if (!document.querySelector('.cursor')) {
        initEnhancedCursor();
    }
    
    if (!document.querySelector('.particles')) {
        createEnhancedParticles();
    }
}

// Cursor mejorado con efectos mágicos
function initEnhancedCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.cssText += `
        background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(160, 160, 160, 0.3) 100%);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        animation: cursorPulse 2s ease-in-out infinite;
    `;
    document.body.appendChild(cursor);
    
    let trail = [];
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Crear estela del cursor
        trail.push({x: e.clientX, y: e.clientY, time: Date.now()});
        if (trail.length > 10) trail.shift();
        
        trail.forEach((point, i) => {
            if (Math.random() < 0.1) {
                createMiniSparkle(point.x, point.y);
            }
        });
    });
    
    document.addEventListener('click', (e) => {
        createEnhancedRipple(e.clientX, e.clientY);
    });
    
    // Añadir estilos del cursor
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        @keyframes cursorPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
    `;
    document.head.appendChild(cursorStyle);
}

function createMiniSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 9998;
        animation: sparkleDisappear 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
}

function createEnhancedRipple(x, y) {
    for (let i = 0; i < 3; i++) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: ${4 + i * 2}px;
            height: ${4 + i * 2}px;
            border: 1px solid rgba(255, 255, 255, ${0.6 - i * 0.2});
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%) scale(1);
            animation: enhancedRipple ${0.8 + i * 0.2}s ease-out ${i * 0.1}s forwards;
        `;
        
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1200);
    }
    
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes enhancedRipple {
            to {
                transform: translate(-50%, -50%) scale(20);
                opacity: 0;
            }
        }
        @keyframes sparkleDisappear {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0) rotate(180deg); }
        }
    `;
    document.head.appendChild(rippleStyle);
}



function createEnhancedParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => createFloatingParticle(particlesContainer), Math.random() * 3000);
    }
    
    setInterval(() => {
        if (document.querySelectorAll('.particle').length < 30) {
            createFloatingParticle(particlesContainer);
        }
    }, 1500);
}


// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAnim);
} else {
    startAnim();
}