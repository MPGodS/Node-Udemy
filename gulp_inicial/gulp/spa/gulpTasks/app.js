const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");

function appHTML(cb) {
  return cb();
}

function appCSS(cb) {
  return cb();
}

function appJS(cb) {
  return cb();
}

function appIMG(cb) {
  return cb();
}

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG,
};
