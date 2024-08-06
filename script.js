const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Hoje é dia de jogar uma pelota ?",
        alternativas: [
            {
                texto: "manhã!",
                afirmacao: "pelada de manhã."
            },
            {
                texto: "tarde!",
                afirmacao: "pelada à tarde."
            }
        ]
    },
    {
        enunciado: "Qual local você prefere? coberto ou descoberto"
        alternativas: [
            {
                texto: "coberto",
                afirmacao: "eles jogaram no coberto."
            },
            {
                texto: "descoberto",
                afirmacao: "eles jogaram no descoberto."
            }
        ]
    },
    {
        enunciado: "você trouxe chuteira?",
        alternativas: [
            {
                texto: "sim, eu trouxe!",
                afirmacao: "jogou com a propria chuteira."
            },
            {
                texto: "não, emprestei a chuteira do nareba!",
                afirmacao: "jogou com o pisante do nareba."
            }
        ]
    },
    {
        enunciado: "Ao final do futeba podemos tirar foto?",
        alternativas: [
            {
                texto: "simm!",
                afirmacao: "tiramos várias fotos."
            },
            {
                texto: "não",
                afirmacao: "fomos embora sem tirar nenhuma foto."
            }
        ]    
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpar alternativas antes de adicionar novas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "; // Concatenar a afirmação selecionada na história final
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final da tosa:"; // Texto final ajustado
    textoResultado.textContent = historiaFinal.trim(); // Mostrar a história final completa
    caixaAlternativas.textContent = ""; // Limpar alternativas
}


mostraPergunta();
