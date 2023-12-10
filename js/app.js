const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');



//
document.addEventListener('DOMContentLoaded', () => {
    eventos();
});
// Function declaration
const eventos = () => {
    menu.addEventListener('click', abrirMenu);
}
const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}
const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    const body = document.querySelector('body');
    //El usuario ya no podrá generar más overlays
    if (document.querySelectorAll('pantalla-completa').length > 0) {
        return;
    }
    overlay.classList.add('pantalla-completa');
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}
const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar');
        overlay.remove();
        //Para que el botón cerrar solo se cree en el momento adecuado
        boton.remove();
    });
    //Quita el overlay al pulsar en cualquier parte de la pantalla  y activa el btn de  cerrar
    overlay.onclick = function () {
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}
//Desplegar imagenes de forma asincrona
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});

imagenes.forEach(imagen => {
    observer.observe(imagen);
});


const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}


