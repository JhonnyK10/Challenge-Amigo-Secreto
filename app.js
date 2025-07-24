let amigos = []

function adicionarAmigo() {
    let campo = document.getElementById("amigo");
    let nome = campo.value;
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    campo.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indice];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "O amigo secreto sorteado foi: " + nomeSorteado;
}
