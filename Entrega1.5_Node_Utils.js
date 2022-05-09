const Fs = require('fs');
const AdmZip = require('adm-zip');

//------------------- NIVELL 1 - EXERCICI 1 ------------------------

// const recursion = (count) => {

//     if(count === 0) {
//         return;
//     }

//     setTimeout(() => {
//         console.log("Missatge cada segon");
//         recursion(count - 1);  
//     }, 1000);
// }

// recursion(5);

//------------------- NIVELL 1 - EXERCICI 2 ------------------------

Fs.writeFile('helloWorld.txt', 'Hello Word', function (err) {
    if(err) {
        return console.log(err);
    }
    console.log('Hello World > helloWorld.txt');
});

//------------------- NIVELL 1 - EXERCICI 3 ------------------------

Fs.readFile('helloWorld.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

//------------------- NIVELL 2 - EXERCICI 1 ------------------------

async function createZipArchive() {
    
    try {
        const zip = new AdmZip();
        const outputFile = "helloWorld.zip";
        zip.addLocalFile("./helloWorld.txt");
        zip.writeZip(outputFile);
        console.log(`Created ${outputFile} succesfully`);
    } catch (err) {
        console.log(`Something went wrong. ${err}`);
    }
}

createZipArchive();