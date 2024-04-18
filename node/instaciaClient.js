const cnA = require("./instanciaUnica");
const cnB = require("./instanciaUnica");

const cnC = require("./instanciaNova")();
const cnD = require("./instanciaNova")();
cnA.inc();
cnA.inc();

console.log(cnB.valor);

cnC.inc();
cnC.inc();

console.log(cnD.valor, cnC.valor);
