const prompt = require('prompt-sync')();

let num = Number(prompt('Ingrese un numero: '));
while (isNaN(num) ) {
    console.log('Por favor ingrese un numero valido.');
    num = Number(prompt('Ingrese un numero: '));
}
let factorial = 1;
for (let i = 1; i <= num; i++ ){
    factorial *= i;
}
console.log(`El factorial de ${num} es: ${factorial}`);



