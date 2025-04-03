import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';




function fonts() {
    app.gulp.src('src/fonts/*.ttf', {
        encoding: false,
        removeBOM: false,
      })
      .pipe(ttf2woff())
      .pipe(app.gulp.dest('dist/fonts'));
    return app.gulp.src('src/fonts/*.ttf', {
        encoding: false,
        removeBOM: false,
      })
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest('dist/fonts'))

}


export {fonts};