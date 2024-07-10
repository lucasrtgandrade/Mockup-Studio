// Exibe os valores no mockup e Feedback
const exibirBordaVerso = document.getElementById("exibirDistanciaBorda--verso");
const exibirGravacaoVerso = document.getElementById("exibirAlturaArte--verso");
const exibirFundoVerso = document.getElementById("exibirDistanciaFundo--verso");
const exibirLarguraVerso = document.getElementById("exibirLargura--verso");
const feedbackAlturaVerso = document.getElementById("feedbackAlturaVerso");
const feedbackAlturaIcone = document.getElementById("alturaIcone");
const feedbackLarguraIcone = document.getElementById("larguraIcone");
const feedbackLarguraVerso = document.getElementById("feedbackLarguraVerso");

document.addEventListener('DOMContentLoaded', () => {

    // Analisar os valores recebidos
    const alturaGravacaoInput = document.getElementById("alturaCentralizada--verso");
    const larguraGravacaoInput = document.getElementById("larguraCentralizada--verso");

    // Recebe e analisa o valor dinâmico
    const alturaMaxGravacao = parseFloat(alturaGravacaoInput.dataset.maxAltura);
    const alturaCopo = parseFloat(alturaGravacaoInput.dataset.alturaCopo);
    const largura = parseFloat(larguraGravacaoInput.dataset.maxLargura);

    alturaGravacaoInput.addEventListener("input", function () {
        const alturaGravacao = parseFloat(alturaGravacaoInput.value);

        if (alturaGravacao > alturaMaxGravacao || alturaGravacao < 0) {
            feedbackAlturaVerso.textContent = `Valor inválido. Altura deve estar entre 0 e ${alturaMaxGravacao}mm.`;
            feedbackAlturaVerso.classList.remove('sucesso');
            feedbackAlturaVerso.classList.add('erro');
            feedbackAlturaIcone.src = 'imagens/icones/erro.svg';
            exibirBordaVerso.textContent = 'erro';
            exibirGravacaoVerso.textContent = 'erro';
            exibirFundoVerso.textContent = 'erro';
        } else {
            const divisao = (alturaCopo - alturaGravacao) / 2;
            feedbackAlturaVerso.textContent = 'Valor válido.';
            feedbackAlturaVerso.classList.remove('erro');
            feedbackAlturaVerso.classList.add('sucesso');
            feedbackAlturaIcone.src = 'imagens/icones/sucesso.svg';
            exibirGravacaoVerso.textContent = `${alturaGravacao}mm`;
            exibirBordaVerso.textContent = `${divisao}mm`;
            exibirFundoVerso.textContent = `${divisao}mm`;
        }
    });

    larguraGravacaoInput.addEventListener('input', function () {
        const larguraGravacao = parseFloat(larguraGravacaoInput.value);
        if (larguraGravacao > largura || larguraGravacao < 0) {
            feedbackLarguraVerso.textContent = `Valor inválido. Largura deve estar entre 0 e ${largura}mm.`;
            feedbackLarguraVerso.classList.remove('sucesso');
            feedbackLarguraVerso.classList.add('erro');
            feedbackLarguraIcone.src = 'imagens/icones/erro.svg';
            exibirLarguraVerso.textContent = 'erro';
        } else {
            feedbackLarguraVerso.textContent = 'Valor válido.';
            feedbackLarguraVerso.classList.remove('erro');
            feedbackLarguraVerso.classList.add('sucesso');
            feedbackLarguraIcone.src = 'imagens/icones/sucesso.svg';
            exibirLarguraVerso.textContent = `${larguraGravacao}mm`;
        }
    })
});



