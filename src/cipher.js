window.cipher = {
  // ... 
  encode: (string, offset) => {
    let cipheredMessage = '';
    for (let i = 0; i < string.length; i++) {
      let posicionAscii = string.charCodeAt(i);
      //Codificar texto en mayúsculas
      if (posicionAscii >= 65 && posicionAscii <= 90) {
        let x = (posicionAscii - 65 + offset) % 26 + 65;
        cipheredMessage += String.fromCharCode(x);
      }
      //Codificar texto minúsculasxxxx
      else if (posicionAscii >= 97 && posicionAscii <= 122) {
        let x = (posicionAscii - 97 + offset) % 26 + 97;
        cipheredMessage += String.fromCharCode(x);
      }
      // Agregar caracteres dentro de un array
      else if (posicionAscii >= 32 && posicionAscii <= 47) {
        let caracteres = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];
        let valorAscii = [32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
        for (let j = 0; j < caracteres.length; j++) {
          if (posicionAscii == valorAscii[j]) {
            cipheredMessage += caracteres[j];
          }
        }
      }
    }
    return cipheredMessage;
  },

  decode: (string, offset) => {
    let cipheredMessage = '';
    for (let i = 0; i < string.length; i++) {
      let posicionAscii = string.charCodeAt(i);

      //Decodificar texto en mayúsculas
      if (posicionAscii >= 65 && posicionAscii <= 90) {
        let x = (posicionAscii + 65 - offset) % 26 + 65;
        cipheredMessage += String.fromCharCode(x);
      }
      //Decodificar texto minúsculas
      else if (posicionAscii >= 97 && posicionAscii <= 122) {
        let x = (posicionAscii + 97 - offset + 14) % 26 + 97;
        cipheredMessage += String.fromCharCode(x);
      }
      //Agregar caracteres
      else if (posicionAscii >= 32 && posicionAscii <= 47) {
        let caracteres = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];
        let valorAscii = [32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
        for (let j = 0; j < caracteres.length; j++) {
          if (posicionAscii == valorAscii[j]) {
            cipheredMessage += caracteres[j];
          }
        }
      }
    }
    return cipheredMessage;
  },

  createCipherWithOffset: (offset) => {
    return new Cipherer(offset);
  },
};

class Cipherer {

  constructor(offsetInput) {
    this.offset = offsetInput;
  }

  encode(string) {
    return window.cipher.encode(string, this.offset);
  }

  decode(string) {
    return window.cipher.decode(string, this.offset);
  }
}




