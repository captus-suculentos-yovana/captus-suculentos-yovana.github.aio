var container = document.getElementById('container');
setTimeout(function() {
    container.classList.add('cerrar');
    document.body.style.overflowY="visible";// despues de cargar le devolvemos el scroll
}, 800);/* Tiempo en que cambia la pagina */