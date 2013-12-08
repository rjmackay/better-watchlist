module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			mainJS: {
				options: {
					baseUrl: 'js/app/',
					wrap: true,
					name: '../libs/almond',
					preserveLicenseComments: false,
					optimize: 'uglify',
					mainConfigFile: 'js/app/config/Init.js',
					include : ['config/Init'],
					out: 'js/app/config/Init.min.js'
				}
			},
			mainCSS: {
				options: {
					optimizeCss: 'standard',
					cssIn: './css/app.css',
					out: './css/app.min.css'
				}
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'js/app/**/*.js', '!js/app/**/*min.js'],
			options : {
				jshintrc : '.jshintrc'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('build', ['requirejs:mainJS', 'requirejs:mainCSS']);
	grunt.registerTask('default', ['test', 'build']);

};