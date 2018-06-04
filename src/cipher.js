window.cipher = {
  encode: (offset, string) => {
    let cipheredMessage = '';
    for (let i = 0; i < string.length; i++) {
      let posicionAscii = string.charCodeAt(i);
      // Codificar texto en mayúsculas
      if (posicionAscii >= 65 && posicionAscii <= 90) {
        let x = (posicionAscii - 65 + offset) % 26 + 65;
        cipheredMessage += String.fromCharCode(x);
      }
      // Codificar texto minúsculas
      else if (posicionAscii >= 97 && posicionAscii <= 122) {
        let x = (posicionAscii - 97 + offset) % 26 + 97;
        cipheredMessage += String.fromCharCode(x);
      }
      // Agregar caracteres 
      else {
        cipheredMessage += String.fromCharCode(posicionAscii);
      }
    }
    return cipheredMessage;
  },
  decode: (offset, string) => {
    let cipheredMessage = '';
    for (let i = 0; i < string.length; i++) {
      let posicionAscii = string.charCodeAt(i);
      // Decodificar texto en mayúsculas
      if (posicionAscii >= 65 && posicionAscii <= 90) {
        let x = (posicionAscii + 65 - offset) % 26 + 65;
        cipheredMessage += String.fromCharCode(x);
      }
      // Decodificar texto minúsculas
      else if (posicionAscii >= 97 && posicionAscii <= 122) {
        let x = (posicionAscii + 97 - offset + 14) % 26 + 97;
        cipheredMessage += String.fromCharCode(x);
      }
      // Agregar caracteres
      else {
        cipheredMessage += String.fromCharCode(string.charCodeAt(i));
      }
    }
    return cipheredMessage;
  },
  createCipherWithOffset: (offset) => {

    let resultED = {
      encode: (string) => cipher.encode(offset, string),
      decode: (string) => cipher.decode(offset, string)
    }
    return resultED;
  }
};





