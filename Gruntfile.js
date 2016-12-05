module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            files: 'app/style/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'app/public/css/main.css': 'app/style/main.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'app/public/css/*.css',
                        'app/public/*.js',
                        'app/public/*.html',
                    ]
                },
                options: {
		    offline: true,
                    watchTask: true,
                    server: './app/public'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};
