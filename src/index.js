import {validator} from './validator.js';

document.getElementById('step1').onclick = function() {getVal() };

function getVal() {
  let input =  document.getElementById('digits').value;
  console.log(input); //podemos ver los numeros del input en la consola
  if (input == null) {
    return document.getElementById("wrong").innerHTML = "Reingrese su número de tarjeta sin espacios ni carácteres especiales";
  } else {
  document.getElementById("#screen2").style.display = "block"
  document.getElementById("#screen2").style.display = "none"
  validator.maskify(input);
  document.getElementById("maskify").innerHTML = " "
  validator.isValid(input);

  }
}

//return validator(); correr funcion de cardvalidator.js
 /*
  //si el if es true
    //entonces invocar y correr el validador
        //Si el residuo es 0 mostrar ventana de validador
        //document.getElementById('#screen2').style.display = "block"
        //Si el residuo no es 0 mostrar ventana invalida
        //document.getElementById('#screen3').style.display = "block"
  //si el if es false,
    //entonces return intenta "reingresar el número de tarjeta"} */
