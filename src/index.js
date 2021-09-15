import validator from './validator.js';

document.getElementById("step1").addEventListener("click", function() {
let creditCardNumber =  document.getElementById('digits').value;
let maskified = validator.maskify(creditCardNumber);
if (creditCardNumber === ""){
  return document.getElementById("print").innerHTML = "Reingrese su número de tarjeta sin espacios ni carácteres especiales";
} else {
  if (validator.isValid(creditCardNumber)===true) {
  return document.getElementById("print").innerHTML = "Tu tarjeta N° " + maskified + " es válida";
} else { return document.getElementById("print").innerHTML = "Tu tarjeta N° " + maskified + " es inválida. Intenta nuevamente";}
}

})


