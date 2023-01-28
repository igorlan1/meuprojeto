let numb1 = Number(prompt("digite o primeiro numero."));
let numb2 = Number(prompt("digite o segundo numero"));

let sum = numb1 + numb2;
let min = numb1 - numb2;
let mult = numb1 * numb2;
let div = numb1 / numb2;
let rest = numb1 % numb2;
let condPar = sum % 2;

alert(` a soma é ${sum} `);
alert(`a subtração é ${min} `);
alert(`a multiplicacao é ${mult}`);
alert(`a divisão é ${div.toFixed(2)}`);
alert(`o resto é ${rest}`);
// alert(`${condPar}`); // to chek the rest , if 1 it is odd , if 0 is even

if (condPar == 0) {
  alert(`a soma dos numeros é par`);
} else {
  alert(`a soma dos numeros é impar`);
}

if (numb1 == numb2) {
  alert(`os numeros 2 são iguais `);
} else {
  alert(`os numeros são diferentes`);
}
