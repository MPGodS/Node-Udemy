const fs = require("fs");

const caminho = __dirname + "/arquivo.json";
// sincrono
const conteudo = fs.readFileSync(caminho, "utf-8");
// assincrono
fs.readFile(caminho, "utf-8", (err, consteudo) => {
  const config = JSON.parse(consteudo);
  console.log(`${config.db.host}:${config.db.porta}`);
});

console.log(conteudo);

// POR SER JSON PODE SER LIDO ASSIM

const config = require("./arquivo.json");
console.log(config.db);

// ler pasta
fs.readdir(__dirname, (err, arq) => {
  console.log(arq);
});
