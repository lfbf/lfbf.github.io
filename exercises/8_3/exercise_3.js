/*
A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
1 Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
2 Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado

*/


const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
assert.strictEqual(mySum([1, 2, 3, 4]), 10, 'Mensagem personalizada do erro');
assert.strictEqual(mySum([1, -2, -3, 4]), 0, 'Mensagem personalizada do erro');