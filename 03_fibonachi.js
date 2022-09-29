//Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
//By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
//find the sum of the even-valued terms.
let maxNumbers = 28
let numberOne = 1
let numberTwo = 2
let arrayFibonacci= [numberOne,numberTwo]
let totalValueArrayFibonacci = 0
let fibonacci = (maxNumbers)=>{
    for (let i = 2; i < maxNumbers; i++) {
        arrayFibonacci[i] = arrayFibonacci[i-2] + arrayFibonacci[i-1]
    }
}
let valueUniform = (maxArrayValue)=>{
    for (let i = 0; i < maxArrayValue.length; i++) {
        totalValueArrayFibonacci += maxArrayValue[i]
    }
}
fibonacci(maxNumbers)
valueUniform(arrayFibonacci)
console.log(totalValueArrayFibonacci);
console.log(arrayFibonacci);