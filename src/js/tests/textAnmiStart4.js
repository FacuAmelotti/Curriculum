document.addEventListener("DOMContentLoaded", () => {
    // Crear overlay de transición
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg,rgb(19, 20, 20),rgb(3, 3, 3));
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
            rgba(50, 214, 255, 0.3) 50%,
            rgba(0, 217, 255, 0.15) 70%,
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
        color:rgb(0, 225, 255);
        text-shadow: 0 0 15px rgba(0, 225, 255, 0.7);
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
        loaderText.textContent = `[CARGANDO DATOS... ${Math.min(progress, 100)}%]`;
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
        iniciarSegundoEfecto(); // Transición inmediata
    }, 1700);


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
                efectoEntrada 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards,
                efectoSalida 5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        `;
    
        const mensajeFinal = document.createElement('div');
        mensajeFinal.innerHTML = `
            <div style="
                font-family: 'Courier New', monospace;
                font-size: 4em;
                color:rgb(0, 238, 255);
                text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
                text-align: center;
            ">
                <div style="
                    font-size: 1.5em;
                    margin-bottom: 20px;
                    animation: checkAnim 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                ">✓</div>
                PERFIL CARGADO
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
});

