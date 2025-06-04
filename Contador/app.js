// const btnAumentar = document.getElementById('aumentar')

// const btnDiminuir = document.getElementById('diminuir')

// const btnReinciar = document.getElementById('reiniciar')

// btnAumentar.addEventListener('click',aumentar)

// btnDiminuir.addEventListener('click',diminuir)

// btnReinciar.addEventListener('click',reiniciar)

// let contador = 0

// function aumentar() {
//     contador++;
//     numero.textContent = contador;
// }

// function diminuir(params) {
//     contador--;
//     numero.textContent = contador;
// }

// function reiniciar(params) {
//     contador = 0;
//     numero.textContent = contador;
// }


let contador = 0

const numero = document.querySelector("#numero");
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const idBotaoClicado = e.currentTarget.id;

        if (idBotaoClicado === "aumentar") {
            contador++;
        } else if (idBotaoClicado === "diminuir") {
            contador--;
        } else if (idBotaoClicado === "reiniciar") {
            contador = 0;
        }

        if (contador > 0) {
            numero.style.color = 'green';
        } else if(contador < 0){
            numero.style.color = 'red';
        } else {
            numero.style.color = 'black';
        };
        numero.textContent = contador;
    });
});