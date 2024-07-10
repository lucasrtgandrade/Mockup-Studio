function atualizarCopo() {
    const escolherCopo = document.getElementById('escolherCopo');
    const opcaoSelecionada = escolherCopo.options[escolherCopo.selectedIndex];
    const caminhoImagem = opcaoSelecionada.getAttribute('data-image');
    const exibirProduto = document.getElementById('copoEscolhido');
    exibirProduto.src = caminhoImagem;
}