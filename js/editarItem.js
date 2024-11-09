import { atualizaData } from "./atualizarData.js";

export function editarItem (elemento) {
  let novoItem = prompt("Digite o nome nome do item:");

  if (novoItem !== null && novoItem.trim() !== '') {
    const itemTextoAtualizado = elemento.querySelector('.item-titulo');
    itemTextoAtualizado.textContent = novoItem;

    const estavaComprado = elemento.querySelector('.checkbox-input').checked;

    if (estavaComprado) {
      elemento.querySelector('.checkbox-input').checked = true;
      elemento.querySelector('.checkbox-customizado').classList.add('checked');
      itemTextoAtualizado.style.textDecoration = "line-through";
    }

    const textoHorario = atualizaData(elemento);
    elemento.querySelector('.item-lista-texto').replaceWith(textoHorario);
  }
}