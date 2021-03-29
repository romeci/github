"use strict";

var gulp = require("gulp"),
  minifyCSS = require("gulp-minify-css"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  prefix = require("gulp-autoprefixer"),
  htmlmin = require("gulp-htmlmin"),
  minify = require('gulp-minify'),
  sass = require("gulp-sass");

gulp.task("index", (cb) => {
  gulp
    .src("pages/src/index.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    // .pipe(concat("index.html"))
    .pipe(gulp.dest("./"));
  cb();
});

gulp.task("pages_menu", (cb) => {
  gulp
    .src("pages/src/menu/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("pages"));
  cb();
});

gulp.task("script", function () {
  return gulp
    .src(["assets/js/**/*.js"])
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    // .pipe(minify())
    .pipe(gulp.dest("assets/min/js/"));
});

gulp.task("style", (cb) => {
  gulp
    .src("assets/css/**/*.scss")
    .pipe(sass())
    .pipe(prefix("last 2 versions"))
    .pipe(concat("style.min.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest("assets/min/css/"));
  cb();
});

gulp.task("watch", function () {
  gulp.watch("assets/css/**/*.scss", gulp.series("style")),
    gulp.watch("assets/js/**/*.js", gulp.series("script")),
    gulp.watch("pages/src/index.html", gulp.series("index"));
    gulp.watch("pages/src/menu/**/*.html", gulp.series("pages_menu"));
  return;
});

gulp.task("default", gulp.series("style", "script", "index","pages_menu", "watch"));
