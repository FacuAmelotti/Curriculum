// Estado del juego
let gameState = {
    lives: 3,
    score: 0,
    level: 1,
    timeLeft: 60,
    isPlaying: false,
    targets: [],
    gameTimer: null,
    spawnTimer: null
};

// Sistema de Audio
const audioSystem = {
    sounds: {},
    muted: false,
    
    // Inicializar todos los sonidos
    init() {
        const soundFiles = {
            shoot: './src/audio/gameHornerito/game_shoot.mp3',
            levelUp: './src/audio/gameHornerito/game_lvlUp.mp3',
            point: './src/audio/gameHornerito/game_point.mp3',
            victory: './src/audio/gameHornerito/game_victory.mp3',
            error: './src/audio/gameHornerito/game_error.mp3',
            gameOver: './src/audio/gameHornerito/game_gameover.mp3'
        };
        
        // Precargar todos los audios
        Object.keys(soundFiles).forEach(key => {
            this.sounds[key] = new Audio(soundFiles[key]);
            this.sounds[key].preload = 'auto';
            this.sounds[key].volume = 0.7; // Volumen por defecto
            
            // Manejo de errores de carga
            this.sounds[key].onerror = () => {
                console.warn(`No se pudo cargar el audio: ${soundFiles[key]}`);
            };
        });
        
        console.log('Sistema de audio inicializado');
    },
    
    // Reproducir un sonido específico
    play(soundName) {
        if (this.muted) return;
        
        const sound = this.sounds[soundName];
        if (sound) {
            // Reiniciar el audio si ya se está reproduciendo
            sound.currentTime = 0;
            sound.play().catch(error => {
                console.warn(`Error al reproducir ${soundName}:`, error);
            });
        } else {
            console.warn(`Sonido no encontrado: ${soundName}`);
        }
    },
    
    // Alternar mute
    toggleMute() {
        this.muted = !this.muted;
        console.log('Audio', this.muted ? 'silenciado' : 'activado');
    },
    
    // Ajustar volumen general
    setVolume(volume) {
        Object.values(this.sounds).forEach(sound => {
            sound.volume = Math.max(0, Math.min(1, volume));
        });
    }
};

const damageStyles = `
    @keyframes damageFlash {
        0% {
            opacity: 0;
        }
        15% {
            opacity: 1;
        }
        30% {
            opacity: 0.7;
        }
        45% {
            opacity: 0.9;
        }
        60% {
            opacity: 0.4;
        }
        75% {
            opacity: 0.6;
        }
        100% {
            opacity: 0;
        }
    }
    
    @keyframes damageTextPulse {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
        30% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 1;
        }
        60% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
    
    .damage-screen-overlay {
        font-family: Arial, sans-serif;
        user-select: none;
    }
`;

const damageStyleSheet = document.createElement('style');
damageStyleSheet.textContent = damageStyles;
document.head.appendChild(damageStyleSheet);

// Configuración de niveles con imágenes específicas
const levels = {
    1: {
        background: 'url("./src/img/juegoHornerito_nivel_1.png")',
        spawnRate: 1000,
        targetDuration: 3000,
        timeLimit: 30,
        enemyImages: [
            './src/img/enemigo_1.jpg',
            './src/img/enemigo_2.jpg',
            './src/img/enemigo_3.jpg'
        ],
        friendlyImages: [
            './src/img/hornerito_1.png',
            './src/img/hornerito_2.png',
            './src/img/hornerito_3.png',
            './src/img/hornerito_4.png'
        ]
    },
    2: {
        background: 'url("./src/img/juegoHornerito_nivel_2.png")',
        spawnRate: 800,
        targetDuration: 2000,
        timeLimit: 45,
        enemyImages: [
            './src/img/enemigo_4.jpg',
            './src/img/enemigo_5.jpg',
            './src/img/enemigo_6.jpg',
            './src/img/enemigo_7.jpg'
        ],
        friendlyImages: [
            './src/img/hornerito_5.png',
            './src/img/hornerito_6.png',
            './src/img/hornerito_7.png'
        ]
    },
    3: {
        background: 'url("./src/img/juegoHornerito_nivel_3.png")',
        spawnRate: 700,
        targetDuration: 1500,
        timeLimit: 60,
        enemyImages: [
            './src/img/enemigo_8.jpg',
            './src/img/enemigo_9.jpg',
            './src/img/enemigo_10.jpg'
        ],
        friendlyImages: [
            './src/img/hornerito_8.png',
            './src/img/hornerito_9.png'
        ]
    }
};

