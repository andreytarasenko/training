import gulp from 'gulp';
import del from 'del';
import minify from 'gulp-minify';
import concat from 'gulp-concat';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

gulp.task('styles', () => {
    return gulp.src('./src/scss/**/*.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
		.pipe(minify({noSource: true}))
		.pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('scripts', () => {
    return gulp.src('./src/js/**/*.js')
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
    gulp.watch(['./src/**/*.scss', './src/js/**/*.js'], (done) => {
        gulp.series(['clean', 'styles', 'scripts'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles', 'scripts']));

