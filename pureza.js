// Não pode depender do contexto
// Não pode causar efeitos colaterais
// Retornar o mesmo valor para os mesmo parametros

let resultado;

function somar(a, b) {
  resultado = a + b;
}

somar(1, 2);
if (resultado == 3) {
  console.log('É igual 3');
}

somar(1, 2);
console.log(resultado);

somar(3, 4);
console.log(resultado);

// Somar puro
function somarP(a, b) {
  return a + b;
}

const resultadoP = somarP(4, 5);
console.log("Puro", resultadoP);
