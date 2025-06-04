const cores = ["Red", "Blue", "Green", "Grey", "White", "Orange", "Brown", "Purple", "Yellow", "Pink"];

const btn = document.getElementById("btn");

const corDoFundo = document.querySelector(".cor-do-fundo");

btn.addEventListener("click", mudarCorDoFundo)

function mudarCorDoFundo() {
    const numeroAleatorio = Math.floor(Math.random() * cores.length)
    console.log(numeroAleatorio)
    document.body.style.backgroundColor = cores[numeroAleatorio]
    corDoFundo.textContent = cores[numeroAleatorio]
    btn.style.backgroundColor = cores[numeroAleatorio]
}

