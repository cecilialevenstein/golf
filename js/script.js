const bolinhaElemento = document.querySelector(".bolinha");
let posicao = 0;

function moverBolinha(event) {
    if (event.keyCode == 39) {
        posicao += 10;
        bolinhaElemento.style.marginLeft = `${posicao}px`;
        if(posicao == 400) {
            setTimeout(() => {
             alert("Parabéns você chegou!");
        },50);
    }
        console.log("moverBolinha", bolinhaElemento, posicao);
    }


}

document.addEventListener("keydown", moverBolinha);