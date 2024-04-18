const fs = require("fs");

const produto = {
  nome: "Celular",
  preco: 1234,
  desc: 0.15,
};

fs.writeFile(__dirname + "/arqGera.json", JSON.stringify(produto), (err) => {
  console.log(err || "arquivo salvo");
});
