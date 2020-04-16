// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Imprima os valores do objeto de forma a obter, no console, a seguinte saída:

// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!


let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "“Christmas on Bear Mountain, Dell’s Four Color Comics #178”",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};





for (let chave in info) {
  console.log(info[chave], "e");
  for (let chave2 in info2)
    console.log(info2[chave2]);
}