// Array de las imágenes
const images = [
    "./src/img/Argentina.png"
];

let currentImageIndex = 0;

// Muestra el panel al hacer clic en la bandera
document.querySelector('.flag-icon').addEventListener('click', function() {
    document.getElementById('image-panel').style.display = 'flex'; // Muestra el panel
    displayImage(currentImageIndex); // Muestra la imagen inicial
});

// Función para cambiar las imágenes
function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length; // Cambia entre 0 y 6
    displayImage(currentImageIndex);
}

// Función para mostrar la imagen
function displayImage(index) {
    const imageElement = document.getElementById('imageDisplay');
    imageElement.src = images[index];
}

// Función para cerrar el panel
function closePanel() {
    document.getElementById('image-panel').style.display = 'none'; // Oculta el panel
}
