function atualizarUmProduto() {
    const escolherCor = document.getElementById('escolherCor');
    const opcaoSelecionada = escolherCor.options[escolherCor.selectedIndex];
    const caminhoImagem = opcaoSelecionada.getAttribute('data-image');
    const exibirProduto = document.getElementById('produtoEscolhido');
    exibirProduto.src = caminhoImagem;
}