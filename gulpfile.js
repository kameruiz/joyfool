// set up by john !

const gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// Static server
gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./javascript/*.js').on('change', browserSync.reload);
  gulp.watch('./images/*').on('change', browserSync.reload);
  gulp.watch('./css/*.css').on('change', browserSync.reload);
});
