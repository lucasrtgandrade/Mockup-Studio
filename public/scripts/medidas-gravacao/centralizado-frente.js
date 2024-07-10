// Exibe os valores no mockup e Feedback
const exibirBordaFrente = document.getElementById("exibirDistanciaBorda--frente");
const exibirGravacaoFrente = document.getElementById("exibirAlturaArte--frente");
const exibirFundoFrente = document.getElementById("exibirDistanciaFundo--frente");
const exibirLarguraFrente = document.getElementById("exibirLargura--frente");
const feedbackAlturaFrente = document.getElementById("feedbackAltura--frente");
const feedbackAlturaIconeFrente = document.getElementById("alturaIcone--frente");
const feedbackLarguraIconeFrente = document.getElementById("larguraIcone--frente");
const feedbackLarguraFrente = document.getElementById("feedbackLargura--frente");

document.addEventListener('DOMContentLoaded', () => {

    // Analisar os valores recebidos
    const alturaGravacaoInput = document.getElementById("alturaCentralizada--frente");
    const larguraGravacaoInput = document.getElementById("larguraCentralizada--frente");

    // Recebe e analisa o valor dinâmico
    const alturaMaxGravacao = parseFloat(alturaGravacaoInput.dataset.maxAltura);
    const alturaCopo = parseFloat(alturaGravacaoInput.dataset.alturaCopo);
    const largura = parseFloat(larguraGravacaoInput.dataset.maxLargura);

    alturaGravacaoInput.addEventListener("input", function () {
        const alturaGravacao = parseFloat(alturaGravacaoInput.value);

        if (alturaGravacao > alturaMaxGravacao || alturaGravacao < 0) {
            feedbackAlturaFrente.textContent = `Valor inválido. Altura deve estar entre 0 e ${alturaMaxGravacao}mm.`;
            feedbackAlturaFrente.classList.remove('sucesso');
            feedbackAlturaFrente.classList.add('erro');
            feedbackAlturaIconeFrente.src = 'imagens/icones/erro.svg';
            exibirBordaFrente.textContent = 'erro';
            exibirGravacaoFrente.textContent = 'erro';
            exibirFundoFrente.textContent = 'erro';
        } else {
            const divisao = (alturaCopo - alturaGravacao) / 2;
            feedbackAlturaFrente.textContent = 'Valor válido.';
            feedbackAlturaFrente.classList.remove('erro');
            feedbackAlturaFrente.classList.add('sucesso');
            feedbackAlturaIconeFrente.src = 'imagens/icones/sucesso.svg';
            exibirGravacaoFrente.textContent = `${alturaGravacao}mm`;
            exibirBordaFrente.textContent = `${divisao}mm`;
            exibirFundoFrente.textContent = `${divisao}mm`;
        }
    });

    larguraGravacaoInput.addEventListener('input', function () {
        const larguraGravacao = parseFloat(larguraGravacaoInput.value);
        if (larguraGravacao > largura || larguraGravacao < 0) {
            feedbackLarguraFrente.textContent = `Valor inválido. Largura deve estar entre 0 e ${largura}mm.`;
            feedbackLarguraFrente.classList.remove('sucesso');
            feedbackLarguraFrente.classList.add('erro');
            feedbackLarguraIconeFrente.src = 'imagens/icones/erro.svg';
            exibirLarguraFrente.textContent = 'erro';
        } else {
            feedbackLarguraFrente.textContent = 'Valor válido.';
            feedbackLarguraFrente.classList.remove('erro');
            feedbackLarguraFrente.classList.add('sucesso');
            feedbackLarguraIconeFrente.src = 'imagens/icones/sucesso.svg';
            exibirLarguraFrente.textContent = `${larguraGravacao}mm`;
        }
    })
});



