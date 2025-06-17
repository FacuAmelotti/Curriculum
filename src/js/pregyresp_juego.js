// Datos de ejemplo para las preguntas (se cargarán desde JSON)
const questionsData = {};

// Variables del juego
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let gameStarted = false;
let correctAnswers = 0;
let incorrectAnswers = 0;
let usedQuestions = {}; // Nuevo: Rastrea las preguntas ya utilizadas por dificultad

let backgroundMusic = null;
let isMuted = false;
let currentVolume = 0.5; // Cambiado de 0.3 a 0.5 para coincidir con HTML

// Efectos de sonido
const audioEffects = {
    click: null,
    correct: null,
    incorrect: null,
    gameStart: null,
    gameEnd: null
};

// Inicialización del sistema de audio
function initializeAudioSystem() {
    // Inicializar música de fondo
    backgroundMusic = new Audio('./src/audio/himnoArg.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.volume = currentVolume;
    
    // Inicializar efectos de sonido
    audioEffects.click = new Audio('./src/audio/click.mp3');
    audioEffects.correct = new Audio('./src/audio/correct.mp3');
    audioEffects.incorrect = new Audio('./src/audio/incorrect.mp3');
    audioEffects.gameStart = new Audio('./src/audio/game-start.mp3');
    audioEffects.gameEnd = new Audio('./src/audio/game-end.mp3');
    
    // Configurar volumen de efectos
    Object.values(audioEffects).forEach(audio => {
        if (audio) {
            audio.volume = currentVolume * 0.7; // Efectos más suaves que la música
        }
    });
    
    // Configurar controles de audio
    setupAudioControls();
    
    // Intentar reproducir música de fondo (con manejo de políticas de autoplay)
    playBackgroundMusic();
}

// Configurar controles de audio
function setupAudioControls() {
    // CORREGIDO: Usar 'muteBtn' que es el ID correcto en el HTML
    const musicBtn = document.getElementById('muteBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    
    if (musicBtn) {
        musicBtn.addEventListener('click', toggleMute);
        updateMusicButton();
    }
    
    if (volumeSlider) {
        // CORREGIDO: El slider en HTML va de 0 a 1, no de 0 a 100
        volumeSlider.value = currentVolume;
        volumeSlider.addEventListener('input', (e) => {
            setVolume(parseFloat(e.target.value));
        });
    }
}

// Reproducir música de fondo
function playBackgroundMusic() {
    if (backgroundMusic && !isMuted) {
        backgroundMusic.play().catch(error => {
            console.log('Autoplay bloqueado, la música se iniciará con la primera interacción del usuario');
            // Agregar listener para primera interacción
            document.addEventListener('click', enableAudioOnFirstClick, { once: true });
        });
    }
}

// Habilitar audio en el primer clic (para políticas de autoplay)
function enableAudioOnFirstClick() {
    if (backgroundMusic && !isMuted) {
        backgroundMusic.play().catch(error => {
            console.log('No se pudo reproducir la música de fondo:', error);
        });
    }
}
// Alternar silencio
function toggleMute() {
    isMuted = !isMuted;
    
    if (isMuted) {
        // Silenciar todo
        if (backgroundMusic) {
            backgroundMusic.pause();
        }
    } else {
        // Reactivar música
        if (backgroundMusic) {
            backgroundMusic.play().catch(error => {
                console.log('Error al reanudar música:', error);
            });
        }
    }
    
    updateMusicButton();
    playClickSound();
}


// Actualizar apariencia del botón de música
function updateMusicButton() {
    // CORREGIDO: Usar el ID correcto 'muteBtn'
    const musicBtn = document.getElementById('muteBtn');
    if (musicBtn) {
        // CORREGIDO: Usar los emojis correctos
        musicBtn.innerHTML = isMuted ? '🔇' : '🔊';
        musicBtn.classList.toggle('muted', isMuted);
    }
}


// Ajustar volumen
function setVolume(volume) {
    currentVolume = Math.max(0, Math.min(1, volume));
    
    // Aplicar volumen a música de fondo
    if (backgroundMusic) {
        backgroundMusic.volume = currentVolume;
    }
    
    // Aplicar volumen a efectos (un poco más bajo)
    Object.values(audioEffects).forEach(audio => {
        if (audio) {
            audio.volume = currentVolume * 0.7;
        }
    });
    
    // CORREGIDO: NO pausar la música cuando el volumen es 0
    // Solo cambiar el estado de mute si es necesario
    if (currentVolume === 0 && !isMuted) {
        isMuted = true;
        updateMusicButton();
    } else if (currentVolume > 0 && isMuted) {
        isMuted = false;
        // CORREGIDO: Solo reproducir si no está ya reproduciéndose
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(console.log);
        }
        updateMusicButton();
    }
}

// Reproducir efectos de sonido
function playClickSound() {
    if (!isMuted && audioEffects.click && currentVolume > 0) {
        audioEffects.click.currentTime = 0;
        audioEffects.click.play().catch(console.log);
    }
}

function playCorrectSound() {
    if (!isMuted && audioEffects.correct && currentVolume > 0) {
        audioEffects.correct.currentTime = 0;
        audioEffects.correct.play().catch(console.log);
    }
}

function playIncorrectSound() {
    if (!isMuted && audioEffects.incorrect && currentVolume > 0) {
        audioEffects.incorrect.currentTime = 0;
        audioEffects.incorrect.play().catch(console.log);
    }
}

function playGameStartSound() {
    if (!isMuted && audioEffects.gameStart && currentVolume > 0) {
        audioEffects.gameStart.currentTime = 0;
        audioEffects.gameStart.play().catch(console.log);
    }
}

function playGameEndSound() {
    if (!isMuted && audioEffects.gameEnd && currentVolume > 0) {
        audioEffects.gameEnd.currentTime = 0;
        audioEffects.gameEnd.play().catch(console.log);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', async function() {
    createParticles();
    setupCursor();
    setupBackButton();
    
    // Inicializar sistema de audio
    initializeAudioSystem();
    
    // Cargar preguntas desde archivos JSON
    await loadAllQuestions();
    
    // Generar más preguntas para completar 20 por cada nivel
    generateMoreQuestions();
    
    // Inicializar el rastreador de preguntas usadas
    initializeUsedQuestions();
});

// Función para inicializar el rastreador de preguntas usadas
function initializeUsedQuestions() {
    const difficulties = ['facil', 'normal', 'dificil'];
    difficulties.forEach(difficulty => {
        usedQuestions[difficulty] = new Set(); // Usar Set para búsqueda rápida
    });
}

// Función para cargar todas las preguntas desde archivos JSON
async function loadAllQuestions() {
    const difficulties = ['facil', 'normal', 'dificil'];
    
    for (const difficulty of difficulties) {
        try {
            const response = await fetch(`./src/json/${difficulty}.json`);
            if (response.ok) {
                const questions = await response.json();
                questionsData[difficulty] = questions;
                console.log(`✓ Preguntas cargadas para nivel: ${difficulty}`);
            } else {
                console.error(`Error al cargar ${difficulty}.json:`, response.status);
                // Inicializar con array vacío si no se puede cargar
                questionsData[difficulty] = [];
            }
        } catch (error) {
            console.error(`Error al cargar preguntas de ${difficulty}:`, error);
            // Inicializar con array vacío si hay error
            questionsData[difficulty] = [];
        }
    }
    
    // Verificar que se hayan cargado las preguntas
    console.log('Estado de carga de preguntas:', questionsData);
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 25 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 20) + 's';
        particlesContainer.appendChild(particle);
    }
}

