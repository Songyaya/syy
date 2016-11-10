module.exports = function(grunt) {
		grunt.initConfig({
				pkg: grunt.file.readJSON('package.json'),
				htmlmin: {
					build: {
						options: {
							removeComments: true,
							collapseWhitespace: true
						},
						files: {
							'build/index.html': 'src/index.html' // 'destination': 'source' 
						}
					}
				}
		})
			grunt.loadNpmTasks('grunt-contrib-htmlmin');

			// 默认被执行的任务列表。
			grunt.registerTask('default', ['htmlmin']);

		};