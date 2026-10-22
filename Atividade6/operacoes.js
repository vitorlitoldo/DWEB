let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let resto = num1 % num2;

confirm("Pronto para ver os resultados das operações?");

alert(
    "Soma: " + soma + "\n" +
    "Subtração: " + sub + "\n" +
    "Produto: " + mult + "\n" +
    "Divisão: " + div + "\n" +
    "Resto da divisão: " + resto
);