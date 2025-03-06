document.addEventListener("DOMContentLoaded", () => {
    // Crear overlay de transición
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #00081d, #0a0015);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    `;

    // Efecto de escaneo cuántico
    const scanBeam = document.createElement('div');
    scanBeam.style.cssText = `
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        height: 70%;
        background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 255, 255, 0.15) 30%,
            rgba(50, 100, 255, 0.3) 50%,
            rgba(0, 255, 255, 0.15) 70%,
            transparent 100%
        );
        filter: blur(30px);
        animation: scan 2.5s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    // Texto de carga holográfico
    const loaderText = document.createElement('div');
    loaderText.style.cssText = `
        font-family: 'Courier New', monospace;
        font-size: 3em;
        color: #00f3ff;
        text-shadow: 0 0 15px rgba(0, 243, 255, 0.7);
        position: relative;
        mix-blend-mode: screen;
    `;

    // Efecto de glitch dinámico
    const glitchEffect = document.createElement('div');
    glitchEffect.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255, 0, 255, 0.1) 3px,
            rgba(255, 0, 255, 0.1) 4px
        );
        animation: glitch 0.1s infinite;
        opacity: 0.3;
    `;

    // Añadir elementos al overlay
    overlay.appendChild(scanBeam);
    overlay.appendChild(loaderText);
    overlay.appendChild(glitchEffect);
    document.body.appendChild(overlay);

    // Animación del texto de carga
    let progress = 0;
    const textAnimate = () => {
        loaderText.textContent = `[INITIALIZING ${Math.min(progress, 100)}%]`;
        progress += (100 - progress) * 0.1;
        if(progress < 99.9) requestAnimationFrame(textAnimate);
    };
    textAnimate();

    // Keyframes dinámicos
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scan {
            0% { top: -100%; opacity: 0; }
            30% { opacity: 1; }
            100% { top: 150%; opacity: 0; }
        }

        @keyframes glitch {
            0% { background-position: 0 0; }
            100% { background-position: 20px 20px; }
        }
    `;
    document.head.appendChild(style);

    // Eliminar overlay al finalizar
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 1000);
    }, 2500);
});