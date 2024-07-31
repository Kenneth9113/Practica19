let boton = document.getElementById("lanzar");
let imagen = document.getElementById("1");
let xd = document.getElementById("valor");
let contenedor = document.querySelector('.contenedor');
let rojo = document.querySelector('.rojo');

boton.addEventListener("click", function() {
    let random = parseInt(Math.random() * (7 - 1) + 1);
    imagen.src = "img/" + random + ".jpg";
    xd.value = random;

    // Mover la imagen roja hacia abajo
    let currentTop = parseInt(window.getComputedStyle(rojo).top);
    let newTop = currentTop + random * 45;

   

    // Limitar el movimiento hacia abajo a un máximo de 1080px desde la parte superior
    if (newTop <= 360) {
        rojo.style.top = newTop + 'px';
    } else {
        rojo.style.top = '360px'; // Ajusta según el límite máximo deseado
    }

});