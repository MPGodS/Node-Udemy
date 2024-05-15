const { series } = require("gulp");
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

function padrao(cb) {
  return gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      })
    )
    .pipe(uglify())
    .on("error", (err) => console.log("erros"))
    .pipe(concat("codigo.min.js"))
    .pipe(gulp.dest("build"));
}

module.exports.default = series(padrao);
