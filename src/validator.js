const validator = {

isValid: function (creditCardNumber) {
  let charStr = creditCardNumber.toString().split('');
  let digits = charStr.map(Number)
  for(let i=0; i<digits.length; i++){
    if (i % 2 === 0) {
      digits[i]= digits[i]*1;
      } else {
        digits[i]= digits[i]*2;
        if (digits[i] > 9) { digits[i] = digits[i] - 9; } 
        }
    }
    let total = digits.reduce((a,b)=>a + b);
  
    if (total % 10 == 0){
      return true;
    } else { return false;
  }

},

maskify: function (creditCardNumber) {
      let fourSaved = creditCardNumber.slice(-4) 
      const cCardNumberArr = creditCardNumber.split(", ") 
      for(let i = 0; i < cCardNumberArr.length; i++){
      cCardNumberArr[i] =cCardNumberArr[i].replace(/[A-Za-z0-9]/g, '#')
      }
      let cCardNumberStr = cCardNumberArr.join(''); 
      let masked = cCardNumberStr.slice(0, -4) + fourSaved;
  
      return masked
      }

};
export default validator;
