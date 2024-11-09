import { excluirItem } from "./excluirItem.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaComprados = document.getElementById('itens-comprados');
const listaDeCompras = document.getElementById('lista-de-compras');
let contador = 0 

export function criarItemDaLista(item) {
  /* 
    <li>
      <div class="item-lista-container">
        <div class="container-nome-compra">
          <div class="checkbox-container">
            <label for="checkbox-1">
              <input type="checkbox" class="checkbox-input" id="checkbox-1">
              <div class="checkbox-customizado checked"></div>
            </label>
          </div>
          <p>Ração de gato</p>
        </div>
        <div>
          <button class="botao-acao">
            <img src="img/delete.svg" alt="Deletar">
          </button>
          <button class="botao-acao">
            <img src="img/edit.svg" alt="Editar">
          </button>
        </div>
      </div>
      <p class="item-lista-texto">Segunda-feira (31/10/2022) às 08:30</p>
    </li>
  */

  // Cria a li e o container da li
  const itemDalista = document.createElement('li');
  const containerItemLista = document.createElement('div');

  // Cria o container do nome da lista, que contém o checkbox e o texto do checklist
  const containerNomeDoItem = document.createElement('div');
  containerItemLista.classList.add('item-lista-container');

  // Create Checkbox
  const containerCheckbox = document.createElement('div');
  const checkboxLabel = document.createElement('label');
  const checkboxInput = document.createElement('input');
  const checkboxCustomizado = document.createElement('div');

  containerCheckbox.classList.add('checkbox-container');
  checkboxInput.type = 'checkbox';
  checkboxInput.classList.add('checkbox-input');
  checkboxInput.id = 'checkbox-' + contador++;
  checkboxLabel.setAttribute('for', checkboxInput.id);
  checkboxCustomizado.classList.add('checkbox-customizado');

  checkboxLabel.addEventListener('click', event => {
    const checkboxInput = event.currentTarget.querySelector('.checkbox-input');
    const checkboxCustomizado = event.currentTarget.querySelector('.checkbox-customizado');
    const itemTitulo = event.currentTarget.closest('li').querySelector('.item-titulo');

    if (checkboxInput.checked) {
      checkboxCustomizado.classList.add('checked');
      listaComprados.appendChild(itemDalista);
      itemTitulo.style.textDecoration = 'line-through';
    } else {
      checkboxCustomizado.classList.remove('checked');
      itemTitulo.style.textDecoration = 'none';
      listaDeCompras.appendChild(itemDalista);
    }

    verificarListaVazia(listaDeCompras);
    verificarListaVazia(listaComprados);
  });

  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxCustomizado);
  containerCheckbox.appendChild(checkboxLabel);
  containerNomeDoItem.appendChild(containerCheckbox);

  // Cria o texto com o texto do checklist
  const nomeDoItem = document.createElement('p');

  containerNomeDoItem.classList.add('container-nome-compra');
  nomeDoItem.classList.add('item-titulo');
  nomeDoItem.innerText = item;
  containerNomeDoItem.appendChild(nomeDoItem);
  containerItemLista.appendChild(containerNomeDoItem);

  // Cria os botões de remover e editar
  const containerBotoes = document.createElement('div');
  const botaoRemover = document.createElement('button');
  const botaoEditar = document.createElement('button');
  const imagemRemover = document.createElement('img');
  const imagemEditar = document.createElement('img');

  containerBotoes.classList.add('container-botoes')

  botaoRemover.classList.add('botao-acao');
  botaoEditar.classList.add('botao-acao');
  imagemRemover.src = 'img/delete.svg';
  imagemRemover.alt = 'Remover';
  imagemEditar.src = 'img/edit.svg';
  imagemEditar.alt = 'Editar';

  botaoRemover.addEventListener('click', (event) => {
    excluirItem(itemDalista);
  })

  botaoRemover.appendChild(imagemRemover);
  botaoEditar.appendChild(imagemEditar);
  containerBotoes.appendChild(botaoRemover);
  containerBotoes.appendChild(botaoEditar);
  containerItemLista.appendChild(containerBotoes);

  // Cria o texto com o horário da criação
  const textoHorario = document.createElement('p');
  textoHorario.classList.add('item-lista-texto');
  const semana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
  const data = new Date().toLocaleDateString('pt-BR');
  const horario = new Date().toLocaleTimeString('pt-BR', {hour: "numeric", minute: "numeric"});
  // textoHorario.innerText = 'Segunda-feira (31/10/2022) às 08:30';
  textoHorario.innerText = `${semana} (${data}) às ${horario}`;

  // Adiciona na li os elementos criados
  itemDalista.appendChild(containerItemLista);
  itemDalista.appendChild(textoHorario);

  return itemDalista;
}