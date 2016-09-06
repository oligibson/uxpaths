'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlbuild: {
            dist: {
                src: 'index-template.html',
                dest: 'index.html',
                options: {
                    beautify: true,
                    sections: {
                        tiles: 'src/**/tile.html',
                        modals: 'src/**/modal.html'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('default', ['htmlbuild']);

};