function setupCursor() {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

function setupBackButton() {
    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', goBack);
}

function generateMoreQuestions() {
    // Procesar preguntas para seleccionar opciones aleatorias
    Object.keys(questionsData).forEach(level => {
        if (questionsData[level].length === 0) {
            console.warn(`No hay preguntas base para el nivel: ${level}`);
            return;
        }
        
        // Procesar cada pregunta para generar opciones aleatorias
        questionsData[level] = questionsData[level].map((question, index) => {
            const processedQuestion = generateRandomOptions(question);
            // Agregar un ID único para rastrear la pregunta
            processedQuestion.originalId = `${level}_${index}`;
            return processedQuestion;
        });
        
        // Si necesitamos más preguntas para llegar a 20, duplicar y variar
        const originalQuestions = [...questionsData[level]];
        let questionCounter = originalQuestions.length;
        
        while (questionsData[level].length < 20) {
            const randomQuestion = originalQuestions[Math.floor(Math.random() * originalQuestions.length)];
            const newQuestion = generateRandomOptions({...randomQuestion});
            // Crear un ID único para la pregunta duplicada
            newQuestion.originalId = `${level}_duplicate_${questionCounter}`;
            questionsData[level].push(newQuestion);
            questionCounter++;
        }
    });
}

function generateRandomOptions(question) {
    // Crear una copia de la pregunta para no modificar la original
    const processedQuestion = { ...question };
    
    // Obtener la respuesta correcta
    const correctAnswer = question.Options[question.CorrectAnswerIndex];
    
    // Crear array con todas las opciones incorrectas
    const incorrectOptions = question.Options.filter((option, index) => index !== question.CorrectAnswerIndex);
    
    // Determinar número de opciones a mostrar (entre 4 y 6)
    const totalOptions = Math.floor(Math.random() * 3) + 4; // 4, 5 o 6 opciones
    const incorrectOptionsToShow = totalOptions - 1; // Menos 1 por la correcta
    
    // Seleccionar opciones incorrectas aleatoriamente
    const selectedIncorrectOptions = shuffleArray(incorrectOptions).slice(0, incorrectOptionsToShow);
    
    // Combinar respuesta correcta con las incorrectas seleccionadas
    const finalOptions = [correctAnswer, ...selectedIncorrectOptions];
    
    // Mezclar todas las opciones
    const shuffledOptions = shuffleArray(finalOptions);
    
    // Encontrar el nuevo índice de la respuesta correcta
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    
    // Actualizar la pregunta procesada
    processedQuestion.Options = shuffledOptions;
    processedQuestion.CorrectAnswerIndex = newCorrectIndex;
    
    return processedQuestion;
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Nueva función para obtener las dificultades según el nivel seleccionado
function getDifficultiesForLevel(selectedLevel) {
    switch(selectedLevel) {
        case 'facil':
            return ['facil']; // Solo preguntas fáciles
        case 'normal':
            return ['facil', 'normal']; // Preguntas fáciles + normales
        case 'dificil':
            return ['normal', 'dificil']; // Preguntas normales + difíciles
        default:
            return ['facil'];
    }
}

// Función mejorada para seleccionar preguntas combinando diferentes niveles
function selectCombinedQuestions(selectedLevel, totalQuestions = 20) {
    const targetDifficulties = getDifficultiesForLevel(selectedLevel);
    let allAvailableQuestions = [];
    
    console.log(`Seleccionando preguntas para nivel: ${selectedLevel}`);
    console.log(`Dificultades a incluir: ${targetDifficulties.join(', ')}`);
    
    // Recopilar todas las preguntas disponibles de las dificultades objetivo
    targetDifficulties.forEach(difficulty => {
        const availableQuestions = questionsData[difficulty] || [];
        const usedIds = usedQuestions[difficulty];
        
        // Filtrar preguntas que no han sido usadas
        const unusedQuestions = availableQuestions.filter(question => 
            !usedIds.has(question.originalId)
        );
        
        console.log(`Preguntas disponibles para ${difficulty}: ${availableQuestions.length}`);
        console.log(`Preguntas no usadas para ${difficulty}: ${unusedQuestions.length}`);
        
        // Si no hay suficientes preguntas sin usar en esta dificultad, resetear
        if (unusedQuestions.length === 0 && availableQuestions.length > 0) {
            console.log(`Reseteando historial de preguntas para ${difficulty}`);
            usedQuestions[difficulty].clear();
            // Agregar todas las preguntas disponibles
            allAvailableQuestions.push(...availableQuestions.map(q => ({...q, sourceDifficulty: difficulty})));
        } else {
            // Agregar preguntas no usadas
            allAvailableQuestions.push(...unusedQuestions.map(q => ({...q, sourceDifficulty: difficulty})));
        }
    });
    
    console.log(`Total de preguntas disponibles combinadas: ${allAvailableQuestions.length}`);
    
    if (allAvailableQuestions.length === 0) {
        console.error('No hay preguntas disponibles para las dificultades seleccionadas');
        return [];
    }
    
    // Si no hay suficientes preguntas, usar las que estén disponibles
    const questionsToSelect = Math.min(totalQuestions, allAvailableQuestions.length);
    
    // Seleccionar preguntas aleatoriamente
    const selectedQuestions = shuffleArray(allAvailableQuestions).slice(0, questionsToSelect);
    
    // Marcar las preguntas seleccionadas como usadas en sus respectivas dificultades
    selectedQuestions.forEach(question => {
        const sourceDifficulty = question.sourceDifficulty;
        usedQuestions[sourceDifficulty].add(question.originalId);
    });
    
    // Distribución de preguntas seleccionadas por dificultad
    const distribution = {};
    selectedQuestions.forEach(question => {
        const diff = question.sourceDifficulty;
        distribution[diff] = (distribution[diff] || 0) + 1;
    });
    
    console.log(`Preguntas seleccionadas: ${selectedQuestions.length}`);
    console.log(`Distribución por dificultad:`, distribution);
    
    return selectedQuestions;
}

// Función para seleccionar preguntas sin repetir (versión original mantenida para compatibilidad)
function selectUniqueQuestions(difficulty, count = 20) {
    const availableQuestions = questionsData[difficulty] || [];
    const usedIds = usedQuestions[difficulty];
    
    // Filtrar preguntas que no han sido usadas
    const unusedQuestions = availableQuestions.filter(question => 
        !usedIds.has(question.originalId)
    );
    
    console.log(`Preguntas disponibles para ${difficulty}: ${availableQuestions.length}`);
    console.log(`Preguntas no usadas para ${difficulty}: ${unusedQuestions.length}`);
    console.log(`Preguntas ya usadas para ${difficulty}: ${usedIds.size}`);
    
    // Si no hay suficientes preguntas sin usar, resetear el historial para esta dificultad
    if (unusedQuestions.length < count) {
        console.log(`Reseteando historial de preguntas para ${difficulty} - no hay suficientes preguntas sin usar`);
        usedQuestions[difficulty].clear();
        // Volver a filtrar ahora que el historial está limpio
        const resetUnusedQuestions = availableQuestions.filter(question => 
            !usedQuestions[difficulty].has(question.originalId)
        );
        
        // Seleccionar preguntas aleatoriamente
        const selectedQuestions = shuffleArray(resetUnusedQuestions).slice(0, count);
        
        // Marcar las preguntas seleccionadas como usadas
        selectedQuestions.forEach(question => {
            usedQuestions[difficulty].add(question.originalId);
        });
        
        return selectedQuestions;
    }
    
    // Seleccionar preguntas aleatoriamente de las no usadas
    const selectedQuestions = shuffleArray(unusedQuestions).slice(0, count);
    
    // Marcar las preguntas seleccionadas como usadas
    selectedQuestions.forEach(question => {
        usedQuestions[difficulty].add(question.originalId);
    });
    
    return selectedQuestions;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    updateBackButton(screenId);
}

function updateBackButton(screenId) {
    const backBtn = document.getElementById('backBtn');
    if (screenId === 'homeScreen') {
        backBtn.classList.remove('show');
    } else {
        backBtn.classList.add('show');
    }
}

function goBack() {
    const activeScreen = document.querySelector('.screen.active');
    const screenId = activeScreen.id;
    
    switch(screenId) {
        case 'difficultyScreen':
            showScreen('homeScreen');
            break;
        case 'gameScreen':
            showScreen('difficultyScreen');
            resetGame();
            break;
        case 'scoreScreen':
            showScreen('homeScreen');
            resetGame();
            break;
        default:
            showScreen('homeScreen');
    }
}

function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function goToMainPage() {
     window.location.href = './index.html';
}

// Función startGame modificada para usar la nueva lógica de combinación
function startGame(difficulty) {
    // Verificar que existan preguntas para las dificultades requeridas
    const targetDifficulties = getDifficultiesForLevel(difficulty);
    const hasQuestions = targetDifficulties.some(diff => 
        questionsData[diff] && questionsData[diff].length > 0
    );
    
    if (!hasQuestions) {
        alert(`No hay preguntas disponibles para el nivel: ${difficulty}. Por favor, verifica que los archivos JSON estén disponibles.`);
        return;
    }
    
    // Reproducir sonido de inicio de juego
    playGameStartSound();
    
    // Usar la nueva función para seleccionar preguntas combinadas
    currentQuestions = selectCombinedQuestions(difficulty, 20);
    
    if (currentQuestions.length === 0) {
        alert(`No se pudieron cargar preguntas para el nivel: ${difficulty}.`);
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    gameStarted = true;
    
    console.log(`Iniciando juego con ${currentQuestions.length} preguntas para dificultad: ${difficulty}`);
    
    showScreen('gameScreen');
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    
    document.getElementById('questionNumber').textContent = questionNumber;
    document.getElementById('currentScore').textContent = (score).toFixed(1);
    document.getElementById('questionText').textContent = question.Text;
    
    // Actualizar barra de progreso
    const progress = (questionNumber / 20) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Manejar imagen si existe
    const questionImage = document.getElementById('questionImage');
    if (question.Image) {
        questionImage.src = question.Image;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }
    
    // Cargar opciones
    loadOptions(question.Options);
    
    // Ocultar justificación
    hideJustification();
    
    // Resetear estado
    selectedAnswer = null;
    document.getElementById('nextBtn').style.display = 'none';
}

function loadOptions(options) {
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index, optionElement);
        container.appendChild(optionElement);
    });
}

