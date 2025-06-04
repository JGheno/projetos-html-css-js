const valoresHexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const corDoFundo = document.querySelector(".cor-do-fundo");

btn.addEventListener("click", mudarCorDoFundo)

function mudarCorDoFundo() {
    let valorHexadecimal = '#';
    
    for (let i = 0; i < 6; i++) {
        const valorAleatorio = Math.floor(Math.random() * valoresHexadecimal.length)
        valorHexadecimal += valoresHexadecimal[valorAleatorio];
        document.body.style.backgroundColor = valorHexadecimal;
        btn.style.backgroundColor = valorHexadecimal;
        corDoFundo.textContent = valorHexadecimal;
    }
}