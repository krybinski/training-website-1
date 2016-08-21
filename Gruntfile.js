module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            distJS: {
                src: [
                    'assets/js/libs/jquery-1.9.1.js',
                    'assets/js/libs/bootstrap-3.3.7.js',
                    'assets/js/scripts.js'
                ],
                dest: 'assets/js/final-scripts.js'
            },
            distCSS: {
                src: [
                    'assets/css/bootstrap.css',
                    'assets/css/font-awesome.css',
                    'assets/css/main.css'
                ],
                dest: 'assets/css/final-styles.css'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            uglifyJS: {
                files: {
                    'assets/js/final-scripts.min.js': ['assets/js/final-scripts.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                processImport: false,
                keepSpecialComments: 0
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['final-styles.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        },
        sass: {
            options: {
                compass: true
            },
            dist: {
                files: {
                    'assets/css/main.css': 'assets/sass/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'assets/sass/**/*.scss',
                tasks: ['sass', 'concat', 'cssmin']
            },
            scripts: {
                files: ['assets/js/**/*.js'],
                tasks: ['concat', 'uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
};
