var setaDireita = window.document.getElementById("seta-direita");
var Leonardo = window.document.getElementById("Leonardo");
var Bruna = window.document.getElementById("Bruna");
var Samantha = window.document.getElementById("Samantha");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita() {
  Bruna.style = "display:none";
  Leonardo.style = "display:flex";
  setaDireita.style = "display:none";
  setaEsquerda.style = "display:flex";
}

function RolarParaEsquerda() {
  Bruna.style = "display:flex";
  Leonardo.style = "display:none";
  setaDireita.style = "display:flex";
  setaEsquerda.style = "display:none";
}
