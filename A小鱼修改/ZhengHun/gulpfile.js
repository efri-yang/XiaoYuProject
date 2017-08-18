

const gulp = require("gulp");

const htmls = require('./gulp/htmls');
const styles = require('./gulp/styles');
const scripts = require('./gulp/scripts');
const images = require('./gulp/images');
const others = require('./gulp/others');
const watch = require('./gulp/watch');
const server = require('./gulp/server');
const clean = require('./gulp/clean');


gulp.task('default', gulp.series(clean.dev, gulp.parallel(htmls.dev,scripts.dev, styles.dev, images.dev,others.dev,watch.dev,server.dev)));

gulp.task('build', gulp.series(clean.dist, gulp.parallel(htmls.dist,scripts.dist, styles.dist, images.dist,others.dist,server.dist,watch.dist)));

gulp.task('build:no', gulp.series(clean.dist, gulp.parallel(htmls.dist,scripts.noCompressDist, styles.noCompressDist, images.dist,others.dist,server.dist,watch.dist)));