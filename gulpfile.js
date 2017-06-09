var gulp = require('gulp');
    watch = require('gulp-watch');

gulp.task('default', 'stream', function() {
    return watch('styles/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('callback', function () { 
    return watch('styles/*.css', function () { 
        gulp.src('styles/*.css')
            .pipe(gulp.dest('build'));
    });
});

gulp.task('default', () => 
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'))
);
