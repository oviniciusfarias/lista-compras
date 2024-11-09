import { adicionarItem } from './js/adicionarItem.js';
import { verificarListaVazia } from './js/verificarListaVazia.js';

const listaComprados = document.getElementById('itens-comprados');
const listaDeCompras = document.getElementById('lista-de-compras');

const botaoSalvarItem = document.getElementById('adicionar-botao');
botaoSalvarItem.addEventListener('click', adicionarItem);

verificarListaVazia(listaDeCompras);
verificarListaVazia(listaComprados);