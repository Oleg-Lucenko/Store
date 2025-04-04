import gulp from 'gulp';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';  
import sourceMaps from 'gulp-sourcemaps';
import rev from 'gulp-rev';
import revDel from 'gulp-rev-delete-original';
import browserSync from 'browser-sync';




global.app = {
    gulp: gulp,
    server: browserSync.create(),
    plumber: plumber,
    rename: rename,
    sourceMaps: sourceMaps,
    rev: rev,
    revDel: revDel
}

import {styles} from './tasks/styles.js';
import {scripts} from './tasks/scripts.js';
import {html} from './tasks/html.js';
import {fonts} from './tasks/fonts.js'
import {images} from './tasks/images.js';
import {browsersync} from './tasks/browsersync.js';
import {revisionCSS} from './tasks/revisionCSS.js';
import {revisionJS} from './tasks/revisionJS.js';
import {replaceRevNames} from './tasks/replaceRevNames.js';
import {reset} from './tasks/reset.js';



const {watch, series, parallel} = gulp;


function watcher() {
    watch('src/scss/**/*.scss', styles);
    watch('src/js/*.js', scripts);
    watch('src/**/*.html', html);
    watch('src/img/*', images);
};

const dev = series(reset, fonts, parallel(html, styles, scripts, images), parallel(watcher, browsersync));
const build = series(reset, fonts, parallel(html, styles, scripts, images), revisionCSS, revisionJS, replaceRevNames, browsersync);
const buildForHosting = series(reset, fonts, parallel(html, styles, scripts, images), revisionCSS, revisionJS, replaceRevNames);


export {dev};
export {build};
export {buildForHosting}

export default build;




