import {isValid} from './validator.js';

document.getElementById('step1').onclick = function() {getVal() };

function getVal() {
  let input =  document.getElementById('digits').value;
  console.log(input); //podemos ver los numeros del input en la consola

  if (input.length<16 || input == null) {
        /*let filter = '1234567890'; //nuestro filtro de numeros validos
        let out = '';
          for (let input = 0; input<input.length; input++);
              if (filter.indexOf(input.charAt(input)) != -1)
              out += input.charAt(input);
              return out;
              console.log(out);
              } */
    return document.getElementById("wrong").innerHTML = "Reingrese su número de tarjeta sin espacios ni carácteres especiales";
  } else {
  return isValid(input);
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
