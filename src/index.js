var createOptions = function(size) {
    // Creando selector
    var selector = document.createElement('select');
    selector.setAttribute('id', 'selector');
    // Llenando las opciones del selector
    for (var i = 0; i < size; i++) {
        var option = document.createElement('option');
        var value = i+1;
        option.setAttribute('value', value);
        parseInt(option.innerText = value);
        selector.appendChild(option);
    }
    //Poniendo el selector dentro del div
    document.getElementById('selector-container').appendChild(selector);
}

// DOMContentLoaded: Cuando el HTML termina de cargar
document.addEventListener('DOMContentLoaded', function(event) {
    //se llenan las opciones
    createOptions(10);
})
    //Se agrega el evento para el botón cifrar
    document.getElementById('botonCifrar').addEventListener('click', function(event){
        event.preventDefault();//para que al hacer clic a página no se recargue
        var posicionSelect=parseInt(document.getElementById('selector').value);
        var string=document.getElementById("mensaje").value.toUpperCase();
        var mensajeEncriptado = window.cipher.Encode(string, posicionSelect);
        document.getElementById("salida").value=mensajeEncriptado;
    });
    //Se agrega el evento para el botón descifrar
    document.getElementById('botonDescifrar').addEventListener('click', function(event){
        event.preventDefault();//para que al hacer clic a página no se recargue
        var posicionSelect=parseInt(document.getElementById('selector').value);
        var string=document.getElementById("mensaje").value.toUpperCase();
        var mensajeDesencriptado = window.cipher.Decode(string, posicionSelect);
        document.getElementById("salida").value=mensajeDesencriptado;
    });



    

 