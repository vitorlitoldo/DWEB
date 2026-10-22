let nome = prompt("Digite o nome do aluno:");
let n1 = parseFloat(prompt("Digite a 1ª nota:"));
let n2 = parseFloat(prompt("Digite a 2ª nota:"));
let n3 = parseFloat(prompt("Digite a 3ª nota:"));
let n4 = parseFloat(prompt("Digite a 4ª nota:"));

let media = (n1 + n2 + n3 + n4) / 4;

alert("O aluno " + nome + " ficou com média " + media.toFixed(2));