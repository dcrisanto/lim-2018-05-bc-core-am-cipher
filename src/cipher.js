window.cipher = { 
  // ... 
   encode:  (string, offset) => { 
     let cipheredMessage='';
     for (let i=0; i<string.length; i++){
       let posicionAscii=string.charCodeAt(i);
    //Codificar texto en mayúsculas
       if (posicionAscii>=65 && posicionAscii <= 90) {
         let x=(posicionAscii-65+offset)%26+65;
         cipheredMessage = cipheredMessage+String.fromCharCode(x);
       }
    //Codificar texto minúsculas
       else if (posicionAscii>=97 && posicionAscii <= 122) {
         let x=(posicionAscii-97+offset)%26+97;
         cipheredMessage = cipheredMessage+String.fromCharCode(x);
       }
    //Espacio
        else if (posicionAscii == 32) {
          cipheredMessage = cipheredMessage+ " ";
        }
    //Coma
        else if (posicionAscii == 44) {
          cipheredMessage = cipheredMessage + ",";
        }
        else{
              alert('Ufff me falta mejorar el programa')
        }
      }
      return cipheredMessage;
    },

    decode:  (string, offset) => {
      let cipheredMessage='';
      for (let i=0; i<string.length; i++){
          let posicionAscii=string.charCodeAt(i);
    //Decodificar texto en mayúsculas
        if (posicionAscii>=65 && posicionAscii <= 90) {
          let x=(posicionAscii+65-offset)%26+65;
          cipheredMessage = cipheredMessage+String.fromCharCode(x);
        }
    //Decodificar texto minúsculas
        else if (posicionAscii>=97 && posicionAscii <= 122) {
          let x=(posicionAscii+97-offset+14)%26+97;
          cipheredMessage = cipheredMessage+String.fromCharCode(x);
        }
    //Espacio
        else if (posicionAscii == 32) {
          cipheredMessage = cipheredMessage+ " ";
        }
    //Coma
        else if (posicionAscii == 44) {
         cipheredMessage = cipheredMessage + ",";
        }
        
        /*else if(posicionAscii>=32 && posicionAscii<=47){
          let caracteres= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"];
          let valorAscii= [33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
          for (i=0; i<caracteres.length; i++){
            if (posicionAscii==valorAscii[i]) {
            cipheredMessage =cipheredMessage+caracteres[i];
            }  
            return; 
          }
        }*/
      }
        return cipheredMessage;
    }, 
};




