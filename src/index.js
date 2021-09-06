import {isValid} from './validator.js';

document.getElementById('step1').onclick = function() {getVal() };

function getVal() { 
  let input =  document.getElementById('digits').value; 
  console.log(input); //podemos ver los numeros del input en la consola
  /*let numbers = parseInt(input,10);//Pasar a number porque el input está con valor undefined
  console.log(numbers);*/
  if //(input.value.length < 16){
    (input.length<16) {
        /*let filter = '1234567890'; //nuestro filtro de numeros validos
        let out = '';
          for (let input = 0; input<input.length; input++);
              if (filter.indexOf(input.charAt(input)) != -1)
              out += input.charAt(input);
              return out;
              console.log(out);
              } */
    return document.getElementById("wrong").innerHTML = "Reingrese su número de tarjeta sin espacios ni carácteres especiales";
  } 
  else {
    return isValid();
  }
  /*
    function maskifyOne(input) {
    let last4Characters = input.substr(-4);
    let maskingCharacters = input.substr(1, input.length - 5).replace(/\d/g, "#");
    return "${maskingCharacters}${last4Characters}";
    console.log(maskifyOne);
    }

    /* function maskifyTwo(input) {
      return input.replace(/.(?=.{4})/g, "#");
      console.log (maskifyTwo);
    } */

     
  //return validator(); correr funcion de cardvalidator.js

  
}

 /*
  //si el if es true
    //entonces invocar y correr el validador
        //Si el residuo es 0 mostrar ventana de validador
        //document.getElementById('#screen2').style.display = "block"
        //Si el residuo no es 0 mostrar ventana invalida
        //document.getElementById('#screen3').style.display = "block"
  //si el if es false,
    //entonces return intenta "reingresar el número de tarjeta"} */
