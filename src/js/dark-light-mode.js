// light-dark-mode.js
class ThemeToggle {
    constructor() {
        this.isDarkMode = true; // SIEMPRE empezar en modo oscuro
        this.init();
    }

    init() {
        // Verificar si ya existe un botón de toggle para evitar duplicados
        if (document.getElementById('theme-toggle')) {
            return;
        }
        
        // FORZAR modo oscuro ANTES de crear cualquier elemento
        this.forceInitialDarkMode();
        
        this.createToggleButton();
        this.loadSavedTheme();
        this.addEventListeners();
    }

    forceInitialDarkMode() {
        // Forzar modo oscuro inmediatamente
        this.isDarkMode = true;
        document.body.classList.remove('light-mode');
        
        // Guardar como preferencia predeterminada
        try {
            localStorage.setItem('theme-preference', 'dark');
        } catch (e) {
            console.warn('No se pudo guardar la preferencia de tema:', e);
        }
    }

    createToggleButton() {
        // Crear el botón de toggle
        const toggleButton = document.createElement('button');
        toggleButton.id = 'theme-toggle';
        toggleButton.className = 'theme-toggle';
        
        // HTML interno del botón con iconos
        toggleButton.innerHTML = `
            <div class="toggle-track">
                <div class="toggle-thumb">
                    <svg class="sun-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="5"/>
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                    <svg class="moon-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                </div>
            </div>
        `;

        // Agregar al nav existente
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.appendChild(toggleButton);
        }

