let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/main.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});
