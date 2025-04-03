import htmlMin from 'gulp-htmlmin';
import fileInclude from 'gulp-file-include';




function html() {
    return app.gulp.src('src/*.html')
    .pipe(fileInclude({
        prefix: '@',
        basepath:'@file'
    }))
    .pipe(app.sourceMaps.init())
    .pipe(app.plumber())
    .pipe(htmlMin( { collapseWhitespace: true }))
    .pipe(app.sourceMaps.write())
    .pipe(app.gulp.dest('dist'))
    .pipe(app.server.stream());
};


export {html};