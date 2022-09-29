//paradigma oop
//{} = objetos

//ASOCIACION OPP
class Person{
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname

    }
}

const john = new Person('John','Suarez')
const maria = new Person('Maria', 'Perez')
//relacion
maria.amigo = john

console.log(maria)
console.log(john)


//AGREGACION

const company = {
    name : 'Makata',
    jefe : ["Estefania", "Paul"],
    employees : []
}

company.employees.push(john)
company.employees.push(maria)

console.log(company);

//ENCAPSULAMIENTO

// const company2 = {
//     //propiedad
//     name : 'makata',
//     //propiedad
//     employeesCompany2 : [],
//     //metodo
//     ordenarEmpleados : ()=>{

//     }
// }

function Company3(name) {
    let employees = []
    this.name = name

    this.getEmployees = function(){
        return employees
    }
    this.addEmployees = function(empleado){
        employees.push(empleado)
    }
}

const company4 = new Company3('Makata')
company4.addEmployees(
    {
        name:'David',
        cargo: 'Full Stack'
    })

console.log(company4.getEmployees());



//HERENCIA
class User{
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname
        this.age = null
    }
}

class Programmer extends User {
    constructor(name, lastname, language){
        super(name, lastname);
        this.language = language
    }
}


const user = new User('David', 'Naranjo')
const programmer = new Programmer('Juan','Diaz',['Python', 'Javascript', 'Java'])
console.log(user);
console.log(programmer);

//POLYMORPHISM OVERLOADING

function countItems(x) {
    return x.toString().length
}
console.log(countItems(10000000));
console.log(countItems('Hola Mundo'));

//OVERLOADING FOR AMOUNT PARAMETERS
//C# Sum(x + y + 0) TO SOME PARAMETERS

function sum(x=0, y=0, z=0){
    return x + y + z
}

console.log(sum());
console.log(sum(10, 20, 20));


//TREN

class Tren{
    constructor(marca, velocidad, tiempo, color, largo, alto, peso){
        this.marca = marca
        this.tiempo = tiempo 
        this.velocidad = velocidad
        this.color = color
        this.largo = largo
        this.alto = alto
        this.peso = peso
        this.distancia = function calculoDistancia(){
            let d;
            let v = this.velocidad;
            let t = this.tiempo;
            d = (v*t)+"m"
            return d
        }
    }
}

let metro = new Tren('Chuchu', 30, 20, 'White', '13m', '2m', '500kg')
console.log(metro.distancia())