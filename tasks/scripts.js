import uglifyEs from 'gulp-uglify-es';


const uglify = uglifyEs.default;

function scripts() {
    return app.gulp.src('src/js/*.js')
    .pipe(app.sourceMaps.init())
    .pipe(app.plumber())
    .pipe(uglify())
    .pipe(app.rename({suffix: '.min'}))
    .pipe(app.sourceMaps.write())
    .pipe(app.gulp.dest('dist/js'))
    .pipe(app.server.stream());
};


export {scripts};