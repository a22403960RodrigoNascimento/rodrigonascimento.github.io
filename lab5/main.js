// 1. Passa o rato
const passa = document.querySelector('#passa');
function mudaTexto() {
  passa.textContent = 'Obrigado por passares por aqui!';
}
function voltaTexto() {
  passa.textContent = '1. Passa por aqui!';
}

// 2. Pinta
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
document.querySelector('#corEscolhida').onchange = function() {
  document.querySelector('body').style.backgroundColor = this.value;
};

// 5. Contador
let contador = 0;
const spanContador = document.querySelector('#contador');
function contar() {
  contador++;
  spanContador.textContent = contador;
}


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('saudacaoForm');
  if (!form) return;

  const nomeEl = document.getElementById('nome');
  const idadeEl = document.getElementById('idade');
  const out = document.getElementById('resultado6');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = (nomeEl.value || '').trim();
    const idade = (idadeEl.value || '').trim();

    if (!nome || idade === '') {
      out.textContent = 'Por favor, preencha o nome e a idade.';
      return;
    }

    const nomeFmt = nome.charAt(0).toUpperCase() + nome.slice(1);
    out.textContent = `Olá, o ${nomeFmt} tem ${idade}!`;
  });
});

// 7. Contador automático de segundos
document.addEventListener('DOMContentLoaded', () => {
  const contadorAuto = document.getElementById('autoContador');
  if (!contadorAuto) return;

  let segundos = 0;
  setInterval(() => {
    segundos++;
    contadorAuto.textContent = segundos;
  }, 1000); 
});
