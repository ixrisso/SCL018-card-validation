const validator = {

isValid: function (creditCardNumber) {
  let charStr = creditCardNumber.toString().split('');//se separan los caracteres
  let digits = charStr.map(Number)//se convierten a numeros
              //console.log(digits);
  for(let i=0; i<digits.length; i++){//los recorremos a posiciones pares
    if (i % 2 === 0) {
      digits[i]= digits[i]*1;//a posiciones impares, multiplicamos por uno
      } else {
        digits[i]= digits[i]*2;//a posiciones pares, multiplicamos por dos
        if (digits[i] > 9) { digits[i] = digits[i] - 9; } //restar 9 a numeros mayores que 9
        }
    }
    let total = digits.reduce((a,b)=>a + b);//Suma de todos los dígitos
              //console.log(total)
    if (total % 10 == 0){//Comprobación del residuo = 0
      return true;
    } else { return false;
  }
}

maskify: function(creditCardNumber) {
      let fourSaved = creditCardNumber.slice(-4) // numero negativo hace que parta por la derecha. Conservar los ultimos 4 digitos
      const cCardNumberArr = creditCardNumber.split(", ") //de string a array para manipulacion mas facil?
      for(let i = 0; i < cCardNumberArr.length; i++){
      cCardNumberArr[i] =cCardNumberArr[i].replace(/[0-9]/g, '#') //cada elemento del array es un #
        }
      let cCardNumberStr = cCardNumberArr.join(''); //convirtiendo otra vez el array a string
      let masked = cCardNumberStr.slice(0, -4) + fourSaved;
      console.log(maskify)
      return masked
      }

}



export default validator;
