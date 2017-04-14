var env         = require('minimist')(process.argv.slice(2)),
    gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    browserify  = require('gulp-browserify'),
    browserSync = require('browser-sync'),
    stylus      = require('gulp-stylus');


// Компиляция Jade
gulp.task('jade', function () {
    return gulp.src('app/src/jade/*.jade')
        .pipe(gulp.dest('app/dist/'));
});

// Компиляция Stylus
gulp.task('stylus', function(){
    return gulp.src('app/src/stylus/*.styl')
        .pipe(stylus({
          'include css': true
    }))
        .pipe(gulp.dest('app/dist/css/'))
});
gulp.task('watch', function () {
    gulp.watch('app/src/jade/**/*.jade', ['jade']);
    gulp.watch('app/src/stylus/**/*.styl', ['stylus']);
    gulp.watch('app/src/js/**/*.js', [(env.fy) ? 'browserify' : 'js']);
    gulp.watch('app/src/img/**/*.{jpg,jpeg,png,gif}', ['imagemin']);
});

gulp.task('browser-sync', function () {
    var files = [
       'app/dist/**/*.html',
       'app/dist/css/**/*.css',
       'app/dist/img/**/*',
       'app/dist/js/**/*.js',
    ];

    browserSync.init(files, {
        server: {
            baseDir: 'app/dist/',
        },
    });
});

// Дев
gulp.task('default', [(env.fy) ? 'browserify' : 'jade', 'watch', 'browser-sync']);

// Боевая сборка
gulp.task('build', [(env.fy) ? 'browserify' : 'jade', 'imagemin']);