import validator from './validator.js';

//obtener valor del input
let input =  document.getElementById('cardNumbers').value;
//restringir tipo de caracteres en input
//=/[^a-z ]\ *([.0-9])*\d/g
//=/^([\d])+$/
function correctInput {
  let smallTest = new RegExp("^[0-9]{16}$");
  if (!smallTest.test(input))
  return "intenta reingresar el número de tarjeta";
}
console.log(
  smallTest.test(input)
);

//comprobacion de luhn
let input = document.getElementById('digits').value;
let digitsTrue = Array.from(input);
console.log(digitsTrue);// ["s", "o", "y", "l", "e", "n", "i", "n"]//pasar de string a un array

digitsTrue.reverse();//pasar a orden inverso

digitsTrue [1,3,5,7,9,11,13,15]*2;//multiplicar por dos, las posiciones 'pares'

//a digitos mayores de 9, restarle 9, porque es lo mismo mind explodes
if(digito > 9) {
digitofinal = digito - 9;
}

//sumar todo

//dividir por 10
if(sumafinal % 10 === 0){
    validCard = true;
 }






console.log(validator);
