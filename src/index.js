import validator from './validator.js';

let input=  document.getElementById('cardNumbers');
input.addEventListener('input',function(){
  if (this.value.length > 16)
     this.value = this.value.slice(0,16);
  else // que avise que esta mal ingresado?
  let tarjetaMalEscrita = document.createTextNode("ingrese correctamente su tarjeta");
}) // Para limitar la entrada de carácteres a 16


console.log(validator);
