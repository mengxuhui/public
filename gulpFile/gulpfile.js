const gulp = require('gulp');
gulp.task('demo', function () {
    setInterval(function () {
        console.log('I am out!');
    }, 5000);
});