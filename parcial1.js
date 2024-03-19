document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cambiarContenido').addEventListener('click', function() {
      document.querySelectorAll('.texto').forEach(function(parrafo, index) {
        parrafo.textContent = `Hola, jiji ` ;
      });
    });
    
    document.getElementById('cambiarColor').addEventListener('click', function() {
      document.body.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    });
  });
  