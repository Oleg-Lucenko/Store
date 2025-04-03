function revisionCSS() {
    return app.gulp.src('dist/css/*.css')
    .pipe(app.rev())
    .pipe(app.revDel())
    .pipe(app.gulp.dest('dist/css'))
    .pipe(app.rev.manifest('dist/rev-manifest.json',
        {base: 'dist', merge: true}
    ))
    .pipe(app.gulp.dest('dist'))
};


export {revisionCSS};