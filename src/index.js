import validator from './validator.js';

document.getElementById("step1").addEventListener("click", function() {
let creditCardNumber =  document.getElementById('digits').value;
if (creditCardNumber === ""){
  return document.getElementById("wrong").innerHTML = "Reingrese su número de tarjeta sin espacios ni carácteres especiales";
} else {
  if (validator.isValid(creditCardNumber)===true) {
  return document.getElementById("wrong").innerHTML = "Tarjeta Valida";
} else { return document.getElementById("wrong").innerHTML = "Tarjeta Invalida";} 
}
  
})


  //console.log(input); //podemos ver los numeros del input en la consola
  //if (input == null) {
  //  return document.getElementById("wrong").innerHTML = "Reingrese su número de tarjeta sin espacios ni carácteres especiales";
  //} else {
  //document.getElementById("screen2").style.display = "block"
  //document.getElementById("screen1").style.display = "none"




//}

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
