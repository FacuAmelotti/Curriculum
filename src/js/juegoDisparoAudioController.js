// Sistema de control de panel de audio simplificado
const audioControlSystem = {
    panelOpen: false, // Inicia cerrado

    // Inicializar el sistema
    init() {
        this.setupEventListeners();
        this.updateUI();
        console.log('Sistema de panel de audio inicializado');
    },

    // Configurar event listeners
    setupEventListeners() {
        // Toggle del panel
        const toggleBtn = document.getElementById('audioToggleBtn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Evitar que se cierre inmediatamente
                this.togglePanel();
            });
        }

        // Cerrar panel al hacer clic fuera
        document.addEventListener('click', (e) => {
            const panel = document.getElementById('audioControlPanel');
            if (panel && !panel.contains(e.target) && this.panelOpen) {
                this.closePanel();
            }
        });

        // Evitar que el panel se cierre al hacer clic dentro de él
        const audioControls = document.getElementById('audioControls');
        if (audioControls) {
            audioControls.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    },

    // Toggle del panel
    togglePanel() {
        if (this.panelOpen) {
            this.closePanel();
        } else {
            this.openPanel();
        }
    },

    // Abrir panel
    openPanel() {
        this.panelOpen = true;
        this.updateUI();
        console.log('Panel de audio abierto');
    },

    // Cerrar panel
    closePanel() {
        this.panelOpen = false;
        this.updateUI();
        console.log('Panel de audio cerrado');
    },

    // Actualizar UI
    updateUI() {
        const controls = document.getElementById('audioControls');
        const toggleBtn = document.getElementById('audioToggleBtn');
        
        if (controls && toggleBtn) {
            if (this.panelOpen) {
                controls.classList.add('show');
                toggleBtn.title = 'Ocultar controles de audio';
            } else {
                controls.classList.remove('show');
                toggleBtn.title = 'Mostrar controles de audio';
            }
        }
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Pequeño delay para asegurar que todo el DOM esté cargado
    setTimeout(() => {
        audioControlSystem.init();
    }, 100);
});