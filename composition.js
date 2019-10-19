const ramda = require('ramda');
const curry = ramda.curry;
const compose = ramda.compose;
const pipe = ramda.pipe;

// function fazerMassa(ingredientes) => massaBolo
// function assarBolo(massaBolo) => bolo
// function fazerBolo(ingredientes) => bolo

// assarBolo(fazerMassa(ingredientes))

function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

const somarC = curry(somar);
const multiplicarC = curry(multiplicar);

const adicionar1 = somarC(1);
const dobro = multiplicarC(2);

const dobroMais1 = compose(
  adicionar1,
  dobro
);

const pipeExemplo = pipe(
  adicionar1,
  dobro
);

console.log(dobroMais1(2));
console.log(pipeExemplo(2));

// function formatarJson(json) {
//   return {
//     json
//   }
// }

// function postRequest(json) {
//   await axios.get('')
// }
