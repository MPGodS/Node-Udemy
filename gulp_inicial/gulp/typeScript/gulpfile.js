const exp = require("constants");
const gulp = require("gulp");
const { series } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

function tranformacaoTS() {
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest("build"));
}

module.exports.default = series(tranformacaoTS);
