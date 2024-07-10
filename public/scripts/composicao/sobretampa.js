function atualizarSobretampa() {
    const escolherSobretampa = document.getElementById('escolherSobretampa');
    const opcaoSelecionada = escolherSobretampa.options[escolherSobretampa.selectedIndex];
    const caminhoImagem = opcaoSelecionada.getAttribute('data-image');
    const exibirProduto = document.getElementById('sobretampaEscolhida');
    exibirProduto.src = caminhoImagem;
}