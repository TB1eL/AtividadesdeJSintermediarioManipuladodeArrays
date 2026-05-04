lista = document.getElementById("lista");
input = document.getElementById("input");
nomes = ["jao", "biel", "theus"];

function addFirstName() {
    text = input.value;
    nomes.unshift(text);
    renderizar()
    input.value = "";
}

function addLastName() {
    text = input.value;
    nomes.push(text);
    renderizar()
    input.value = "";
}

function removeFirst() {
    nomes.shift();
    renderizar()
}

function removeLast() {
    nomes.pop();
    renderizar()
}

function namesCounter() {
    let contador = 0;

    nomes.forEach(nome => {
        if (nome.length > 5) {
            contador++;
        }
    });

    p = document.getElementById("p");
    p.innerText = "Total de nomes com mais de 5 letras é " + contador + ". \n Nomes: ";
}

function renderizar() {
    lista.innerHTML = "";

    nomes.forEach(element => {
        text = document.createElement("li");
        text.innerText = element;
        lista.appendChild(text);
    });

    namesCounter();
}

document.addEventListener("DOMContentLoaded", () => {renderizar(); namesCounter()});