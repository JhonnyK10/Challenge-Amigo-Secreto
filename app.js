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
}
