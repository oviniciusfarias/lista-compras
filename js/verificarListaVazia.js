const mensagemListaVazia = document.getElementById('mensagem-lista-vazia');

export function verificarListaVazia (Lista) {

  if (Lista.childElementCount === 0) {
    if (Lista.id === 'lista-de-compras') {
      mensagemListaVazia.style.display = 'block';
    }

    if (Lista.id === 'itens-comprados') {
      Lista.previousElementSibling.style.display = 'none';
    }
  } else {
    if (Lista.id === 'lista-de-compras') {
      mensagemListaVazia.style.display = 'none';
    }

    if (Lista.id === 'itens-comprados') {
      Lista.previousElementSibling.style.display = 'block';
    }
  }

  
}