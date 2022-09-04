const fs = require('fs').promises;
const AdmZip = require('adm-zip');
const { exec } = require('child_process');
const { scrypt, randomFill, createCipheriv } = require('node:crypto');

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

// fs.writeFile('helloWorld.txt', 'Hello Word', function (err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log('Hello World > helloWorld.txt');
// });

//------------------- NIVELL 1 - EXERCICI 3 ------------------------

// fs.readFile('helloWorld.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });

//------------------- NIVELL 2 - EXERCICI 1 ------------------------

// async function createZipArchive() {
    
//     try {
//         const zip = new AdmZip();
//         const outputFile = "helloWorld.zip";
//         zip.addLocalFile("./helloWorld.txt");
//         zip.writeZip(outputFile);
//         console.log(`Created ${outputFile} succesfully`);
//     } catch (err) {
//         console.log(`Something went wrong. ${err}`);
//     }
// }

// createZipArchive();

//------------------- NIVELL 2 - EXERCICI 2 ------------------------

// exec('dir ', (error, stdout, stderr ) => {
//     if (error) {
//         console.error(`error: ${error.message}`);
//         return;
//     }

//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }

//     console.log(`Salida: ${stdout}`);
// });

//------------------- NIVELL 3 - EXERCICI 1 ------------------------

async function encodingFiles() { 
    
    const data = await readFileEx1('helloWorld.txt'); 

    if (data){
        const buf = Buffer.from(data, 'utf8');

        fs.writeFile('n3e1Hex.txt', buf.toString('hex'), function (err) {
            if(err) {
                return console.log(err);
            }
        });

        fs.writeFile('n3e1B64.txt', buf.toString('base64'), function (err) {
            if(err) {
                return console.log(err);
            }
        });
    }
    
}

async function readFileEx1(file) {
    
    try {
        return await fs.readFile(file, 'utf8');
    }
    catch (error) {
        console.error(error.message);
    }
}

encodingFiles();


//------------------- NIVELL 3 - EXERCICI 2 ------------------------

async function cipherFile(file) {

    const algorithm = 'aes-192-cbc';
    const password = 'Password used to generate key';

    scrypt(password, 'salt', 24, (err, key) => {
        if (err) throw err;

        randomFill(new Uint8Array(16), (err, iv) => {
            if (err) throw err;

            const cipher = createCipheriv(algorithm, key, iv);

            data = readFileEx1(file).toString('utf8');
            let encrypted = cipher.update(data, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            
            let fileName = file.split('.')[0] + 'ToAES.txt';
            fs.writeFile(fileName , encrypted, function (err) {
                if(err) {
                    return console.log(err);
                }
            });
            
            deleteFile(file);
        });
    });

}

function deleteFile(file){

    const command = 'del ' + file;
    exec(command, (error, stdout, stderr ) => {

        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        
        console.log(`Ficheros eliminados con éxito`);
    });
}

cipherFile('n3e1B64.txt');
cipherFile('n3e1Hex.txt');
