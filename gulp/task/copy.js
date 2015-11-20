const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const config = require("../config");
const pngquant = require("imagemin-pngquant");

gulp.task("copy", () =>
  gulp
  .src([
    `${config.src}/img/**/*.{png,jpg,gif}`,
    `!${config.src}/img/sprite{,/**}`,
  ], {base: config.src})
  .pipe($.if(!config.isDebug, $.imagemin({
    progressive: true,
    use: [pngquant()],
  })))
  .pipe(gulp.dest(config.dest))
);
