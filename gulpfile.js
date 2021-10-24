const gulp = require("gulp");
const ts = require("gulp-typescript");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const del = require("del");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", function(){
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

gulp.task("build-clean", function(){
  return del(["./dist"]);
});

gulp.task("default", gulp.series("build-clean", "typescript"), function() {
  console.log("Done");
});
