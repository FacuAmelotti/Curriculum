// Datos de las canciones - ACTUALIZA ESTAS RUTAS CON TUS ARCHIVOS
const songs = [
    {
        title: "Toxic",
        artist: "Fakito",
        description: "Electronica",
        date: "2024",
        rating: "★★★",
        image: "./src/img/songs_repro/toxic.png", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/toxic.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/toxic.mp3" // URL de descarga
    },
    {
  
        title: "Cognosce",
        artist: "Fakito",
        description: "Electronica",
        date: "2023",
        rating: "★★★★",
        image: "./src/img/songs_repro/cognosce.png", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/cognosce.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/cognosce.mp3" // URL de descarga
    },
            {

        title: "Lapsus",
        artist: "Fakito",
        description: "Dubstep",
        date: "2025",
        rating: "★★★★",
        image: "./src/img/songs_repro/lapsus.jpg", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/lapsus.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/lapsus.mp3" // URL de descarga
    },
        {
    
        title: "Voluptas",
        artist: "Fakito",
        description: "House",
        date: "2024",
        rating: "★★★★",
        image: "./src/img/songs_repro/voluptas.jpg", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/voluptas.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/voluptas.mp3" // URL de descarga
    },    
            {
 
        title: "Bla bla",
        artist: "Fakito",
        description: "Electronica chill",
        date: "2022",
        rating: "★★★",
        image: "./src/img/songs_repro/bla.png", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/bla.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/bla.mp3" // URL de descarga
    },
            {

        title: "Concussa",
        artist: "Fakito",
        description: "Dubstep",
        date: "2024",
        rating: "★★★",
        image: "./src/img/songs_repro/concussa.jpg", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/concussa.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/concussa.mp3" // URL de descarga
    },

        {

        title: "Tenebris",
        artist: "Fakito",
        description: "Experimental",
        date: "2021",
        rating: "★★★",
        image: "./src/img/songs_repro/tenebris.png", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/tenebris.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/tenebris.mp3" // URL de descarga
    },
            {
     
        title: "Intermunize",
        artist: "Fakito",
        description: "Electronic",
        date: "2022",
        rating: "★★",
        image: "./src/img/songs_repro/Internumize.jpg", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/internumize.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/internumize.mp3" // URL de descarga
    },
        {

        title: "Inter Infinitum",
        artist: "Fakito",
        description: "Chill",
        date: "2021",
        rating: "★★",
        image: "./src/img/songs_repro/inter-infinitum.png", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/inter-infinitum.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/inter-infinitum.mp3" // URL de descarga
    },
        {
   
        title: "Vetus Somnia",
        artist: "Fakito",
        description: "Electro Hard",
        date: "2024",
        rating: "★★★",
        image: "./src/img/songs_repro/vetus-somnia.jpg", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/vetus-somnia.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/vetus-somnia.mp3" // URL de descarga
    },
            {
 
        title: "Extraneus",
        artist: "Fakito",
        description: "Electronic",
        date: "2021",
        rating: "★★",
        image: "./src/img/songs_repro/extraneus.jpg", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/extraneus.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/extraneus.mp3" // URL de descarga
    },
        {

        title: "Victus",
        artist: "Fakito",
        description: "Electronic",
        date: "2022",
        rating: "★★★",
        image: "./src/img/songs_repro/victus.jpg", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/victus.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/victus.mp3" // URL de descarga
    },
    {

        title: "Per Se",
        artist: "Fakito",
        description: "Dubstep chill",
        date: "2023",
        rating: "★★★",
        image: "./src/img/songs_repro/perse.png", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/perse.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/perse.mp3" // URL de descarga
    },
    {
     
        title: "Ignis",
        artist: "Fakito",
        description: "House",
        date: "2020",
        rating: "★★",
        image: "./src/img/songs_repro/ignis.png", // Ruta a tu imagen
        audio: "./src/audio/songs_repro/ignis.mp3",  // Ruta a tu MP3
        downloadUrl: "./src/audio/songs_repro/ignis.mp3" // URL de descarga
    }
    
    // Agrega más canciones aquí...
];

// Variables globales
let currentSongIndex = 0;
let isPlaying = false;
let isMuted = false;
let volume = 0.7;
let audioElement = null;
let audioContext = null;
let analyser = null;
let animationId = null;

// Inicializar reproductor
function startPlayer() {
    document.getElementById('introScreen').classList.add('hidden');
    document.getElementById('mainPlayer').style.display = 'block';
    initAudio();
    loadSong(currentSongIndex);
    loadPlaylist();
}

function exitPlayer() {
    if (audioElement) {
        audioElement.pause();
        audioElement = null;
    }
    // Redirige a tu página principal - ACTUALIZA ESTA RUTA
    window.location.href = 'index.html'; 
}

