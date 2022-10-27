//Each new term in the Fibonacci sequence is generated by adding the previous two terms.
//By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million,
//find the sum of the even-valued terms.
let maxNumberToFind = 4000000 
let arrayFibonacci= [1,2]
let fibonacci = (maxNumber)=>{
  for (let i = 2; i < 1000; i++) {
    arrayFibonacci.push(arrayFibonacci[i-2] + arrayFibonacci[i-1])
    if (arrayFibonacci[i] >= maxNumber) {
      break
    }
  }
}
fibonacci(maxNumberToFind)
let total2 = 0
arrayFibonacci.forEach( (element) =>{
  if( element % 2 == 0 ){
    total2 += element
  }
})
console.log(arrayFibonacci);
console.log(total2);