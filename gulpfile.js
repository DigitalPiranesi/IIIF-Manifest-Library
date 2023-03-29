/*
 * Copyright 2023 The University of South Carolina
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
 * This task is responsible for cleaning up old build files and cleaning the
 * builds before starting again.
 */
gulp.task("build-clean", function(){
  return del(["./build", "./dist"]);
});

/*
 * This task is responsible for resolving the dependencies from `require()` and
 * `import` statements and packing it all together into a single, web-compatible
 * Javascript file found in `/dist/app.build.js`.
 */
gulp.task("target-web", function(){
    return webpack(webpack_config).pipe(gulp.dest("dist"));
});

gulp.task("target-node", gulp.series("build-clean", "typescript"), function() {
    return gulp.src(["./build"]).pipe(gulp.dest("dist"));
});

/*
 * This task is responsible for running all the default tasks necessary to build,
 * compile, and pack the application.
 */
gulp.task("default", gulp.series("build-clean", "typescript", "target-web"), function() {
  console.log("Done");
});
