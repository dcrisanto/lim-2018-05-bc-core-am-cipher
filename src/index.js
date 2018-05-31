
// Declarando las variables
let string = document.getElementById("mensaje");
let selector = document.getElementById('selector');
let messageSalida = document.getElementById("salida");

// DOMContentLoaded: Cuando el HTML termina de cargar
document.addEventListener('DOMContentLoaded', function () {
    //se llenan las opciones
    createOptions(100);
})
// Función para crear las opciones en el selector
let createOptions = function (size) {
    // Llenando las opciones del selector
    for (let i = 0; i < size; i++) {
        // Creando las opciones
        let option = document.createElement('option');
        let value = i + 1;
        option.setAttribute('value', value);
        option.innerText = value;
        selector.appendChild(option);
    }
}

//Se agrega el evento para el botón cifrar
document.getElementById('botonCifrar').addEventListener('click', function (event) {
    event.preventDefault();//para que al hacer clic a página no se recargue
    let mensajeEncriptado = window.cipher.encode(string.value, parseInt(selector.value));
    messageSalida.value = mensajeEncriptado;
});
//Se agrega el evento para el botón descifrar
document.getElementById('botonDescifrar').addEventListener('click', function (event) {
    event.preventDefault();//para que al hacer clic a página no se recargue
    let mensajeDesencriptado = window.cipher.decode(string.value, parseInt(selector.value));
    messageSalida.value = mensajeDesencriptado;
});





