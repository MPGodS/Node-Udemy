const { series, parallel } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function transformacaoCSS() {
  return gulp
    .src("src/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("estilo.min.css"))
    .pipe(gulp.dest("build/css"));
}

function copiaHTML() {
  return gulp.src("src/index.html").pipe(gulp.dest("build"));
}

module.exports.default = series(parallel(transformacaoCSS, copiaHTML));
