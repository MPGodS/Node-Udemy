const porta = 8081;

const express = require("express");
const app = express();
const bp = require("body-parser");
const bd = require("./bd.js");

app.use(bp.json({ extended: true }));

app.get("/produtos", (req, res, next) => {
  res.send(bd.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(bd.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  console.log(req.body.name);
  const produto = bd.save({
    name: req.body.name,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = bd.deleteProduto(req.params.id);
  res.send(produto);
});

app.listen(porta, () => {
  console.log(`servidor ${porta}`);
});
