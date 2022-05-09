
function nameLog(name) {
    console.log(name);
}

function nameLast(name, last) {
    return `${name} ${last}`;
}

nameLog("Jose");
console.log(nameLast("jose", "algo"));


let arrFunc = [];

for (let i = 0; i < 1; i++){
    arrFunc[i] = function count(){
        for (i = 0; i < 10; i++){
            console.log(i);
        }
    }
}

console.log(arrFunc.length);


for (let i = 0; i < arrFunc.length; i++){
    arrFunc[i]();
    console.log("\n");
}

var namea = "JOSe";

var ex2 = (function(name) {
    var myName = name;
    return myName;
})(namea);

console.log(ex2);


