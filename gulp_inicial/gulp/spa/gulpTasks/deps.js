const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));

function depsCSS() {
  return gulp
    .src("../node_modules/font-awesome/css/font-awesome.css")
    .pipe(uglifycss({ uglyComments: false }))
    .pipe(concat("deps.min.css"))
    .pipe(gulp.dest("build/assets/css"));
}

function depsFonts() {
  return gulp
    .src("../node_modules/font-awesome/fonts/*.*")
    .pipe(gulp.dest("build/assets/fonts"));
}

module.exports = {
  depsCSS,
  depsFonts,
};
