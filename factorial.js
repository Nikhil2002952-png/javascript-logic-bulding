function factorial(inputNumber) {
  if (inputNumber<=0) {
    console.log('Number is less than 0 Please enter valid number');
  }

     let result= 1
    for (let i = 1; i <=inputNumber; i++ ) {
        result =result*i
        
        console.log(result);
        
    }
     return result

}
console.log(factorial(8));