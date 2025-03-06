document.addEventListener("DOMContentLoaded", () => {
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
        opacity: 1;
        transition: opacity 5.5s ease-out;
    `;

    // Logo o mensaje personalizado
    const logo = document.createElement('div');
    logo.innerHTML = `
        <div style="
            font-family: 'Courier New', monospace;
            font-size: 2.5em;
            color: #00f3ff;
            text-shadow: 0 0 15px rgba(0, 243, 255, 0.7);
            text-align: center;
        ">
            <div style="font-size: 1.5em; margin-bottom: 20px;">🚀</div>
            Bienvenido :)
        </div>
    `;

    // Efecto de partículas flotantes
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: ${i % 2 === 0 ? '#00f3ff' : '#ff00ff'};
            border-radius: 50%;
            opacity: 0;
            animation: float ${Math.random() * 4 + 2}s infinite ease-in-out;
        `;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        overlay.appendChild(particle);
    }

    // Añadir elementos al overlay
    overlay.appendChild(logo);
    document.body.appendChild(overlay);

    // Keyframes dinámicos
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-100px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Esperar a que la página cargue completamente
    window.addEventListener('load', () => {
        // Iniciar desvanecimiento
        overlay.style.opacity = '0';

        // Eliminar overlay después de la transición
        overlay.addEventListener('transitionend', () => {
            overlay.remove();
        }, { once: true });
    });
    
});