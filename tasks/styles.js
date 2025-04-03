import autoprefixer from 'gulp-autoprefixer';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';


const scss = gulpSass(dartSass);

function styles() {
    return app.gulp.src('src/scss/style.scss')
    .pipe(app.sourceMaps.init())
    .pipe(app.plumber())
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version']}))
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(app.rename({suffix: '.min'}))
    .pipe(app.sourceMaps.write())
    .pipe(app.gulp.dest('dist/css'))
    .pipe(app.server.stream());
};



export {styles};