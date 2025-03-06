function descargarCV() {
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = './src/cv/cv.pdf'; // Ruta relativa a tu archivo PDF
    link.download = 'CV_Facundo_Amelotti.pdf'; // Nombre del archivo a descargar
    
    // Simular click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}