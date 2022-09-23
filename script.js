var numeroSorteado = document.querySelector("div.box h1");
const botaoSortear = document.querySelector("div.box button");
var roleta = [];

for (i = 1; i <= 100; i++) {
  roleta.push(i);
}

botaoSortear.addEventListener("click", () => {
  var div = document.querySelector("#container");

  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  document.getElementById("loader").src = "./img/loading.svg";

  setTimeout(function () {
    numeroSorteado.innerHTML =
      "O número sorteado é " +
      roleta[Math.floor(Math.random() * roleta.length)];

    var resultado = document.querySelector("#resultado");

    resultado.style.background = "#888888";
  }, 2 * 1000);
});
