const bolinhaElemento = document.querySelector(".bolinha");
let posicao = 0;

function ganhou() {
  setTimeout(() => {
    alert("Parabéns você chegou!");
    reiniciar();
  }, 50);
}

function perdeu() {
    setTimeout(() => {
    alert("Poxa, errou! Tente novamente!");
    reiniciar();
    }, 50);
}

function moverBolinha(event) {
  if (event.keyCode == 39) {
    posicao += 10;
    bolinhaElemento.style.marginLeft = `${posicao}px`;
    if (posicao == 400) {
      ganhou();
    } else {
        perdeu();
    }
  }
}

function random() {
    posicao = Math.random() * 400;
    bolinhaElemento.style.marginLeft = `${posicao}px`;
    if (posicao == 400) {
      ganhou();
    } else {
      perdeu();
    }
  }

document.addEventListener("keydown", moverBolinha);

function reiniciar() {
  posicao = 0;
  bolinhaElemento.style.marginLeft = `${posicao}px`;
}