// Configuración de fondos para cada pantalla
const screenBackgrounds = {
    welcomeScreen: './src/img/hornerito_inicio.png',
    instructionsScreen: './src/img/hornerito_Instrucciones.png',
    nextLevelScreen: './src/img/hornerito_nextLevel.png',
    gameOverScreen: './src/img/hornerito_GameOver.png'
};

// Mensajes para efectos de puntaje
const goodMessages = ['¡Bien hecho!', '¡Genial!', '¡Buen disparo!', '¡Excelente!', '¡Sigue así!'];
const badMessages = ['¡Mal!', '¡Cuidado!', '¡Error!', '¡No dispares a los amigos!'];

// Inicialización con manejo de errores
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('Inicializando juego...');
        audioSystem.init(); // Inicializar sistema de audio
        createParticles();
        setupEventListeners();
        showWelcome();
        console.log('Juego inicializado correctamente');
    } catch (error) {
        console.error('Error al inicializar el juego:', error);
    }
});

// Configurar event listeners
function setupEventListeners() {
    // Botones principales
    document.getElementById('startBtn').addEventListener('click', showInstructions);
    document.getElementById('continueBtn').addEventListener('click', startGame);
    document.getElementById('backToWelcomeBtn').addEventListener('click', showWelcome);
    document.getElementById('backToMenuBtn').addEventListener('click', showWelcome);
    document.getElementById('playAgainBtn').addEventListener('click', restartFromBeginning);
    document.getElementById('backToMainMenuBtn').addEventListener('click', showWelcome);
    document.getElementById('nextLevelBtn').addEventListener('click', nextLevel);
    document.getElementById('backToMainMenu2Btn').addEventListener('click', showWelcome);

    // Botón "Volver" del menú inicial (si existe)
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            console.log('Volver desde menú principal');
        });
    }

    // Área de juego
    document.getElementById('gameArea').addEventListener('click', handleGameAreaClick);

    // Manejo de errores globales
    window.addEventListener('error', function(e) {
        console.error('Error en el juego:', e.error);
    });
}

// Crear partículas de fondo
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Función universal para aplicar fondos de pantalla
function applyScreenBackground(screenId) {
    const screen = document.getElementById(screenId);
    const backgroundImage = screenBackgrounds[screenId];
    
    if (screen && backgroundImage) {
        screen.style.backgroundImage = `url("${backgroundImage}")`;
        screen.style.backgroundSize = 'cover';
        screen.style.backgroundPosition = 'center';
        screen.style.backgroundRepeat = 'no-repeat';
        console.log(`Fondo aplicado a ${screenId}:`, backgroundImage);
    } else if (screen) {
        // Si no hay fondo específico, limpiar el fondo
        screen.style.backgroundImage = '';
        console.log(`No hay fondo configurado para ${screenId}`);
    }
}

// Funciones de navegación mejoradas
function showScreen(screenId) {
    console.log('Mostrando pantalla:', screenId);
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        
        // Aplicar fondo de pantalla
        applyScreenBackground(screenId);
    } else {
        console.error('Pantalla no encontrada:', screenId);
    }
}

function showWelcome() {
    stopGame();
    showScreen('welcomeScreen');
}

