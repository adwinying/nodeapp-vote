const gulp = require('gulp');
const jshint = require('gulp-jshint');
const nodemon = require('gulp-nodemon');
const env = require('gulp-env');
const mocha = require('gulp-mocha');

const jsFiles = [
	'*.js',
	'config/*.js',
	'models/*.js',
	'routes/*.js'
];

gulp.task('lint', () => {
	gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', 
			{verbose: true}));
});

gulp.task('test', () => {
	env({
		file: 'config/.env',
		vars: {
			ENV: 'test',
			PORT: 3000
		}
	});

	gulp.src('tests/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', ['lint'], () => {
	env({
		file: 'config/.env'
	});

	nodemon({
		script: 'app.js',
		watch: [...jsFiles, 'config/.env.json'],
		delaytime: 1
	}).on('restart', () => {
		gulp.start('lint');
		console.log('Restarting server...\n');
	});
});

gulp.task('default', () => {
	gulp.start('task');
});