// Inicializar audio
function initAudio() {
    audioElement = new Audio();
    audioElement.volume = volume;
    
    // Eventos del audio
    audioElement.addEventListener('loadedmetadata', function() {
        document.getElementById('totalTime').textContent = formatTime(audioElement.duration);
    });
    
    audioElement.addEventListener('timeupdate', function() {
        updateProgress();
    });
    
    audioElement.addEventListener('ended', function() {
        nextSong();
    });
    
    audioElement.addEventListener('error', function(e) {
        console.error('Error cargando audio:', e);
        alert('Error al cargar la canción. Verifica que el archivo existe.');
    });

    // Inicializar Web Audio API para análisis de frecuencia
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(audioElement);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = 256;
    } catch (e) {
        console.log('Web Audio API no disponible, usando animación básica');
    }
}

// Cargar canción
function loadSong(index) {
    const song = songs[index];
    
    // Actualizar información
    document.getElementById('songTitle').textContent = song.title;
    document.getElementById('songArtist').textContent = song.artist;
    document.getElementById('songDescription').textContent = song.description;
    document.getElementById('songDate').textContent = song.date;
    document.getElementById('songRating').textContent = song.rating;
    
    // Cambiar imagen del disco y fondo
    document.getElementById('vinylCenter').style.backgroundImage = `url(${song.image})`;
    document.getElementById('backgroundImg').style.backgroundImage = `url(${song.image})`;
    
    // Cargar audio
    if (audioElement) {
        audioElement.src = song.audio;
        audioElement.load();
    }
    
    // Resetear estado
    isPlaying = false;
    document.getElementById('playPauseBtn').textContent = '▶';
    document.getElementById('vinylRecord').classList.add('paused');
    
    // Actualizar playlist
    loadPlaylist();
}

