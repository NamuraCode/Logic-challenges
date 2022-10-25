//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
let primeFactors= []
let mayorprimeFactors= 0
let numberToFind = 600851475143
let numberValidation = 0
let findFactorial = (number)=>{
    for (let i = 1; i <= 10000; i++) {
        let division = number / i
        if ((division - Math.floor(division) == 0)) {
            number = division
            primeFactors.push(i)
        }
    }
}
findFactorial(numberToFind)
numberValidation = Math.max(...primeFactors)
console.log(`Number maxime:\n ${numberValidation}`);
console.log(`Prime factors:\n ${primeFactors}`);
console.log(`Number to find:\n ${numberToFind}`);


