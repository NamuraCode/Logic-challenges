let maximos = 99
let validation = (number)=>{
    let resultadoArray
    let max = number.length
    if (max > 3) {
        resultadoArray = `${number[0]}` + `${number[1]}`
    }
    // console.log(resultadoArray);
}

for (let i = 1; i <= 99; i++) {
    for (let j = 1; j < 99; j++) {
        // console.log(i * (j))
        // console.log(`${i} this is the number ${j}`);
        let result = `${i * (j)}`
        validation(result)

    }
}

const i = "9009";
const j = Array.from(i.split("").reverse());
const array = i.split("");
if (JSON.stringify(j) === JSON.stringify(array)) {
  console.log("si");
}