function showInstructions() {
    console.log('Mostrando instrucciones');
    showScreen('instructionsScreen');
}

function startGame() {
    console.log('Iniciando juego - Nivel:', gameState.level);
    showScreen('gameScreen');
    initializeLevel();
    gameState.isPlaying = true;
    startGameLoop();
}

// Nueva función para reiniciar completamente el juego
function restartFromBeginning() {
    console.log('Reiniciando juego desde el principio');
    resetGame();
    startGame();
}

function resetGame() {
    console.log('Reseteando estado del juego');
    stopGame(); // Asegurar que todo esté limpio
    gameState.lives = 3;
    gameState.score = 0;
    gameState.level = 1;
    gameState.timeLeft = levels[1].timeLimit;
    gameState.targets = [];
    clearTargets();
    updateHUD();
}

function initializeLevel() {
    console.log('Inicializando nivel:', gameState.level);
    const level = levels[gameState.level] || levels[3];
    gameState.timeLeft = level.timeLimit;
    
    const gameArea = document.getElementById('gameArea');
    if (gameArea) {
        gameArea.style.backgroundImage = level.background;
        gameArea.style.backgroundSize = 'cover';
        gameArea.style.backgroundRepeat = 'no-repeat';
        gameArea.style.backgroundPosition = 'center center';
    }
    
    updateHUD();
}

function startGameLoop() {
    console.log('Iniciando loop del juego');
    
    // Limpiar timers previos por seguridad
    if (gameState.gameTimer) {
        clearInterval(gameState.gameTimer);
    }
    if (gameState.spawnTimer) {
        clearTimeout(gameState.spawnTimer);
    }
    
    // Timer principal del juego
    gameState.gameTimer = setInterval(() => {
        if (!gameState.isPlaying) return;
        
        gameState.timeLeft--;
        updateHUD();
        
        if (gameState.timeLeft <= 0) {
            levelComplete();
        }
    }, 1000);

    // Spawn de objetivos
    spawnTargets();
}

function spawnTargets() {
    if (!gameState.isPlaying) return;

    const level = levels[gameState.level] || levels[3];
    
    // Limpiar timer anterior si existe
    if (gameState.spawnTimer) {
        clearTimeout(gameState.spawnTimer);
    }
    
    gameState.spawnTimer = setTimeout(() => {
        if (gameState.isPlaying) {
            createTarget();
            spawnTargets(); // Recursivo
        }
    }, level.spawnRate + Math.random() * 1000);
}

