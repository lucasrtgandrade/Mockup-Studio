function atualizarTampa() {
    const escolherTampa = document.getElementById('escolherTampa');
    const opcaoSelecionada = escolherTampa.options[escolherTampa.selectedIndex];
    const caminhoImagemTampa = opcaoSelecionada.getAttribute('data-image');
    const exibirTampa = document.getElementById('tampaEscolhida');
    exibirTampa.src = caminhoImagemTampa;
}