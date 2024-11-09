import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById('itens-comprados');

export function excluirItem (elemento) {
  let confirmacao = confirm('Tem certeza que deseja excluir esse item?');

  if (confirmacao) {
    elemento.remove();

    verificarListaVazia(listaDeCompras);
    verificarListaVazia(listaComprados);
  }
}