function selectOption(answerIndex, optionElement) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = answerIndex;
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === question.CorrectAnswerIndex;
    
    // Reproducir sonido según la respuesta
    if (isCorrect) {
        playCorrectSound();
    } else {
        playIncorrectSound();
    }
    
    // Mostrar todas las opciones con sus estados
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.style.pointerEvents = 'none';
        
        if (index === question.CorrectAnswerIndex) {
            option.classList.add('correct');
        } else if (index === answerIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Mostrar justificación
    showJustification(question, isCorrect);
    
    // Actualizar puntuación
    if (isCorrect) {
        score += 0.5;
        correctAnswers++;
        document.getElementById('currentScore').textContent = score.toFixed(1);
    } else {
        incorrectAnswers++;
    }
    
    // Mostrar botón siguiente
    setTimeout(() => {
        document.getElementById('nextBtn').style.display = 'inline-block';
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
    } else {
        loadQuestion();
    }
}

function endGame() {
    const finalScore = score;
    const passed = finalScore >= 6.0;
    
    // Reproducir sonido de final de juego
    playGameEndSound();
    
    // Actualizar pantalla de calificación
    document.getElementById('scoreTitle').textContent = passed ? '¡Felicitaciones!' : '¡Sigue Intentando!';
    document.getElementById('scoreSubtitle').textContent = passed ? 
        '¡Has aprobado el examen!' : 'No has alcanzado la nota mínima';
    
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('incorrectAnswers').textContent = incorrectAnswers;
    document.getElementById('finalScore').textContent = finalScore.toFixed(1) + '/10';
    
    // Cambiar color del título según el resultado
    const scoreTitle = document.getElementById('scoreTitle');
    if (passed) {
        scoreTitle.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
        scoreTitle.style.backgroundClip = 'text';
        scoreTitle.style.webkitBackgroundClip = 'text';
        scoreTitle.style.webkitTextFillColor = 'transparent';
    } else {
        scoreTitle.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        scoreTitle.style.backgroundClip = 'text';
        scoreTitle.style.webkitBackgroundClip = 'text';
        scoreTitle.style.webkitTextFillColor = 'transparent';
    }
    
    showScreen('scoreScreen');
}

function resetGame() {
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    selectedAnswer = null;
    gameStarted = false;
}

// Función para limpiar el historial de preguntas usadas (opcional - para testing)
function clearUsedQuestionsHistory() {
    Object.keys(usedQuestions).forEach(difficulty => {
        usedQuestions[difficulty].clear();
    });
    console.log('Historial de preguntas usadas limpiado');
}

// Función para manejar efectos de cursor (si se quiere implementar)
function createRippleEffect(e) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    
    ripple.style.animation = 'rippleExpand 0.6s ease-out forwards';
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}


