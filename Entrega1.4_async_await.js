//-------------------- NIVELL 1 - EXERCICI 1 -----------------------------

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

let getEmployee = async (id) => {
    
    let employee = employees.find(emp => emp.id === id);

    if(employee){
        return employee;
    }

    throw new Error("No existe un empleado con ese ID!");
}

let getSalary = async (employee) => {

    let salary = salaries.find(sal => sal.id === employee.id);

    if(salary){
        return salary.salary;
    }

    throw new Error("No existe un salario para ese empleado.");
}

async function printEmployeeSalary(id) {
    
    try{
        let employee = await getEmployee(id);
        let salary = await getSalary(employee);
        console.log(`L'empleat ${employee.name} te un salari de ${salary}`);
    } catch(err) {
        console.log(err);
    }
    
}

printEmployeeSalary(1);

//-------------------- NIVELL 2 - EXERCICI 1 -----------------------------

async function callFunc() {
    
    try {
        console.log(await promiseFunc());
    } catch(err) {
        console.log(err);
    }
}

async function promiseFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Han pasado dos segundos!");
        }, 2000);
    });
}

callFunc();
    

