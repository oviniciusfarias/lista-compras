export function atualizaData (itemLista) {
  const textoHorario = document.createElement('p');
  textoHorario.classList.add('item-lista-texto');
  const semana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
  const data = new Date().toLocaleDateString('pt-BR');
  const horario = new Date().toLocaleTimeString('pt-BR', {hour: "numeric", minute: "numeric", second: "numeric"});
  // textoHorario.innerText = 'Segunda-feira (31/10/2022) às 08:30';
  textoHorario.innerText = `${semana} (${data}) às ${horario}`;

  return textoHorario;
}