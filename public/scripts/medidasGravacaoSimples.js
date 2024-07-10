window.onload = function() {
    const alturaInput = document.getElementById('alturaGravacao');
    const larguraInput = document.getElementById('larguraGravacao');
    const alturaDisplay = document.getElementById('exibirAlturaGravacao');
    const larguraDisplay = document.getElementById('exibirLarguraGravacao');
    const alturaFeedback = document.getElementById('alturaFeedback');
    const larguraFeedback = document.getElementById('larguraFeedback');
    const alturaIcone = document.getElementById('alturaIcone');
    const larguraIcone = document.getElementById('larguraIcone');

    const maxAltura = parseInt(alturaInput.dataset.maxAltura, 10);
    const maxLargura = parseInt(larguraInput.dataset.maxLargura, 10);

    alturaInput.addEventListener('input', function() {
        const alturaValue = parseInt(alturaInput.value, 10);
        if (alturaValue < 0 || alturaValue > maxAltura) {
            alturaFeedback.textContent = `Valor inválido. Altura deve estar entre 0 e ${maxAltura}mm.`;
            alturaFeedback.classList.remove('sucesso');
            alturaFeedback.classList.add('erro');
            alturaIcone.src = 'imagens/icones/erro.svg';
            alturaDisplay.textContent = '';
        } else {
            alturaFeedback.textContent = 'Valor Válido';
            alturaFeedback.classList.remove('erro');
            alturaFeedback.classList.add('sucesso');
            alturaIcone.src = 'imagens/icones/sucesso.svg';
            alturaDisplay.textContent = alturaValue + ' mm';
        }
    });

    larguraInput.addEventListener('input', function() {
        const larguraValue = parseInt(larguraInput.value, 10);
        if (larguraValue < 0 || larguraValue > maxLargura) {
            larguraFeedback.textContent = `Valor inválido. Largura deve estar entre 0 e ${maxLargura}mm.`;
            larguraFeedback.classList.remove('sucesso');
            larguraFeedback.classList.add('erro');
            larguraIcone.src = 'imagens/icones/erro.svg';
            larguraDisplay.textContent = '';
        } else {
            larguraFeedback.textContent = 'Valor Válido';
            larguraFeedback.classList.remove('erro');
            larguraFeedback.classList.add('sucesso')
            larguraIcone.src = 'imagens/icones/sucesso.svg';
            larguraDisplay.textContent = larguraValue + ' mm';
        }
    });
};