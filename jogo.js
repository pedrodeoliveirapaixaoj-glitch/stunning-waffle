const perguntas = [
    {
        pergunta: "Qual time o João Pedro torce?",
        opcoes: ["Corinthians", "Flamengo", "Palmeiras", "São Paulo"],
        resposta: 1
    },
    {
        pergunta: "De qual estado ele é?",
        opcoes: ["Bahia", "Goiás", "Rio Grande do Norte", "Ceará"],
        resposta: 2
    },
    {
        pergunta: "Qual jogo ele mais gosta de jogar?",
        opcoes: ["Free Fire", "Minecraft", "Roblox", "Fortnite"],
        resposta: 0
    }
];

let indice = 0;
let pontuacao = 0;

const textoPergunta = document.getElementById("pergunta");
const listaOpcoes = document.getElementById("opcoes");
const mostraPontos = document.getElementById("pontos");
const botaoReiniciar = document.getElementById("reiniciar");

function carregarPergunta() {
    const atual = perguntas[indice];
    textoPergunta.textContent = atual.pergunta;
    listaOpcoes.innerHTML = "";

    atual.opcoes.forEach((op, i) => {
        const botao = document.createElement("button");
        botao.classList.add("opcao");
        botao.textContent = op;
        botao.addEventListener("click", () => verificarResposta(i));
        listaOpcoes.appendChild(botao);
    });
}

function verificarResposta(escolhida) {
    const botoes = document.querySelectorAll(".opcao");
    const certa = perguntas[indice].resposta;

    botoes.forEach((botao, i) => {
        botao.disabled = true;
        if(i === certa) botao.classList.add("correta");
        else if(i === escolhida && i !== certa) botao.classList.add("errada");
    });

    if(escolhida === certa) pontuacao++;
    indice++;

    setTimeout(() => {
        if(indice < perguntas.length) carregarPergunta();
        else terminarJogo();
    }, 1200);
}

function terminarJogo() {
    textoPergunta.textContent = `Parabéns! Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
    listaOpcoes.innerHTML = "";
    mostraPontos.textContent = `Pontuação final: ${pontuacao}`;
    botaoReiniciar.style.display = "block";
}

botaoReiniciar.addEventListener("click", () => {
    indice = 0;
    pontuacao = 0;
    mostraPontos.textContent = "";
    botaoReiniciar.style.display = "none";
    carregarPergunta();
});

// Inicia o jogo
carregarPergunta();