function createTarget() {
    const isEnemy = Math.random() > 0.3; // 70% enemigos, 30% amistosos
    const gameArea = document.getElementById('gameArea');
    const level = levels[gameState.level] || levels[3];
    
    const target = document.createElement('div');
    target.className = 'target';
    target.dataset.type = isEnemy ? 'enemy' : 'friendly';
    
    // Posición aleatoria (evitar bordes)
    const margin = 100;
    const maxX = Math.max(gameArea.clientWidth - 80 - margin, 80);
    const maxY = Math.max(gameArea.clientHeight - 80 - margin, 80);
    target.style.left = (margin + Math.random() * (maxX - margin)) + 'px';
    target.style.top = (margin + Math.random() * (maxY - margin)) + 'px';
    
    // Crear imagen del objetivo
    const img = document.createElement('img');
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.borderRadius = '50%';
    img.style.objectFit = 'cover';
    img.style.border = '3px solid ' + (isEnemy ? '#ff6b6b' : '#51cf66');
    img.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    
    // Seleccionar imagen aleatoria según el tipo y nivel
    const imageArray = isEnemy ? level.enemyImages : level.friendlyImages;
    const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
    img.src = randomImage;
    
    // Fallback si la imagen no carga
    img.onerror = function() {
        const fallbackDiv = document.createElement('div');
        fallbackDiv.style.width = '100%';
        fallbackDiv.style.height = '100%';
        fallbackDiv.style.borderRadius = '50%';
        fallbackDiv.style.display = 'flex';
        fallbackDiv.style.alignItems = 'center';
        fallbackDiv.style.justifyContent = 'center';
        fallbackDiv.style.fontSize = '40px';
        fallbackDiv.style.background = isEnemy ? 
            'radial-gradient(circle, #ff6b6b 0%, #e03131 100%)' : 
            'radial-gradient(circle, #51cf66 0%, #37b24d 100%)';
        fallbackDiv.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        
        const emoji = isEnemy ? '👹' : '🐦';
        fallbackDiv.textContent = emoji;
        
        target.replaceChild(fallbackDiv, img);
    };
    
    target.appendChild(img);
    
    // Timer visual circular
    const timer = document.createElement('div');
    timer.className = 'target-timer';
    timer.style.position = 'absolute';
    timer.style.top = '-10px';
    timer.style.left = '-10px';
    timer.style.width = '100px';
    timer.style.height = '100px';
    timer.style.border = '4px solid transparent';
    timer.style.borderRadius = '50%';
    timer.style.borderTopColor = isEnemy ? '#ff6b6b' : '#51cf66';
    timer.style.transformOrigin = 'center';
    timer.style.transform = 'rotate(0deg)';
    timer.style.transition = 'none';
    
    target.appendChild(timer);
    
    // Animación del timer circular
    let startTime = Date.now();
    let animationFrame;
    
    function animateTimer() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / level.targetDuration;
        
        if (progress >= 1) {
            return;
        }
        
        const rotation = progress * 360;
        timer.style.transform = `rotate(${rotation}deg)`;
        
        const opacity = Math.max(0.3, 1 - progress);
        timer.style.borderTopColor = isEnemy ? 
            `rgba(255, 107, 107, ${opacity})` : 
            `rgba(81, 207, 102, ${opacity})`;
        
        animationFrame = requestAnimationFrame(animateTimer);
    }
    
    animationFrame = requestAnimationFrame(animateTimer);
    
    // Event listener para click
    target.addEventListener('click', (e) => {
        e.stopPropagation();
        cancelAnimationFrame(animationFrame);
        hitTarget(target);
    });
    
    gameArea.appendChild(target);
    gameState.targets.push(target);
    
    // Auto-remover después del tiempo límite
    setTimeout(() => {
        if (target.parentNode && gameState.isPlaying) {
            cancelAnimationFrame(animationFrame);
            if (isEnemy) {
                loseLife("¡No eliminaste al enemigo a tiempo!");
            }
            removeTarget(target);
        }
    }, level.targetDuration);
}

// Crear efecto de mensaje de puntaje
function createScoreMessage(x, y, message, isGood) {
    const messageEl = document.createElement('div');
    messageEl.className = 'score-message';
    messageEl.textContent = message;
    messageEl.style.position = 'fixed';
    messageEl.style.left = (x - 50) + 'px';
    messageEl.style.top = y + 'px';
    messageEl.style.color = isGood ? '#4CAF50' : '#F44336';
    messageEl.style.fontSize = '20px';
    messageEl.style.fontWeight = 'bold';
    messageEl.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
    messageEl.style.pointerEvents = 'none';
    messageEl.style.zIndex = '10000';
    messageEl.style.transform = 'translateX(-50%)';
    messageEl.style.animation = 'scoreFloat 1.5s ease-out forwards';
    
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.parentNode.removeChild(messageEl);
        }
    }, 1500);
}

