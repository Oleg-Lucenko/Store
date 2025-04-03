function revisionJS() {
    return app.gulp.src('dist/js/*.js')
    .pipe(app.rev())
    .pipe(app.revDel())
    .pipe(app.gulp.dest('dist/js'))
    .pipe(app.rev.manifest('dist/rev-manifest.json',
        {base: 'dist', merge: true}
    ))
    .pipe(app.gulp.dest('dist'))
};


export {revisionJS};