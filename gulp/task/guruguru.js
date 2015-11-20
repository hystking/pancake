const gulp = require("gulp");
const guruguru = require("../lib/guruguru");

gulp.task("guruguru", () =>
  guruguru(gulp)
);
