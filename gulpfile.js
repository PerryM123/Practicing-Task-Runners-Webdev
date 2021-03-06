/*
* All Tasks:
* -SASS -> CSS
* -JS minify
* -CSS minify
* -Images minify
* -Autoprefixer
*
* Watched Tasks:
* -SASS -> CSS
* -JS minify
* -CSS minify
*/


var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');

// SASS -> CSS
gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass()) // Convert sass to CSS!!
    .pipe(gulp.dest('app/css'))
});

// JS minify
gulp.task('js-minify', function(){
  return gulp.src('app/js/*.js')
    .pipe(uglify()) 
    .pipe(gulp.dest('dist/js'))
});

// CSS minify
gulp.task('css-minify', function(){
return gulp.src('app/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('app/css'));
});

// Images minify
gulp.task('images-minify', function(){
  return gulp.src('app/images/**/*.+(png|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});

// autoprefixer
gulp.task('autoprefixer', () =>
    gulp.src('app/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
);

// Task for Releasing
gulp.task('release-time', [
	'sass',
	'autoprefixer',
	'css-minify',
	'js-minify', 
	'images-minify'
	]); 

// Watcher
gulp.task('watch', function(){
  gulp.watch('app/scss/*.scss', ['sass']); 
  gulp.watch('app/js/*.js', ['js-minify']); 
  gulp.watch('app/css/*.css', ['css-minify']); 
});


