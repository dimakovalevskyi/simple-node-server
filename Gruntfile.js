module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            scripts: {
                src: [
                    'src/js/src/*.js',
                    'src/js/src/*/*.js'
                ],
                dest: 'src/js/sctipt.js'
            },
            styles: {
                src: [
                    'src/css/src/*.css'
                ],
                dest: 'src/css/style.css'
            }
        },
        watch: {
            scripts: {
                files: [
                    'src/js/src/*.js',
                    'src/js/src/*/*.js'
                ],
                tasks: ['scripts'],
                options: {
                    spawn: false,
                }
            },
            styles: {
                files: ['src/css/src/*.css'],
                tasks: ['styles'],
                options: {
                    spawn: false,
                }
            }
        }
    }
);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['styles', 'scripts']);
    grunt.registerTask('dev', ['default', 'watch']);
    grunt.registerTask('styles', ['concat:styles']);
    grunt.registerTask('scripts', ['concat:scripts']);
};
