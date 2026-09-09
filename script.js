const botao = document.querySelector("#botaoMensgem");
const mensagem = document.querySelector("#mensagemInterativa");
botao.addEventListener("click", mostrarMensagem);
function mostrarMensagem() {
    mensagem.textContent =
    "Você acabou de criar uma interação com JavaScript";
}

