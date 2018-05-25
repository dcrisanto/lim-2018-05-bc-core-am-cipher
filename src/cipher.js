window.cipher = {
  // ... 
   Encode:  (string, offset) => {
    let cipheredMessage='';
    for (let i=0; i<string.length; i++){
      let posicionAscii=string.charCodeAt(i);
      let x=(posicionAscii-65+offset)%26+65;
      cipheredMessage = cipheredMessage+String.fromCharCode(x);
      }
      return cipheredMessage;
    },
    Decode:  (string, offset) => {
      let cipheredMessage='';
      for (let i=0; i<string.length; i++){
        let posicionAscii=string.charCodeAt(i);
        let x=(posicionAscii+65-offset)%26+65;
        cipheredMessage = cipheredMessage+String.fromCharCode(x);
        }
        return cipheredMessage;
      }
};




