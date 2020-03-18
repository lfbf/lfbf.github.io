// 1 Crie uma função que receba um número e retorne seu fatorial.

const fatorial = num => {
  let res = 1;
  for (let i = num; i >= 1; i--) {
    res *= i
  }
  return console.log(`O fatorial do número ${num} é ${res}`);
}

// chamando a função fatorial
fatorial(6);