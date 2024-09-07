const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { exec } = require('child_process');

// Define the source files to watch
const srcFiles = 'src/**/*.{js,jsx,ts,tsx,css,scss}';

// Get the site URL from an environment variable or use a default
const siteUrl = process.env.WP_SITE_URL || 'http://localhost:10003';

// Development server task
gulp.task('serve', function(done) {
    browserSync.init({
        proxy: `${siteUrl}?react-rooter=hot`,
        port: 8888,
        open: true,
        notify: false
    });

    // Watch source files and reload on changes
    gulp.watch(srcFiles, gulp.series('reload'));

    // Run wp-scripts start
    const wpScripts = exec('wp-scripts start', { stdio: 'inherit' });
    wpScripts.stdout.on('data', (data) => {
        console.log(data);
    });
    wpScripts.stderr.on('data', (data) => {
        console.error(data);
    });
    wpScripts.on('close', (code) => {
        console.log(`wp-scripts process exited with code ${code}`);
        done();
    });
});

// Reload task
gulp.task('reload', function(done) {
    browserSync.reload();
    done();
});

// Hot start task
gulp.task('hot-start', gulp.series('serve'));