lista = document.getElementById("lista");
input = document.getElementById("input");
nomes = ["jao", "biel", "theus"];

function addFirstName() {
    if(input.value != "") {
        text = input.value;
        nomes.unshift(text);
        renderizar()
        input.value = "";
    }
}

function addLastName() {
    if(input.value != "") {
        text = input.value;
        nomes.push(text);
        renderizar()
        input.value = "";
    }
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

    if (contador > 0) {
        let nomesFilter = nomes.filter(nome => nome.length > 5);

        p = document.getElementById("p");
        p.innerText = "Total de nomes com mais de 5 letras é " + contador + ". \n Nomes: " + nomesFilter;
    }
}

function filter() {
    lista.innerHTML = "";

    nomes.forEach(nome => {
        if (nome.length > 5) {
            text = document.createElement("li");
            text.innerText = nome;
            lista.appendChild(text);
        }
    });

    namesCounter();
}

function upper() {
    lista.innerHTML = "";
    _upNomes = nomes.map(x => x.toUpperCase());
    _upNomes.forEach(element => {
        text = document.createElement("li");
        text.innerText = element;
        lista.appendChild(text);
    });
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