// Controles de reproducción
async function togglePlay() {
    if (!audioElement) return;
    
    try {
        if (isPlaying) {
            audioElement.pause();
            isPlaying = false;
            document.getElementById('playPauseBtn').textContent = '▶';
            document.getElementById('vinylRecord').classList.add('paused');
            stopBackgroundAnimation();
        } else {
            // Reanudar contexto de audio si está suspendido
            if (audioContext && audioContext.state === 'suspended') {
                await audioContext.resume();
            }
            
            await audioElement.play();
            isPlaying = true;
            document.getElementById('playPauseBtn').textContent = '⏸';
            document.getElementById('vinylRecord').classList.remove('paused');
            startBackgroundAnimation();
        }
    } catch (error) {
        console.error('Error al reproducir:', error);
        alert('Error al reproducir la canción');
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

function previousSong() {
    currentSongIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
}

function seekTime(seconds) {
    if (!audioElement) return;
    audioElement.currentTime = Math.max(0, Math.min(audioElement.currentTime + seconds, audioElement.duration));
}

function toggleMute() {
    if (!audioElement) return;
    
    if (isMuted) {
        audioElement.volume = volume;
        isMuted = false;
        document.querySelector('.volume-control button').textContent = '🔊';
    } else {
        audioElement.volume = 0;
        isMuted = true;
        document.querySelector('.volume-control button').textContent = '🔇';
    }
}

// Control de volumen
document.getElementById('volumeSlider').addEventListener('input', function(e) {
    volume = e.target.value / 100;
    if (audioElement && !isMuted) {
        audioElement.volume = volume;
    }
});

// Barra de progreso
function setProgress(event) {
    if (!audioElement || !audioElement.duration) return;
    
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    audioElement.currentTime = percent * audioElement.duration;
}

function updateProgress() {
    if (!audioElement || !audioElement.duration) return;
    
    const percent = (audioElement.currentTime / audioElement.duration) * 100;
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('currentTime').textContent = formatTime(audioElement.currentTime);
}

// Animación del fondo con análisis de audio real - MEJORADA
function startBackgroundAnimation() {
    if (!analyser) {
        // Fallback: animación básica sin análisis de audio
        animateBackgroundBasic();
        return;
    }
    
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    
    function animate() {
        if (!isPlaying) return;
        
        analyser.getByteFrequencyData(dataArray);
        
        // Calcular intensidad promedio
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
        }
        const average = sum / dataArray.length;
        const intensity = average / 255; // Normalizar a 0-1
        
        // Animar fondo basado en la intensidad real del audio - MÁS DRAMÁTICO
        const bg = document.getElementById('backgroundImg');
        const time = Date.now() * 0.001;
        
        // Escalado más pronunciado
        const scale = 1.15 + intensity * 0.25 + Math.sin(time * 3) * 0.1;
        
        // Rotación más intensa
        const rotation = Math.sin(time * 2) * intensity * 15 + Math.cos(time * 1.5) * 8;
        
        // Movimiento de posición
        const translateX = Math.sin(time * 2.5) * intensity * 20;
        const translateY = Math.cos(time * 1.8) * intensity * 15;
        
        bg.style.transform = `scale(${scale}) rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`;
        
        // Variación de brillo y opacidad más dramática
        const brightness = 0.2 + intensity * 0.5 + Math.sin(time * 4) * 0.2;
        const opacity = 0.7 + intensity * 0.3 + Math.cos(time * 3) * 0.1;
        
        bg.style.filter = `blur(${20 + intensity * 15}px) brightness(${brightness})`;
        bg.style.opacity = opacity;
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
}

function animateBackgroundBasic() {
    // Animación básica sin análisis de audio - MEJORADA
    function animate() {
        if (!isPlaying) return;
        
        const time = Date.now() * 0.001;
        const bg = document.getElementById('backgroundImg');
        
        // Escalado más pronunciado
        const scale = 1.15 + Math.sin(time * 2) * 0.15 + Math.cos(time * 1.5) * 0.1;
        
        // Rotación más intensa
        const rotation = Math.sin(time * 1.5) * 12 + Math.cos(time * 2) * 8;
        
        // Movimiento de posición
        const translateX = Math.sin(time * 2) * 25;
        const translateY = Math.cos(time * 1.5) * 20;
        
        bg.style.transform = `scale(${scale}) rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`;
        
        // Variación de brillo y opacidad
        const brightness = 0.3 + Math.sin(time * 3) * 0.3;
        const opacity = 0.7 + Math.cos(time * 2.5) * 0.2;
        
        bg.style.filter = `blur(${20 + Math.sin(time * 4) * 10}px) brightness(${brightness})`;
        bg.style.opacity = opacity;
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
}

function stopBackgroundAnimation() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    
    // Resetear el fondo a su estado original
    const bg = document.getElementById('backgroundImg');
    bg.style.transform = 'scale(1.1) rotate(0deg) translate(0px, 0px)';
    bg.style.filter = 'blur(20px) brightness(0.3)';
    bg.style.opacity = '0.7';
}

// NUEVAS FUNCIONES PARA DONACIÓN Y DESCARGA
function openDonation() {
    const donationBtn = document.getElementById('donationBtn');
    
    // Abrir enlace de donación (puedes cambiar la URL aquí)
    window.open('https://link.mercadopago.com.ar/hornerito', '_blank');
    
    // Feedback visual
    donationBtn.innerHTML = '✨ ¡Gracias!';
    setTimeout(() => {
        donationBtn.innerHTML = '💝 Apoyar este proyecto';
    }, 2000);
}

function downloadSong() {
    const currentSong = songs[currentSongIndex];
    const downloadBtn = document.getElementById('downloadBtn');
    
    try {
        // Crear elemento de descarga temporal
        const link = document.createElement('a');
        link.href = currentSong.downloadUrl || currentSong.audio;
        // Limpiar caracteres especiales del nombre del archivo
        link.download = `${currentSong.title.replace(/[/\\?%*:|"<>]/g, '')} - ${currentSong.artist.replace(/[/\\?%*:|"<>]/g, '')}.mp3`;
        
        // Agregar al DOM temporalmente y hacer clic
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Feedback visual
        downloadBtn.innerHTML = '✅ Descargando...';
        setTimeout(() => {
            downloadBtn.innerHTML = '⬇️ Descargar';
        }, 2000);
        
    } catch (error) {
        console.error('Error al descargar:', error);
        downloadBtn.innerHTML = '❌ Error';
        setTimeout(() => {
            downloadBtn.innerHTML = '⬇️ Descargar';
        }, 2000);
    }
}

// Lista de reproducción
function openPlaylist() {
    document.getElementById('playlistModal').style.display = 'flex';
}

function closePlaylist() {
    document.getElementById('playlistModal').style.display = 'none';
}

function loadPlaylist() {
    const container = document.getElementById('playlistItems');
    container.innerHTML = '';
    
    songs.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = `song-item ${index === currentSongIndex ? 'active' : ''}`;
        item.onclick = () => selectSong(index);
        
        item.innerHTML = `
            <div class="song-thumb" style="background-image: url(${song.image})"></div>
            <div>
                <div style="font-weight: bold;">${song.title}</div>
                <div style="opacity: 0.7; font-size: 0.9rem;">${song.artist}</div>
            </div>
        `;
        
        container.appendChild(item);
    });
}

function selectSong(index) {
    currentSongIndex = index;
    loadSong(index);
    closePlaylist();
}

// Utilidades
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Controles de teclado
document.addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowRight':
            e.preventDefault();
            nextSong();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            previousSong();
            break;
        case 'ArrowUp':
            e.preventDefault();
            seekTime(10);
            break;
        case 'ArrowDown':
            e.preventDefault();
            seekTime(-10);
            break;
    }
});

// Inicializar cuando se carga la página
window.addEventListener('load', function() {
    // Configurar eventos de los controles
    document.getElementById('volumeSlider').addEventListener('input', function(e) {
        volume = e.target.value / 100;
        if (audioElement && !isMuted) {
            audioElement.volume = volume;
        }
    });
});