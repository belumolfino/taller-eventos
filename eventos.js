document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('cont-boton');
    if(contenedor)
        contenedor.addEventListener("click", () => {
            alert('Hola! Soy el div');
        });
});
