 // Sistema de control de audio mejorado
        const audioControlSystem = {
            sfxVolume: 70,
            musicVolume: 50,
            sfxMuted: false,
            musicMuted: false,
            panelCollapsed: false,

            // Inicializar el sistema
            init() {
                this.setupEventListeners();
                this.updateUI();
                console.log('Sistema de control de audio inicializado');
            },

            // Configurar event listeners
            setupEventListeners() {
                // Toggle del panel
                document.getElementById('audioToggleBtn').addEventListener('click', () => {
                    this.togglePanel();
                });

                // Control de efectos de sonido
                document.getElementById('sfxMuteBtn').addEventListener('click', () => {
                    this.toggleSFXMute();
                });

                document.getElementById('sfxVolumeSlider').addEventListener('input', (e) => {
                    this.setSFXVolume(parseInt(e.target.value));
                });

                // Control de música
                document.getElementById('musicMuteBtn').addEventListener('click', () => {
                    this.toggleMusicMute();
                });

                document.getElementById('musicVolumeSlider').addEventListener('input', (e) => {
                    this.setMusicVolume(parseInt(e.target.value));
                });
            },

            // Toggle del panel
            togglePanel() {
                this.panelCollapsed = !this.panelCollapsed;
                const panel = document.getElementById('audioControlPanel');
                const toggleBtn = document.getElementById('audioToggleBtn');
                
                if (this.panelCollapsed) {
                    panel.classList.add('collapsed');
                    toggleBtn.textContent = '🎵';
                    toggleBtn.title = 'Mostrar controles de audio';
                } else {
                    panel.classList.remove('collapsed');
                    toggleBtn.textContent = '🎵';
                    toggleBtn.title = 'Ocultar controles de audio';
                }
            },

            // Control de efectos de sonido
            toggleSFXMute() {
                this.sfxMuted = !this.sfxMuted;
                this.updateUI();
                this.onSFXSettingsChange();
            },

            setSFXVolume(volume) {
                this.sfxVolume = Math.max(0, Math.min(100, volume));
                if (this.sfxVolume > 0) {
                    this.sfxMuted = false;
                }
                this.updateUI();
                this.onSFXSettingsChange();
            },

            // Control de música
            toggleMusicMute() {
                this.musicMuted = !this.musicMuted;
                this.updateUI();
                this.onMusicSettingsChange();
            },

            setMusicVolume(volume) {
                this.musicVolume = Math.max(0, Math.min(100, volume));
                if (this.musicVolume > 0) {
                    this.musicMuted = false;
                }
                this.updateUI();
                this.onMusicSettingsChange();
            },

            // Actualizar UI
            updateUI() {
                // Efectos de sonido
                const sfxMuteBtn = document.getElementById('sfxMuteBtn');
                const sfxSlider = document.getElementById('sfxVolumeSlider');
                const sfxIndicator = document.getElementById('sfxVolumeIndicator');

                if (this.sfxMuted || this.sfxVolume === 0) {
                    sfxMuteBtn.textContent = '🔇';
                    sfxMuteBtn.classList.add('muted');
                } else {
                    sfxMuteBtn.textContent = '🔊';
                    sfxMuteBtn.classList.remove('muted');
                }

                sfxSlider.value = this.sfxVolume;
                sfxIndicator.textContent = `${this.sfxVolume}%`;

                // Música
                const musicMuteBtn = document.getElementById('musicMuteBtn');
                const musicSlider = document.getElementById('musicVolumeSlider');
                const musicIndicator = document.getElementById('musicVolumeIndicator');

                if (this.musicMuted || this.musicVolume === 0) {
                    musicMuteBtn.textContent = '🔇';
                    musicMuteBtn.classList.add('muted');
                } else {
                    musicMuteBtn.textContent = '🎵';
                    musicMuteBtn.classList.remove('muted');
                }

                musicSlider.value = this.musicVolume;
                musicIndicator.textContent = `${this.musicVolume}%`;
            },

            // Callbacks para integración con el juego
            onSFXSettingsChange() {
                const effectiveVolume = this.sfxMuted ? 0 : (this.sfxVolume / 100);
                console.log('SFX Volume changed:', effectiveVolume);
                
                // Aquí integrarías con tu sistema de audio del juego
                if (typeof audioSystem !== 'undefined') {
                    audioSystem.setSFXVolume(effectiveVolume);
                    audioSystem.sfxMuted = this.sfxMuted;
                }
            },

            onMusicSettingsChange() {
                const effectiveVolume = this.musicMuted ? 0 : (this.musicVolume / 100);
                console.log('Music Volume changed:', effectiveVolume);
                
                // Aquí integrarías con tu sistema de música del juego
                if (typeof audioSystem !== 'undefined') {
                    audioSystem.setMusicVolume(effectiveVolume);
                    audioSystem.musicMuted = this.musicMuted;
                }
            },

            // Métodos públicos para uso externo
            getSFXVolume() {
                return this.sfxMuted ? 0 : (this.sfxVolume / 100);
            },

            getMusicVolume() {
                return this.musicMuted ? 0 : (this.musicVolume / 100);
            },

            isSFXMuted() {
                return this.sfxMuted;
            },

            isMusicMuted() {
                return this.musicMuted;
            }
        };

        // Inicializar cuando el DOM esté listo
        document.addEventListener('DOMContentLoaded', function() {
            audioControlSystem.init();
        });

        // Demo: Simular cambios de volumen
        setInterval(() => {
            console.log('Current SFX Volume:', audioControlSystem.getSFXVolume());
            console.log('Current Music Volume:', audioControlSystem.getMusicVolume());
        }, 5000);