import revReplace from'gulp-rev-replace';
import touch from 'gulp-touch-fd';


function replaceRevNames() {

    return app.gulp.src(['dist/**/*.{html,css,js}'])
    .pipe(revReplace({
      manifest: app.gulp.src('./dist/rev-manifest.json')
    }))
    .pipe(app.gulp.dest('dist'))
    .pipe(touch())
};


export {replaceRevNames};