// Agregar sonidos de clic a botones existentes
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || 
        e.target.classList.contains('option') || 
        e.target.classList.contains('back-btn')) {
        playClickSound();
    }
});

// Función para pausar/reanudar música (útil para cuando el juego pierde foco)
function handleVisibilityChange() {
    if (document.hidden) {
        if (backgroundMusic && !backgroundMusic.paused) {
            backgroundMusic.pause();
        }
    } else {
        if (backgroundMusic && !isMuted) {
            backgroundMusic.play().catch(console.log);
        }
    }
}

// Agregar listener para cambios de visibilidad
document.addEventListener('visibilitychange', handleVisibilityChange);

// Limpiar audio al salir
window.addEventListener('beforeunload', function() {
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.src = '';
    }
    
    Object.values(audioEffects).forEach(audio => {
        if (audio) {
            audio.pause();
            audio.src = '';
        }
    });
});

// Event listeners para efectos adicionales
document.addEventListener('click', createRippleEffect);

// Funciones para manejar la justificación
function showJustification(question, isCorrect) {
    const justificationContainer = document.getElementById('justificationContainer');
    const justificationIcon = document.getElementById('justificationIcon');
    const justificationText = document.getElementById('justificationText');
    
    if (!justificationContainer || !justificationIcon || !justificationText) {
        console.warn('Elementos de justificación no encontrados en el HTML');
        return;
    }
    
    // Configurar el icono según si es correcta o incorrecta
    if (isCorrect) {
        justificationIcon.innerHTML = '✅';
        justificationIcon.style.color = '#22c55e';
        justificationContainer.style.borderColor = '#22c55e';
        justificationContainer.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
    } else {
        justificationIcon.innerHTML = '❌';
        justificationIcon.style.color = '#ef4444';
        justificationContainer.style.borderColor = '#ef4444';
        justificationContainer.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
    }
    
    // Mostrar la justificación (con formato HTML si está presente)
    const justification = question.Justification || 'No hay justificación disponible para esta pregunta.';
    justificationText.innerHTML = justification;
    
    // Mostrar el contenedor con animación
    justificationContainer.style.display = 'block';
    setTimeout(() => {
        justificationContainer.style.opacity = '1';
        justificationContainer.style.transform = 'translateY(0)';
    }, 100);
}

function hideJustification() {
    const justificationContainer = document.getElementById('justificationContainer');
    
    if (!justificationContainer) {
        return;
    }
    
    // Ocultar con animación
    justificationContainer.style.opacity = '0';
    justificationContainer.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        justificationContainer.style.display = 'none';
    }, 300);
}

