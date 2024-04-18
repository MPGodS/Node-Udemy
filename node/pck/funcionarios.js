const axios = require("axios");

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const ch = (f) => f.pais === "China";
const fem = (f) => f.genero === "F";
const menorSal = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then((response) => {
  const f = response.data;
  const func = f.filter(ch).filter(fem).reduce(menorSal);
  console.log(func);
});