        this.addToggleStyles();
    }

    addToggleStyles() {
        // Verificar si ya existen los estilos para evitar duplicados
        if (document.getElementById('theme-toggle-styles')) {
            return;
        }

        const styles = `
            .theme-toggle {
                background: transparent;
                border: 1px solid rgba(160, 160, 160, 0.3);
                border-radius: 20px;
                padding: 0;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .theme-toggle:hover {
                border-color: rgba(160, 160, 160, 0.5);
                transform: translateY(-1px);
            }

            .toggle-track {
                width: 50px;
                height: 26px;
                background: rgba(74, 74, 74, 0.3);
                border-radius: 20px;
                position: relative;
                transition: background-color 0.3s ease;
            }

            .toggle-thumb {
                width: 20px;
                height: 20px;
                background: #4a4a4a;
                border-radius: 50%;
                position: absolute;
                top: 3px;
                left: 3px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            }

            .theme-toggle.light .toggle-thumb {
                transform: translateX(24px);
                background: #f3f3f3;
                color: #2a2a2a;
            }

            .theme-toggle.light .toggle-track {
                background: rgba(243, 243, 243, 0.3);
            }

            .sun-icon, .moon-icon {
                position: absolute;
                transition: all 0.3s ease;
                color: #e5e5e5;
            }

            .theme-toggle.light .sun-icon,
            .theme-toggle.light .moon-icon {
                color: #2a2a2a;
            }

            .theme-toggle .sun-icon {
                opacity: 0;
                transform: rotate(180deg) scale(0);
            }

            .theme-toggle .moon-icon {
                opacity: 1;
                transform: rotate(0deg) scale(1);
            }

            .theme-toggle.light .sun-icon {
                opacity: 1;
                transform: rotate(0deg) scale(1);
            }

            .theme-toggle.light .moon-icon {
                opacity: 0;
                transform: rotate(-180deg) scale(0);
            }

            /* Tema claro */
            body.light-mode {
                background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                color: #2a2a2a;
            }

            body.light-mode::before {
                background-image: 
                    linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
            }

            body.light-mode .particle {
                background: radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.05) 100%);
                box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
            }

            body.light-mode .header {
                background: rgba(255, 255, 255, 0.9);
                backdrop-filter: blur(20px);
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }

            body.light-mode .logo {
                color:rgb(182, 179, 179);
            }

            body.light-mode .nav-links a {
                color:rgb(173, 173, 173);
            }

            body.light-mode .nav-links a:hover {
                color: #2a2a2a;
            }

            body.light-mode .nav-links a::after {
                background: #6a6a6a;
            }

            body.light-mode .hero h1 {
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #4a4a4a 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            body.light-mode .hero-title-accent {
                background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            body.light-mode .hero-name h1 {
                background: linear-gradient(135deg, #4a4a4a 0%, #2d2d2d 50%, #1a1a1a 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            body.light-mode .hero-name .hero-title-accent {
                background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            body.light-mode .hero-subtitle,
            body.light-mode .hero-credentials {
                color:rgb(85, 85, 85);
            }

            body.light-mode .hero-description {
                color:rgb(65, 65, 65);
            }

            body.light-mode .section h2 {
                color: #2a2a2a;
            }

            body.light-mode .section-subtitle {
                color:rgb(66, 66, 66);
            }

            body.light-mode .section-description {
                color:rgb(59, 59, 59);
            }

            body.light-mode .card {
                background: rgba(255, 255, 255, 0.7);
                border: 1px solid rgba(0, 0, 0, 0.1);
            }

            body.light-mode .card:hover {
                background: rgba(255, 255, 255, 0.9);
                border-color: rgba(0, 0, 0, 0.15);
            }

            body.light-mode .card::before {
                background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
            }

            body.light-mode .card-number {
                color: #7a7a7a;
            }

            body.light-mode .card h3 {
                color: #2a2a2a;
            }

            body.light-mode .card p {
                color: #5a5a5a;
            }

            body.light-mode .cta-primary {
                background: #2a2a2a;
                color: #ffffff;
                border: 1px solid #3a3a3a;
            }

            body.light-mode .cta-primary:hover {
                background: #3a3a3a;
            }

            body.light-mode .cta-secondary {
                color: #5a5a5a;
                border: 1px solid rgba(0, 0, 0, 0.2);
            }

            body.light-mode .cta-secondary:hover {
                background: rgba(0, 0, 0, 0.05);
                border-color: rgba(0, 0, 0, 0.3);
                color: #2a2a2a;
            }

            body.light-mode .profile-photo {
                border: 2px solid #e0e0e0;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                filter: brightness(1.1) contrast(1.05);
            }

            body.light-mode .profile-photo:hover {
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
                border-color: #d0d0d0;
                filter: brightness(1.2) contrast(1.05);
            }

            
            body.light-mode .hamburger span {
 
                background: 0 0 10px rgba(0, 0, 0, 0.3);
            }

            body.light-mode .stat {
                background: rgba(255, 255, 255, 0.6);
                border: 1px solid rgba(0, 0, 0, 0.08);
            }

            body.light-mode .stat-number {
                color: #2a2a2a;
            }

            body.light-mode .stat-label {
                color: #7a7a7a;
            }

            body.light-mode .tech-item {
                background: rgba(255, 255, 255, 0.7);
                border: 1px solid rgba(0, 0, 0, 0.1);
            }

            body.light-mode .tech-item:hover {
                background: rgba(255, 255, 255, 0.9);
                border-color: rgba(0, 0, 0, 0.15);
            }

            body.light-mode .tech-icon {
                background: #e5e5e5;
                color: #2a2a2a;
            }

            body.light-mode .tech-name {
                color: #5a5a5a;
            }

            body.light-mode .project::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at left, 
                rgba(255, 255, 255, 0.96) 0%, 
                transparent 70%);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: -1;
            }

            body.light-mode .experience-item {
                background: rgba(255, 255, 255, 0.6);
                border: 1px solid rgba(0, 0, 0, 0.1);
            }

            body.light-mode .experience-title {
                color: #2a2a2a;
            }

            body.light-mode .experience-period {
                color:rgb(87, 87, 87);
            }

            body.light-mode .experience-company,
            body.light-mode .experience-description {
                color:rgb(51, 51, 51);
            }

            body.light-mode .experience-tasks li {
                color:rgb(68, 68, 68);
            }

            body.light-mode .experience-tasks li::before {
                color:rgb(83, 83, 83);
            }

            body.light-mode .project {
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }

            body.light-mode .project-title {
                color: #2a2a2a;
            }

            body.light-mode .project-details {
                color: #7a7a7a;
            }

            body.light-mode .project-link {
                color: #5a5a5a;
            }

            body.light-mode .project-link:hover {
                color: #2a2a2a;
            }

            body.light-mode .footer {
                background: rgba(248, 249, 250, 0.8);
                border-top: 1px solid rgba(0, 0, 0, 0.1);
            }

            body.light-mode .footer p {
                color:rgb(90, 90, 90);
            }

            body.light-mode .footer-links a {
                color:rgb(65, 65, 65);
            }

            body.light-mode .footer-links a:hover {
                color: #2a2a2a;
            }

            /* Transiciones suaves */
            body {
                transition: background 0.4s ease, color 0.4s ease;
            }

            .header, .card, .stat, .tech-item, .experience-item, .footer {
                transition: all 0.4s ease;
            }

            h1, h2, h3, p, a, .hero-subtitle, .hero-credentials, .hero-description {
                transition: color 0.4s ease;
            }
        `;

        // Agregar estilos al head con ID para evitar duplicados
        const styleSheet = document.createElement('style');
        styleSheet.id = 'theme-toggle-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    addEventListeners() {
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
        }

        // NO escuchar cambios del sistema para mantener control total
        // Comentado para evitar cambios automáticos
        // if (window.matchMedia) {
        //     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        //     mediaQuery.addListener(() => this.handleSystemThemeChange());
        // }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this.applyTheme();
        this.saveTheme();
        this.addToggleAnimation();
    }

    applyTheme() {
        const body = document.body;
        const toggleButton = document.getElementById('theme-toggle');

        if (this.isDarkMode) {
            body.classList.remove('light-mode');
            toggleButton?.classList.remove('light');
        } else {
            body.classList.add('light-mode');
            toggleButton?.classList.add('light');
        }
    }

    addToggleAnimation() {
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                toggleButton.style.transform = 'scale(1)';
            }, 150);
        }
    }

    saveTheme() {
        try {
            localStorage.setItem('theme-preference', this.isDarkMode ? 'dark' : 'light');
        } catch (e) {
            console.warn('No se pudo guardar la preferencia de tema:', e);
        }
    }

    loadSavedTheme() {
        try {
            const savedTheme = localStorage.getItem('theme-preference');
            
            // CAMBIO PRINCIPAL: Solo respetar la preferencia guardada si es modo claro
            // Si no hay preferencia o es modo oscuro, mantener modo oscuro
            if (savedTheme === 'light') {
                this.isDarkMode = false;
            } else {
                // SIEMPRE defaultear a modo oscuro
                this.isDarkMode = true;
                // Actualizar localStorage para mantener consistencia
                localStorage.setItem('theme-preference', 'dark');
            }
            
            this.applyTheme();
        } catch (e) {
            console.warn('No se pudo cargar la preferencia de tema:', e);
            this.isDarkMode = true; // Fallback SIEMPRE al modo oscuro
            this.applyTheme();
        }
    }

    handleSystemThemeChange() {
        // DESHABILITADO: No cambiar automáticamente con el sistema
        // La página siempre debe iniciar en modo oscuro
        console.log('Cambio de tema del sistema ignorado - manteniendo control manual');
    }

    // Método público para cambiar tema programáticamente
    setTheme(theme) {
        if (theme === 'dark' || theme === 'light') {
            this.isDarkMode = theme === 'dark';
            this.applyTheme();
            this.saveTheme();
        }
    }

    // Método público para obtener tema actual
    getCurrentTheme() {
        return this.isDarkMode ? 'dark' : 'light';
    }

    // Método público para forzar modo oscuro
    forceDarkMode() {
        this.isDarkMode = true;
        this.applyTheme();
        this.saveTheme();
    }
}

// Inicialización única y segura con modo oscuro forzado
(function() {
    // Evitar múltiples inicializaciones
    if (window.themeToggle) {
        return;
    }

    // FORZAR modo oscuro INMEDIATAMENTE antes de cualquier cosa
    document.body.classList.remove('light-mode');

    function initThemeToggle() {
        if (!window.themeToggle) {
            window.themeToggle = new ThemeToggle();
            // Asegurar que esté en modo oscuro después de la inicialización
            window.themeToggle.forceDarkMode();
        }
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        // El DOM ya está listo
        initThemeToggle();
    }
})();