import validator from './validator.js';

/* crear una variable que llame el click del html, y que despues de eso creamos la funcion.
cambiar nuestro tipo de funcion, a una funcion arrow. revisar readme de laboratoria. revisar objetipos de tipo modulo
*/

function getVal() {
  let input =  document.getElementById('digits').value;
  console.log(input);
  //podemos ver los numeros del input en la consola
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
    return alert("Reingrese su número de tarjeta, sin espacios, guiones");
  }
  else {
    return validator();
    // correr funcion de cardvalidator.js

  }
}

/*$.getscript("url or name of 1st Js File",function(){
fn();
});/*
/*
  //ahora toca el if para limitar los caracteres
  //para limitar regexp = /^([\d])+$/;
  //para limitar rexexp = /[^a-z ]\ *([.0-9])*\d/g
  //si el if es true
    //entonces invocar y correr el validador
        //Si el residuo es 0 mostrar ventana de validador
        //document.getElementById('#screen2').style.display = "block"
        //Si el residuo no es 0 mostrar ventana invalida
        //document.getElementById('#screen3').style.display = "block"
  //si el if es false,
    //entonces return intenta "reingresar el número de tarjeta"} */
