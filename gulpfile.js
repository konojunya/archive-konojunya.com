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

/* javascript */
gulp.task("es6",function(){
	browserify({entries: ["src/es6/app.js"],debug: true})
		.transform("babelify",{presets: ["es2015","stage-0"]})
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(plumber())
		.pipe(streamify(uglify()))
		.pipe(gulp.dest("dist/public/javascripts/"))
})

/* index html */
gulp.task("pug",function(){
	gulp
		.src(["src/views/**/*.pug","!./src/views/**/_*.pug"])
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest("dist/"))
})

/* content */
gulp.task("content_pug",function(){
	gulp
		.src(["./src/contents/**/*.pug","!./src/contents/**/_*.pug"])
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest("dist/public/contents/"))
})

/* sass */
gulp.task("sass",function(){
	return gulp.src("./src/scss/**/*.scss")
		.pipe(plumber())
		.pipe(sass())
		.pipe(cssnano())
		.pipe(gulp.dest("dist/public/stylesheets/"))
})

/* server */
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

/* watch */
gulp.task("watch",function(){
	gulp.watch("./src/es6/**/*.js",["es6"])
	gulp.watch("./src/views/**/*.pug",["pug"])
	gulp.watch("./src/scss/**/*.scss",["sass"])
	gulp.watch("./src/contents/**/*.pug",["content_pug"])
})

gulp.task("default",["watch","es6","sass","pug","content_pug"]);