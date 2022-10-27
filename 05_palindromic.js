let palindromicoTowNumbers = 99
let palindromicoThreeNumbers = 999

function findPalindromico(number){
    if (number.toString().length <= 2 ) {
        for (let i = 10; i <= 99; i++) {
            for (let j = 10; j <= 99; j++) {
                let polindromo = i*j
                let polindromoString = polindromo.toString()
                if (polindromoString.length % 2 == 0) {
                    console.log(polindromoString);
                }
            }
        }
    }
}

findPalindromico(palindromicoTowNumbers)
