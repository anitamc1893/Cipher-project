import cipher from "./cipher.js";
let offset = document.getElementById("recorrido");
let text = document.getElementById("texto");
let botonEncode = document.getElementById("boton");

botonEncode.addEventListener("click", function (e) {
  e.preventDefault();
  let resultado = cipher.encode(parseInt(offset.value), text.value);
  //document.write(resultado);
  document.getElementById("textCifrado").innerHTML = resultado;
});

let offset2 = document.getElementById("recorrido2");
let text2 = document.getElementById("texto2");
let botonDecode = document.getElementById("boton2");

botonDecode.addEventListener("click", function (e) {
  e.preventDefault();
  let resultado = cipher.decode(parseInt(offset2.value), text2.value);
  document.getElementById("textDescifrado").innerHTML = resultado;
});

