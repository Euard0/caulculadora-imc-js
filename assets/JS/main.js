// capturar o evento submit do form

const form = document.querySelector('#form')

form.addEventListener('submit', e => {
  e.preventDefault();

  //  pegando os inputs
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  // convertendo os valores para numbers
  const peso =  Number(inputPeso.value);
  const altura =  Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso invalido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura invalida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} <br/> ${nivelImc}`;

  setResultado(msg, true);
});


function getNivelImc (imc) {
  const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

  if (imc >= 39.9) {
    return nivel[5];
  }

  if (imc >= 34.9) {
    return nivel[4];
  }

  if (imc >= 29.9) {
    return nivel[3];
  }

  if (imc >= 24.9) {
    return nivel[2];
  }

  if (imc >= 18.5) {
    return nivel[1];
  }

  if (imc <= 18.5) {
    return nivel[0];
  }
}

// function para o imc
function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// function para criar os paragráfos
function criaP () {
  const p = document.createElement('p');
  return p;
}

// function para capturar o resultado
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();
  p.innerHTML = msg;
  resultado.appendChild(p);

  if (isValid) {
    p.classList.add('resultado-paragrafo')
  } else {
    p.classList.add('bad')
  }

}






// // capturar evento de submit do formulario

// const form = document.querySelector('#form');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log('evento previnido.')
//     setResultado('Olá mundo');
// });

// // função para criar os paragráfos
// function criaP () {
//     const p = document.createElement('p'); return p;
// }

// // capturar o resultado

// function setResultado (msg) {
//   const resultado = document.querySelector('#resultado');
//   resultado.innerHTML = '';
//   const p = criaP();
  
// };