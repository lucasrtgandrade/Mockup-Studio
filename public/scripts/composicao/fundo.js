function atualizarFundo() {
    const escolherFundo = document.getElementById('escolherFundo');
    const opcaoSelecionada = escolherFundo.options[escolherFundo.selectedIndex];
    const caminhoImagem = opcaoSelecionada.getAttribute('data-image');
    const exibirProduto = document.getElementById('fundoEscolhido');
    exibirProduto.src = caminhoImagem;
}