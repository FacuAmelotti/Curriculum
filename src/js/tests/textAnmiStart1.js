document.addEventListener("DOMContentLoaded", () => {
    // Primer overlay - Efecto de carga
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, rgb(13, 13, 14), rgb(0, 0, 0));
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        opacity: 1;
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    `;

    // Elementos del primer efecto (igual que antes)
    const scanBeam = document.createElement('div');
    // ... (mismo código del scanBeam)

    const loaderText = document.createElement('div');
    // ... (mismo código del loaderText)

    const glitchEffect = document.createElement('div');
    // ... (mismo código del glitchEffect)

    overlay.appendChild(scanBeam);
    overlay.appendChild(loaderText);
    overlay.appendChild(glitchEffect);
    document.body.appendChild(overlay);

    // Animación de carga mejorada
    let progress = 0;
    const textAnimate = () => {
        progress += (100 - progress) * 0.1;
        loaderText.textContent = `[Cargando datos... ${Math.min(progress, 100).toFixed(1)}%]`;

        if (progress < 99.99) {
            requestAnimationFrame(textAnimate);
        } else {
            loaderText.textContent = '[Carga completada 100%]';
            
            // Iniciar transición de salida del primer overlay
            overlay.style.opacity = '0';
            
            // Preparar segundo efecto ANTES de que termine la transición
            overlay.addEventListener('transitionend', () => {
                overlay.remove();
                iniciarSegundoEfecto(); // Transición inmediata
            }, { once: true });
        }
    };
    requestAnimationFrame(textAnimate);
});

function iniciarSegundoEfecto() {
    // Segundo overlay - Efecto de confirmación
    const overlayFinal = document.createElement('div');
    overlayFinal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        animation: 
            efectoEntrada 0.4s cubic-bezier(0.4, 0, 0.2, 1)forwards,
            efectoSalida 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    `;

    const mensajeFinal = document.createElement('div');
    mensajeFinal.innerHTML = `
        <div style="
            font-family: 'Courier New', monospace;
            font-size: 4em;
            color: #00ff88;
            text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
            text-align: center;
        ">
            <div style="
                font-size: 1.5em;
                margin-bottom: 20px;
                animation: checkAnim 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            ">✓</div>
            SISTEMA LISTO
        </div>
    `;

    overlayFinal.appendChild(mensajeFinal);
    document.body.appendChild(overlayFinal);

    // Keyframes dinámicos
    const style = document.createElement('style');
    style.textContent = `
        @keyframes efectoEntrada {
            0% { opacity: 0; transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes efectoSalida {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        @keyframes checkAnim {
            0% { opacity: 0; transform: scale(0); }
            80% { transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Eliminar overlay final después de todo
    overlayFinal.addEventListener('animationend', () => {
        overlayFinal.remove();
    });
}