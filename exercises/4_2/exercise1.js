// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, 
//imprime na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 3;
let linha = '';
for (let i = 0; i < n; i += 1) {
  linha += '*'
}

for (let i = 0; i < n; i += 1) {
  console.log(linha)
} 