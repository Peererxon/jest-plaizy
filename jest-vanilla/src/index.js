const cities = [
  "Ciudad de Mexico",
  "Bogota",
  "Lima",
  "Buenos Aires",
  "Guadalajara",
];

const ramdomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString2 = (string) => {
  return new Promise((resolver, reject) => {
    if (!string) reject(Error("string is needed"));

    resolver(string.split("").reverse().join(""));
  });
};

//con jest --coverage me muestra un reporte de que tanto del codigo estamos probando (funcion sapa)

module.exports = ramdomString;
