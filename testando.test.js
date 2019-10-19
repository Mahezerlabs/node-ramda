function somar(a, b) {
  return a + b;
}

test('Função somar deve somar dois parametros', () => {
  expect(somar(1, 2)).toBe(3);
  expect(somar(2, 2)).toBe(4);
  expect(somar(3, 2)).toBe(5);
});
