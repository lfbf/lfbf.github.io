/**
* 7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Seguindo essas regras:
*
*Porcentagem >= 90 -> A
*Porcentagem >= 80 -> B
*Porcentagem >= 70 -> C
*Porcentagem >= 60 -> D
*Porcentagem >= 50 -> E
*Porcentagem < 50 -> F
*O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. 
 */

//const nota = 100;

// if (nota >= 90 && nota <= 100) {
//   console.log('Seu Conceito é A');
// } else if (nota >= 80 && nota < 90) {
//   console.log('Seu Conceito é B');
// } else if (nota >= 70 && nota < 80) {
//   console.log('Seu Conceito é C');
// } else if (nota >= 60 && nota < 70) {
//   console.log('Seu Conceito é D');
// } else if (nota >= 50 && nota < 60) {
//   console.log('Seu Conceito é E');
// } else if (nota < 50 && nota >= 0) {
//   console.log('Seu Conceito é F');
// } else if (nota < 0 || nota > 100) {
//   console.log('Erro: a nota não pode ser menor que 0 ou maior que 100');
// }


// Using switch
const nota = -2;

switch (true) {
  case (nota >= 90 && nota <= 100):
    console.log('Seu Conceito é A');
    break;
  case (nota >= 80 && nota < 90):
    console.log('Seu Conceito é B');
    break;
  case (nota >= 70 && nota < 80):
    console.log('Seu Conceito é C');
    break;
  case (nota >= 60 && nota < 70):
    console.log('Seu Conceito é D');
    break
  case (nota >= 50 && nota < 60):
    console.log('Seu Conceito é E');
    break;
  case (nota < 50 && nota >= 0):
    console.log('Seu Conceito é F');
    break;
  default:
    console.log('Erro: a nota não pode ser menor que 0 ou maior que 100');
    break;
}

