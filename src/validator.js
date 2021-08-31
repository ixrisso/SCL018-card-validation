const validator = {
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
};

export default validator;
