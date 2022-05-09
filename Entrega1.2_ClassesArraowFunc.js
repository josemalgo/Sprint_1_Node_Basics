// ((a, b) => {
//     console.log(a + b);
// })(1,2);

// let ex1 = (param) => {
//     return {
//         atrb: param
//     };
// } 

// console.log(ex1("Hola").atrb);

// class Person {
//     constructor(nom){
//         this.nom = nom;
//     }

//     dirNom(){
//         console.log(this.nom);
//     }
// }

// let pers = new Person("kljdsalk");
// pers.dirNom();

class Person {
    
    constructor() {
        if(this.constructor === Person) {
            throw new Error("Person is an abstract class. Cannot be instantiated.");
        }
    }

    info() {
        throw new Error ("Added abstract Method has no implementation");
    }
    
}

class Professor extends Person{

    info() {
        console.log("I'm a Professor");
    }
}

class Developer extends Person {

    info() {
        console.log("I'm a Developer.");
    }
}

function makeObj(obj) {
    return new obj;
}

let profesor = makeObj()