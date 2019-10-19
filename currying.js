const ramda = require('ramda');
const curry = ramda.curry;

function somar(a, b) {
  return a + b;
}

const resultado = somar(1, 2);
console.log(resultado);

const resultado2 = somar(2);
console.log(resultado2);

const somarC = curry(somar);

const resultadoC = somarC(1, 2);
console.log(resultadoC);
//             function somar(a = 2, b);
const resultado1C = somarC(2);
console.log(resultado1C(3));


function montaUrl(host, porta, uri) {
  return `${host}:${porta}/${uri}`;
}

console.log(montaUrl('localhost', '3000', 'clientes'));

const montaUrlC = curry(montaUrl);

const montaUrlProd = montaUrlC('http://url.de.producao');
const montaUrlHomolog = montaUrlC('http://url.de.homologacao');

console.log(montaUrlProd('8080', 'clientes'));
console.log(montaUrlHomolog('8080', 'clientes'));
