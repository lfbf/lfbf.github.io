//5- Faça um programa que define três variáveis com os valores dos três ângulos internos de um triângulo. Retorne 
//true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. 
//Caso os ângulos estejam inválidos o programa deve retornar uma mensagem de erro.

let primeiroAngulo = 50;
let segundoAngulo = 120;
let terceiroAngulo = 50;

if (primeiroAngulo + segundoAngulo + terceiroAngulo >= 180) {
  console.log("Os ângulos do triângulo estão válidos")
}
else {
  console.log("Os ângulos do triângulo estão inválidos")
}