function hitTarget(target) {
    if (!gameState.isPlaying) return;
    
    const isEnemy = target.dataset.type === 'enemy';
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // ¡NUEVO! Reproducir sonido de disparo siempre
    audioSystem.play('shoot');
    
    if (isEnemy) {
        // Buen disparo - eliminar enemigo
        gameState.score += 10;
        const goodMessage = goodMessages[Math.floor(Math.random() * goodMessages.length)];
        createScoreMessage(centerX, centerY, goodMessage, true);
        createHitEffect(centerX, centerY, 'good');
        
        // ¡NUEVO! Reproducir sonido de punto
        audioSystem.play('point');
        
        vibrate([50]);
    } else {
        // Mal disparo - disparaste al amigo
        const badMessage = badMessages[Math.floor(Math.random() * badMessages.length)];
        createScoreMessage(centerX, centerY, badMessage, false);
        loseLife("¡Disparaste a un hornerito!");
        createHitEffect(centerX, centerY, 'bad');
        vibrate([100, 50, 100]);
    }
    
    removeTarget(target);
    updateHUD();
}

function handleGameAreaClick(e) {
    if (!gameState.isPlaying) return;
    
    // Crear efecto de disparo si no se clickeó un objetivo
    if (!e.target.closest('.target')) {
        // ¡NUEVO! Reproducir sonido de disparo también para disparos al vacío
        audioSystem.play('shoot');
        createHitEffect(e.clientX, e.clientY, 'miss');
        vibrate([20]);
    }
}

function createHitEffect(x, y, type) {
    const effect = document.createElement('div');
    effect.className = `hit-effect ${type}`;
    effect.style.position = 'fixed';
    effect.style.left = (x - 10) + 'px';
    effect.style.top = (y - 10) + 'px';
    effect.style.width = '20px';
    effect.style.height = '20px';
    effect.style.borderRadius = '50%';
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '9999';
    
    if (type === 'good') {
        effect.style.background = 'radial-gradient(circle, #4CAF50, #2E7D32)';
        effect.style.boxShadow = '0 0 20px #4CAF50';
    } else if (type === 'bad') {
        effect.style.background = 'radial-gradient(circle, #F44336, #C62828)';
        effect.style.boxShadow = '0 0 20px #F44336';
    } else {
        effect.style.background = 'radial-gradient(circle, #FFC107, #F57C00)';
        effect.style.boxShadow = '0 0 15px #FFC107';
    }
    
    effect.style.animation = 'hitEffect 0.6s ease-out forwards';
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        if (effect.parentNode) {
            effect.parentNode.removeChild(effect);
        }
    }, 600);
}

function removeTarget(target) {
    if (target && target.parentNode) {
        target.parentNode.removeChild(target);
    }
    gameState.targets = gameState.targets.filter(t => t !== target);
}

function clearTargets() {
    gameState.targets.forEach(target => {
        if (target && target.parentNode) {
            target.parentNode.removeChild(target);
        }
    });
    gameState.targets = [];
}

function loseLife(reason) {
    gameState.lives--;
    updateHUD();
    
    // ¡NUEVO! Reproducir sonido de error
    audioSystem.play('error');
    
    // Crear el efecto de daño de pantalla completa
    createDamageScreenEffect();
    
    if (gameState.lives <= 0) {
        gameOver(reason);
    }
}

function updateHUD() {
    const livesEl = document.getElementById('livesCount');
    const scoreEl = document.getElementById('score');
    const timeEl = document.getElementById('timeLeft');
    const levelEl = document.getElementById('currentLevel');
    
    if (livesEl) livesEl.textContent = gameState.lives;
    if (scoreEl) scoreEl.textContent = gameState.score;
    if (timeEl) timeEl.textContent = gameState.timeLeft;
    if (levelEl) levelEl.textContent = gameState.level;
}

function levelComplete() {
    console.log('Nivel completado:', gameState.level);
    stopGame();
    
    // ¡NUEVO! Reproducir sonido de nivel completado
    audioSystem.play('levelUp');
    
    const messageEl = document.getElementById('levelCompleteMessage');
    if (messageEl) {
        messageEl.textContent = `¡Completaste el nivel ${gameState.level}! Puntuación: ${gameState.score}`;
    }
    
    showScreen('nextLevelScreen');
}

