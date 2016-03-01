"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const config = require("../config");

const stylus = require("stylus");
const _ = require("lodash");

gulp.task("stylus", () =>
  gulp
  .src(`${config.src}/stylus/index.styl`)
  .pipe($.plumber({
    errorHandler: function(err) {
      console.log(err.message);
      this.emit("end");
    },
  }))
  .pipe($.if(config.isDebug, $.sourcemaps.init()))
  .pipe($.stylus({
    compress: !config.isDebug,
    sourcemap: config.isDebug ? {inline: true} : false,
    paths: [`${config.dest}/img`],
    use: [
      (styl) => {
        _.forEach(config.siteConfig, (val, key) => styl.define(key, val, true));
        styl.define("url", arg => new stylus.nodes.Literal(`url(../img/${arg.val})`));
        styl.define("data-url", stylus.url({limit: false}));
      },
    ],
  }))
  .pipe($.postcss([
    require("autoprefixer")(),
    require("cssnano")(),
  ]))
  .pipe($.if(config.isDebug, $.sourcemaps.write()))
  .pipe(gulp.dest(`${config.dest}/css`))
  .pipe($.livereload())
);
