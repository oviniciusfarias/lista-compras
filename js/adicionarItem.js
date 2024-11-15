import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById('input-item');
const listaDeCompras = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById('itens-comprados');

export function adicionarItem(event) {
  event.preventDefault();

  if (item.value === '') {
    alert('Por favor, insira um item!');
    return;
  }

  const itemDalista = criarItemDaLista(item.value);
  listaDeCompras.appendChild(itemDalista);

  verificarListaVazia(listaDeCompras);
  verificarListaVazia(listaComprados);

  item.value = '';
}