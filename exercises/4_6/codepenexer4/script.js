
//Crie seu código abaixo dessa linha:
//cons caixaTexto = document.getElementsByClassName("caixa-texto")[0];
//let caixaUm = document.getElementsByClassName("caixa1")[0];
//console.log(caixaUm = document.getElementsByClassName("caixa1")[0]);
const caixaTexto = document.querySelector(".caixa-texto");
const caixaUm = document.querySelector(".caixa1") ;
//console.log(botaoUm.innerText == botao1);
const caixaDois = document.querySelector(".caixa2");
const botaoUm = document.querySelector(".botao1");
const botaoDois = document.querySelector(".botao2");


function passarMouseNobotaoUm() {
    caixaUm.style.backgroundColor = "green";
}

function passarMouseNobotaoDois() {
  caixaDois.style.backgroundColor = "green";
}

function clicarNoBotaoUm() {
  caixaUm.innerText = caixaTexto.value;
}

function clicarNoBotaoDois() {
  caixaDois.innerText = caixaTexto.value;
}

function mostrarAlerta() {
  alert("Go Trybe!");
}

  // ações no botão um
  botaoUm.addEventListener("mouseover", passarMouseNobotaoUm);
  botaoUm.addEventListener("click", clicarNoBotaoUm);
  
  // ações no botão dois
  botaoDois.addEventListener("mouseover", passarMouseNobotaoDois);
  botaoDois.addEventListener("click", clicarNoBotaoDois);

  // ação na caixa de texto
  caixaTexto.addEventListener("paste", mostrarAlerta);


