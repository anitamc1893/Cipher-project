import cipher from './cipher.js'
    let offset = document.getElementById("recorrido").value;
    let text = document.getElementById("texto").value;
    
console.log(cipher.encode(1,"ana"))


//LA siguiente linea accede al dom
let elespejo=document.querySelector(".espejo")
//La siguiente linea manupular el dom
elespejo.innerHTML="<marquee>Hola Soy un espejo</marquee>"
