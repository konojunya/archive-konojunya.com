var
	gulp = require("gulp")
	browserify = require("browserify")
	plumber = require("gulp-plumber")
	pug = require("gulp-pug")
	babelify = require("babelify")
	uglify = require("gulp-uglify")
	sass = require("gulp-sass")
	cssnano = require("gulp-cssnano")
	source = require("vinyl-source-stream")
	streamify = require('gulp-streamify')
	webserver = require("gulp-webserver");

gulp.task("es6",function(){
	browserify({entries: ["src/es6/app.js"],debug: true})
		.transform(babelify)
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(plumber())
		.pipe(streamify(uglify()))
		.pipe(gulp.dest("dist/public/javascripts/"))
})

gulp.task("pug",function(){
	gulp
		.src(["src/views/**/*.pug","!./src/views/**/_*.pug"])
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest("dist/"))
})

gulp.task("sass",function(){
	return gulp.src("./src/scss/**/*.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssnano())
		.pipe(gulp.dest("dist/public/stylesheets/"))
})

gulp.task("server",function(){
	gulp.src("dist")
		.pipe(plumber())
		.pipe(webserver({
			port: 3000,
			livereload: true,
			directoryListining: true,
			open: true
		}));
})

gulp.task("watch",function(){
	gulp.watch("./src/es6/**/*.js",["es6"])
	gulp.watch("./src/views/**/*.pug",["pug"])
	gulp.watch("./src/scss/**/*.scss",["sass"])
})

gulp.task("default",["watch","es6","sass","pug"]);