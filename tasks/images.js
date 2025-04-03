import imageMin from'gulp-imagemin';  


function images() {
    return app.gulp.src('src/img/*', {encoding: false})
    .pipe(imageMin())
    .pipe(app.gulp.dest('dist/img'))
}


export {images};