var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var rename = require('gulp-rename');
// var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');

gulp.task('styles', function () {
    gulp.src('src/scss/main.scss')
        // .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', function (err) {
            console.log(err.message);
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', '> 1% in PL']
        }))
        .pipe(cleanCss())
        .pipe(rename('styles.min.css'))
        // .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream({
            match: '**/*.css'
        }));
});

gulp.task('serve', function () {
    browserSync.init({
        server: './dist/',
        notify: false
    });
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('dist/js/*.js').on('change', browserSync.reload);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve', 'watch']);