function nextLevel() {
    console.log('Avanzando al siguiente nivel');
    gameState.level++;
    
    if (levels[gameState.level]) {
        console.log('Iniciando nivel:', gameState.level);
        startGame(); // Usar startGame() que ya maneja todo correctamente
    } else {
        // Juego completado - ¡NUEVO! Reproducir sonido de victoria
        audioSystem.play('victory');
        gameOver("¡Felicitaciones! ¡Completaste todos los niveles!");
    }
}

function gameOver(reason) {
    console.log('Game Over:', reason);
    stopGame();
    
    // ¡NUEVO! Reproducir sonido de game over solo si no es victoria
    if (!reason.includes('Felicitaciones')) {
        audioSystem.play('gameOver');
    }
    
    const messageEl = document.getElementById('gameOverMessage');
    const scoreEl = document.getElementById('finalScore');
    
    if (messageEl) messageEl.textContent = reason;
    if (scoreEl) scoreEl.textContent = gameState.score;
    
    showScreen('gameOverScreen');
}

function stopGame() {
    console.log('Deteniendo juego');
    gameState.isPlaying = false;
    
    if (gameState.gameTimer) {
        clearInterval(gameState.gameTimer);
        gameState.gameTimer = null;
    }
    
    if (gameState.spawnTimer) {
        clearTimeout(gameState.spawnTimer);
        gameState.spawnTimer = null;
    }
    
    clearTargets();
}

// Efectos de sonido simulados con vibración (en dispositivos móviles)
function vibrate(pattern) {
    if (navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

// Función para crear el efecto de daño de pantalla completa
function createDamageScreenEffect() {
    // Crear el div de daño
    const damageOverlay = document.createElement('div');
    damageOverlay.className = 'damage-screen-overlay';
    damageOverlay.style.position = 'fixed';
    damageOverlay.style.top = '0';
    damageOverlay.style.left = '0';
    damageOverlay.style.width = '100vw';
    damageOverlay.style.height = '100vh';
    damageOverlay.style.background = 'radial-gradient(circle, rgba(255,0,0,0.8) 0%, rgba(139,0,0,0.9) 50%, rgba(0,0,0,0.7) 100%)';
    damageOverlay.style.zIndex = '99999';
    damageOverlay.style.pointerEvents = 'none';
    damageOverlay.style.opacity = '0';
    damageOverlay.style.animation = 'damageFlash 1s ease-out forwards';
    
    // Opcional: Agregar texto de daño en el centro
    const damageText = document.createElement('div');
    damageText.style.position = 'absolute';
    damageText.style.top = '50%';
    damageText.style.left = '50%';
    damageText.style.transform = 'translate(-50%, -50%)';
    damageText.style.color = 'white';
    damageText.style.fontSize = '4rem';
    damageText.style.fontWeight = 'bold';
    damageText.style.textShadow = '0 0 20px rgba(255,0,0,0.8)';
    damageText.style.animation = 'damageTextPulse 1s ease-out forwards';
    damageText.textContent = '💥';
    
    damageOverlay.appendChild(damageText);
    document.body.appendChild(damageOverlay);
    
    // Remover el efecto después de la animación
    setTimeout(() => {
        if (damageOverlay.parentNode) {
            damageOverlay.parentNode.removeChild(damageOverlay);
        }
    }, 1000);
}

// Prevenir zoom en doble tap en móviles
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Agregar estilos CSS para las animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes scoreFloat {
        0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0px) scale(1);
        }
        50% {
            opacity: 1;
            transform: translateX(-50%) translateY(-30px) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-60px) scale(0.8);
        }
    }
    
    @keyframes hitEffect {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(2);
            opacity: 0.8;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
    
    .score-message {
        font-family: Arial, sans-serif;
        user-select: none;
    }
`;
document.head.appendChild(style);

// Debug
console.log('Script cargado correctamente con sistema de audio');

