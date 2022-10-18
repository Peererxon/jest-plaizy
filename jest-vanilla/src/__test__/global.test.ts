const fruist = ["manzana", "melon", "banana"];

test("Debe contener un texto", () => {
  const text = "Hola mundo";
  expect(text).toMatch(/mundo/);
});

test("Tenemos una banana?", () => {
  expect(fruist).toContain("banana");
  //expect(10).toBeGreaterThan(9)
  //expect(true).toBeTruthy()
});

const reverseString = (string, callback) => {
  callback(string.split("").reverse().join(""));
};

test("Probar un callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

const reverseString2 = (string) => {
  return new Promise((resolver, reject) => {
    if (!string) reject(Error("string is needed"));

    resolver(string.split("").reverse().join(""));
  });
};

//Probando codigo asyncrono
test("Probar una promesa", () => {
  return reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});

test("Probar una promesa con un mal parametro", () => {
  return reverseString2().catch((err) => {
    const errorMessage = new Error("string is needed");
    expect(err.message).toBe(errorMessage.message);
  });
});

/* 
Esta parte del codigo se suele utilizar para monstar una Db y desmontarla segun sea necesario
*/
/* afterEach(() => console.log("Despues de cada prueba"));
afterAll(() => console.log("Despues de todas las pruebas"));

beforeEach(() => console.log("antes de cada prueba"));
beforeAll(() => console.log("antes de todas las pruebas"));
 */
