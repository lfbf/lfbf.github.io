// Crie uma função que recebe uma string e retorna true se é um palíndromo ou false se não for.

// Exemplo de palíndromo: arara.

// verificaPalindrome("arara");

// Retorno esperado: true

// verificaPalindrome("desenvolvimento");

// Retorno esperado: false

function ehPalindromo(string) {
  for (var i = 0; i < string.length / 2; i++) 
  if (string[i] != string[string.length - i - 1]) return false;
  return true;
}
console.log(ehPalindromo("arara"));
console.log(ehPalindromo("desenvolvimento"));