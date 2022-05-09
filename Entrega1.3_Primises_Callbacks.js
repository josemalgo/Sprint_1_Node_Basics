//------------------ NIVELL 1 - EXERCICI 1 -----------------------------

// function ex1(bool) {
//     return new Promise((resolve, reject) => {
//         if(bool) {
//             resolve("El valor es positivo.");
//         }
//         else {
//             reject(new Error("El valor es negativo."));
//         }
//     });
// }

// ex1(false).then(
//     result => console.log(result),
//     error => console.log(`Error: ${error.message}`)
// );
// ex1(true).then(
//     result => console.log(result),
//     error => console.log(`Error: ${error.message}`)
// );

// ex1(true)    
//     .then(result => console.log(result))
//     .catch(err => console.log(`Error: ${err.message}`))

// ex1(false)
//     .then(result => console.log(result))
//     .catch(err => console.log(`Error: ${err.message}`))

//------------------ NIVELL 1 - EXERCICI 2 --------------------------------

// let ex2 = (param1, param2) => {
//     return param1 ? param2("El parametro es positivo") : param2("El parametro es negativo");
// }

// ex2(true, (result) => console.log(result));
// ex2(false, (result) => console.log(result));

//------------------ NIVELL 2 - EXERCICI 1 -----------------------------

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

let getEmployee = (num) => {
    return new Promise((resolve, reject) => {
        let employee;
        
        // for (let i = 0; i < employees.length; i++) {
        //     if (employees[i].id === num){
        //         employee = employees[i];
        //     }
        // }

        // employees.forEach(emp => {
        //     if(emp.id === num) {
        //         employee = emp;
        //     }
        // });

        employee = employees.find(emp => emp.id === num);

        if (employee){
            resolve(employee);
        }
        else {
            reject(new Error(`No existe ningún empleado con el id ${num}`));
        }
    });
}