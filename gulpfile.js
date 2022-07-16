const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const minify = require("gulp-minify");
const concat = require('gulp-concat');

gulp.task('styles', () => {
    return gulp.src('./src/scss/**/*.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
		.pipe(minify({noSource: true}))
		.pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('scripts', () => {
    return gulp.src('src/js/**/*.js')
		.pipe(minify({noSource: true}))
		.pipe(concat('app.min.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('clean', () => {
    return del([
        './dest/css/style.min.css',
		'./dest/js/app.min.js'
    ]);
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.scss', (done) => {
        gulp.series(['clean', 'styles', 'scripts'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles', 'scripts']));

