const cipher = {//esto es un objeto
  // ...
  encode:function(offset, text){//pasar los parametros

    let resultado;
    let array=[]

    for(let i=0; i<text.length; i++){ //iterador
        //let ascii=text.charCodeAt(i);
        
        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
               resultado = String.fromCharCode((text.charCodeAt(i) - 65 + offset) %26 + 65);
                  array.push(resultado)  }
                  else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
                    resultado = String.fromCharCode((text.charCodeAt(i) - 97 + offset) % 26 + 97);
                    array.push(resultado)
                    console.log(array)
                  }   
    }
    
    return array.join(" ") //retornar el texto codificado
},


decode:function(){
  return "esta funcion decodifica"
}
};

export default cipher;
