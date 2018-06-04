
// Declarando las variables
let string = document.getElementById("mensaje");
let selector = document.getElementsByClassName('selector')[0];
let messageSalida = document.getElementById("salida");

// DOMContentLoaded: Cuando el HTML termina de cargar
document.addEventListener('DOMContentLoaded', () => {
    //se llenan las opciones
    createOptions(100);
})
// Función para crear las opciones en el selector del Cifrado
let createOptions = (size) => {
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
// Si desea cifrar mensaje
document.getElementById('iniciarCifrado').addEventListener('click', function (event) {
    event.preventDefault();//para que al hacer clic a página no se recargue
    document.getElementById('action-form').value = 'encode';
    document.getElementById('secreto').innerHTML = 'Ingresa tu secreto';
    document.getElementById('outSecreto').innerHTML = 'Secreto Codificado';
    document.getElementById('botonAccion').innerHTML = 'C';
    document.getElementsByClassName('contenedor')[0].classList.remove('hidden');
    document.getElementsByClassName('CifDesi')[0].classList.add('hidden');
});

// Si desea descifrar mensaje
document.getElementById('iniciarDescifrado').addEventListener('click', function (event) {
    event.preventDefault();// para que al hacer clic a página no se recargue
    document.getElementById('action-form').value = 'decode';
    document.getElementById('secreto').innerHTML = 'Ingresa tu secreto codificado';
    document.getElementById('outSecreto').innerHTML = 'Secreto Decodificado';
    document.getElementById('botonAccion').innerHTML = 'D';
    document.getElementsByClassName('contenedor')[0].classList.remove('hidden');
    document.getElementsByClassName('CifDesi')[0].classList.add('hidden');
});
document.getElementById('botonAccion').addEventListener('click', function (event) {
    event.preventDefault();// para que al hacer clic a página no se recargue
    let action = document.getElementById('action-form').value;
    if (action == 'encode') {
        let mensajeEncriptado = window.cipher.encode(parseInt(selector.value), string.value);
        messageSalida.innerText = mensajeEncriptado;
    }
    if (action == 'decode') {
        let mensajeDesencriptado = window.cipher.decode(parseInt(selector.value), string.value);
        messageSalida.innerText = mensajeDesencriptado;
    }
});
document.getElementById('botonRegresar').addEventListener('click', function (event) {
    event.preventDefault();// para que al hacer clic a página no se recargue
    document.getElementsByClassName('contenedor')[0].classList.add('hidden');
    document.getElementsByClassName('CifDesi')[0].classList.remove('hidden');
    string.value = "";
    messageSalida.innerText = "";
    selector.value = "1";
});






