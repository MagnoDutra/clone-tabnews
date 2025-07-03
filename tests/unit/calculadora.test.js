const calculadora = require("../../models/calculadora.js");

test("somar 2+2", () => {
  const result = calculadora.somar(2, 2);

  expect(result).toBe(4);
});

test("somar 5+100", () => {
  const result = calculadora.somar(5, 100);

  expect(result).toBe(105);
});

test("somar banana + 100 deve retornar erro", () => {
  const result = calculadora.somar("banana", 100);

  expect(result).toBe("Erro");
});
