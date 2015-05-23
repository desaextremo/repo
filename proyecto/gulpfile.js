var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),  //min para arhivos de tip CSS
    concat = require('gulp-concat'), //mofdulo para concatenar
    uglify = require('gulp-uglify');  //modulopara crear .min


gulp.task('concat-css', function(){
    return gulp.src(['www/css/*.css']) //ojo el orden afecta usar un arreglo
        .pipe(concatCss('bundle.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/'));
});


gulp.task('concat-files', function(){
    gulp.src('www/js/*.js')    //toma los nombres de los js en la pcarpeta source
        .pipe(concat('lab33.min.js'))  //concatena los nombre con la palabra min
        .pipe(uglify())     // crea los .min
        .pipe(gulp.dest('dist/')); //guarda los .min en la carpetawww/ld
});

gulp.task('default', ['concat-css', 'concat-files'], function(){

});