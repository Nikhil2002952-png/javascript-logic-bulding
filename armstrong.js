function isAmstrong(inputNumber) {
 let number= inputNumber
 const digit= []
 let sum = 0
 while(number > 0) {
 let lastDigit= number%10
number= Math.floor(number/10)
 digit.push(lastDigit)

 }
 const length = digit.length
 console.log('length is ',length);
 sum=0
digit.forEach(d => {

    console.log(d,Math.pow(d,length)); 
    sum=sum + Math.pow(d,length)
   
});
if (sum===inputNumber) {
  console.log('is number Armstorng',sum);   
}
else{
     console.log('is number not Armstorng',sum);   
}
console.log('sum is Armstrong',sum);


}
console.log(isAmstrong(153));