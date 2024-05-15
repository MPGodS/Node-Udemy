const gulp = require("gulp");

const { series, parallel } = require("gulp");
const antes1 = (cb) => {
  console.log("1");
  return cb();
};

const antes2 = (cb) => {
  console.log("2");
  return cb();
};
const antes3 = (cb) => {
  console.log("3");
  return cb();
};

function copiar(cb) {
  //  COPIANDO ARQUIVOS PELO NOME
  //   gulp
  //     .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
  //     .pipe(gulp.dest("pastaB"));

  // COPIANDO ARQUIVOS PELA EXTENÇÃO
  gulp.src("pastaA/**/*.txt").pipe(gulp.dest("pastaB"));
  return cb();
}

module.exports.default = series(parallel(antes1, antes2), copiar, antes3);
