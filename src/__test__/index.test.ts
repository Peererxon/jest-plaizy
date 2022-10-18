const ramdomStrings = require("../index");
//Corriendo pruebas dentro de un codigo de bloque descrito
describe("Probar funcionalidades de ramdomStrings", () => {
  test("should return a string", () => {
    expect(typeof ramdomStrings()).toBe("string");
  });

  test("Comprobar que no existe una Ciudad", () => {
    expect(ramdomStrings()).not.toMatch(/Cordoba/);
  });
});
