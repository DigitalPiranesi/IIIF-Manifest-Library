const gulp = require("gulp");
const ts = require("gulp-typescript");
const del = require("del");
const webpack = require('webpack-stream');
const webpack_config = require("./webpack.config.js");
const tsProject = ts.createProject("tsconfig.json");

/*
 * This task is responsible for compiling the typescript down the basic ES6 Javascript.
 * The resulting output is then sent to `/build`.
 */
gulp.task("typescript", function(){
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("build"));
});

/*
 * This task is responsible for resolving the dependencies from `require()` and
 * `import` statements and packing it all together into a single, web-compatible
 * Javascript file found in `/dist/app.build.js`.
 */
gulp.task("webpack", function(){
    return webpack(webpack_config).pipe(gulp.dest("dist"));
});

/*
 * This task is responsible for cleaning up old build files and cleaning the
 * builds before starting again.
 */
gulp.task("build-clean", function(){
  return del(["./build", "./dist"]);
});

/*
 * This task is responsible for running all the default tasks necessary to build,
 * compile, and pack the application.
 */
gulp.task("default", gulp.series("build-clean", "typescript", "webpack"), function() {
  console.log("Done");
});
