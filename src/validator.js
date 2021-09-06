
const isValid = () => {
  //let result = ["4083952015263"].map(i=>Number(i));
  //console.log(typeof result);
  
  //[...cCardNumber];  let cCardNumberParse = Number.parseInt(cCardNumberArry,[10]);
  //console.log(typeof cCardNumberParse)
  //console.log(cCardNumberArray)

  /* 1 Convertir el input a array
   2 Multiplicar x2 los números en posiciones 0, 2, 4, 6, 8, 10, 12, 14
   3 Los números con resultado sobre 9, se les resta 9
   4 Sumar todos los elementos del array
   5 Si el resultado final tiene como residuo 0, es tarjeta válida y muestra en pantalla el número enmascarado}
   6 Si no es válida, arroja error en la página y link a página principal */ 

let numeros = [4,0,8,5,9,5,2,0,1,5,2,6,3]
let total = numeros.reduce((a,b)=>a + b,0);//Suma de todos los dígitos
console.log(total)
     if (total % 10 == 0){//Comprobación del residuo = 0
     return console.log("true");
    }else{
     return console.log("false");
    }
}

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
        console.log(maskify("4083952015263"))
       

  /*  let product = numerosenArray.slice [1,3,5,7,9,11,13*2]
  console.log(product);
  function nuestroNumero (n) {
    this.number = n;
  }
  nuestroNumero.prototype.valueOf = function() {
    return this.number;
  }; */


      //deberia retornar algo asi: ####1234

  /*let product = arry.slice[1,3,5,7,9,11,13,15]*2;// multiplicación
  console.log(product);
  // cada elemento del arry mayor a 9 se le de debe restar 9
  let elementos = 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  if(elementos > 9) {
      then sum arry.elementos - 9; 
   
}*/

//* nos arrojara algo asi: ["s", "o", "y", "l", "e", "n", "i", "n"]*/
  

/* */
//let arry = array.from(input);
//console.log(arry);


//


    /*let digitsTrue = Array.from(input);
    console.log(digitsTrue);// ["s", "o", "y", "l", "e", "n", "i", "n"]
    digitsTrue.reverse();//pasar a orden inverso

    digitsTrue [1,3,5,7,9,11,13,15]*2;
    multiplicar por dos, las posiciones 'pares'

    if(digitsTrue => 9) {
    digitosFinales = digitsTrue - 9; 
    }

    if(sumafinal % 10 === 0){
     validCard = true; */
    
export {isValid} ;

