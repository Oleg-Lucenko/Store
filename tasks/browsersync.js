
function browsersync() {

    app.server.init({
        server: {
            baseDir: './dist/'
        }
    });

};


export {browsersync};