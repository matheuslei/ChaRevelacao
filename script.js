var numeroSorteado = document.querySelector("div.box h1");
const botaoSortear = document.querySelector("div.box button");
var roleta = [];

const btnOliver = document.querySelector("#btnOliver");
const btnChloe = document.querySelector("#btnChloe");

for (i = 1; i <= 100; i++) {
  roleta.push(i);
}

botaoSortear.addEventListener("click", () => {
  document.getElementById("container").style.display = "none";
  document.getElementById("loader").src = "./img/loading.svg";
  document.getElementById("loader").style.width = "300px";
  document.getElementById("descubra").style.display = "none";

  setTimeout(function () {
    numeroSorteado.innerHTML =
      "O número sorteado é " +
      roleta[Math.floor(Math.random() * roleta.length)];

    var resultado = document.querySelector("#resultado");

    resultado.style.background = "#888888";
    resultado.style.margin = "50px";
    resultado.style.padding = "10px";
  }, 2 * 1000);
});

btnChloe.addEventListener("click", () => {
  document.getElementById("btnOliver").style.display = "none";
  var btnChloe = document.querySelector("#btnChloe");
  btnChloe.style.transition = "400ms";
  btnChloe.style.padding = "0 50px  0 50px";
});
btnOliver.addEventListener("click", () => {
  document.getElementById("btnChloe").style.display = "none";
  var btnChloe = document.querySelector("#btnChloe");
  btnOliver.style.transition = "400ms";
  btnOliver.style.padding = "0 50px  0 50px";
});
