var gulp=require("gulp"),
	uglify=require("gulp-uglify");
	minify=require("gulp-minify-css"),
	htmlmin=require("gulp-htmlmin"),
	watch = require("gulp-watch");


gulp.task("jsmin",function(){
	gulp.src("src/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("bound/js/"))
})

gulp.task("cssmin",function(){
	gulp.src("src/css/*.css")
		.pipe(minify())
		.pipe(gulp.dest("bound/css/"))
})

gulp.task("htmlmin",function(){
	gulp.src("src/html/*.html")
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest("bound/html/"))
})
gulp.task("default",function(){
	gulp.watch("src/js/*.js",["jsmin"])
	gulp.watch("src/css/*.css",["cssmin"])
	gulp.watch("src/html/*.html",["htmlmin"])
});
	