const cipher = {
  //esto es un objeto
  // ...
  encode: function (offset, text) {
    //pasar los parametros
    let resultado;
    let array = [];
    

    if (offset == null){
      throw new TypeError ("Not valid");
    }else if(text == []){
      throw new TypeError("Not valid");
    }else if( offset == 0){
      throw new TypeError ("Not valid");
    }

    for (let i = 0; i < text.length; i++) {
      //iterador
      //let ascii=text.charCodeAt(i);
      const charValue = text.charCodeAt(i);

      if (charValue >= 65 && charValue <= 90) {
        resultado = String.fromCharCode(((charValue - 65 + offset) % 26) + 65);
        array.push(resultado);
      } else if (charValue >= 97 && charValue <= 122) {
        resultado = String.fromCharCode(((charValue - 97 + offset) % 26) + 97);
        array.push(resultado);
      } else {
        resultado = String.fromCharCode(charValue);
        array.push(resultado);
      }
    }

    return array.join(""); //retornar el texto codificado
  },

  decode: function (offset2, text2) {
    let resultado;
    let array = [];

    if (offset2 == null){
      throw new TypeError ("Not valid");
    }else if(text2 == []){
      throw new TypeError("Not valid");
    }else if( offset2 == 0){
      throw new TypeError ("Not valid");
    }

    for (let i = 0; i < text2.length; i++) {
      //iterador
      //let ascii=text.charCodeAt(i);
      const charValue2 = text2.charCodeAt(i);


      if (charValue2 >= 65 && charValue2 <= 90) {
        resultado = String.fromCharCode(((charValue2 - 65 - offset2 + 26) % 26) + 65);
        array.push(resultado);
      } else if (charValue2 >= 97 && charValue2 <= 122) {
        resultado = String.fromCharCode(
          ((charValue2 - 97 - offset2 + 26) % 26) + 97
        );
        array.push(resultado);
         } else {
        resultado = String.fromCharCode(charValue2);
        array.push(resultado);
      }
    }

    return array.join(""); //retornar el texto codificado
  },
};

export default cipher;
