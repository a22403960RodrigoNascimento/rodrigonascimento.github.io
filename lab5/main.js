// 1. Passa o rato
const passa = document.querySelector('#passa');
function mudaTexto() {
  passa.textContent = 'Obrigado por passares por aqui!';
}
function voltaTexto() {
  passa.textContent = '1. Passa por aqui!';
}

// 2. Pinta-me!
const pinta = document.querySelector('#pinta');
function pintar(cor) {
  pinta.style.color = cor;
}

// 3. Mudar cor do input a cada letra
const caixa = document.querySelector('#caixa');
let cores = ['lightblue', 'lightgreen', 'lightpink'];
let indice = 0;
function mudaCorFundo() {
  indice = (indice + 1) % cores.length;
  caixa.style.backgroundColor = cores[indice];
}

// 4. Mudar background do body
function mudaBackground(event) {
  event.preventDefault();
  const cor = document.querySelector('#corEscolhida').value;
  document.body.style.backgroundColor = cor;
}

// 5. Contador
let contador = 0;
const spanContador = document.querySelector('#contador');
function contar() {
  contador++;
  spanContador.textContent = contador;
}
