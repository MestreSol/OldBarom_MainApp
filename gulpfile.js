const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');

// Clear dist folder
gulp.task('clean', function() {
    return gulp.src('./public/dist/*', { read: false })
        .pipe(clean());
});
// files from /less into /css
gulp.task('less', function(cb) {
    gulp.src('./public/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/dist/css'));
});

// Minify compiled CSS
gulp.task('minify-css', gulp.series('less', function() {
    return gulp.src('./public/dist/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./public/dist/css'));
}));

// Image compressor
gulp.task('image', async function() {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('./public/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/dist/img'));
});

// Watch for changes in files
gulp.task('watch', function() {
    gulp.watch('./public/less/*.less', gulp.series('less', 'minify-css'));
    gulp.watch('./public/img/*', gulp.series('image'));
});

// Default task
gulp.task('default', gulp.series('clean', 'less', 'minify-css', 'image', 'watch'));