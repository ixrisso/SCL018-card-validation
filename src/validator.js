//crear objeto "validator" que tiene propiedasdes isvalid y maskify

export const isValid = (creditCardNumber) => {
  /* 1. Convertir el input a array
   2. Multiplicar x2 los números en posiciones 0, 2, 4, 6, 8, 10, 12, 14
   3. Los números con resultado sobre 9, se les resta 9
   4. Sumar todos los elementos del array
   5. Si el resultado final tiene como residuo 0, es tarjeta válida y muestra en pantalla el número enmascarado}
   6. Si no es válida, arroja error en la página y link a página principal */



    const maskify = (creditCardNumber) => {
      let fourSaved = creditCardNumber.slice(-4) // numero negativo hace que parta por la derecha. Conservar los ultimos 4 digitos
      const cCardNumberArr = creditCardNumber.split(", ") //de string a array para manipulacion mas facil?
      for(let i = 0; i < cCardNumberArr.length; i++){
        cCardNumberArr[i] =cCardNumberArr[i].replace(/[0-9]/g, '#') //cada elemento del array es un #
        }
      let cCardNumberStr = cCardNumberArr.join(''); //convirtiendo otra vez el array a string
      let masked = cCardNumberStr.slice(0, -4) + fourSaved;
    return masked
    }
            console.log(maskify(creditCardNumber))


            console.log(typeof isValid)
            console.log(digits)

  let total = digits.reduce((a,b)=>a + b,0);//Suma de todos los dígitos
            console.log(total)
  if (total % 10 == 0){//Comprobación del residuo = 0
    return console.log("true");
  } else { return console.log("false");
    }
            //y mientras tanto haga el maskify en ambos casos
}

// export {isValid} ;
