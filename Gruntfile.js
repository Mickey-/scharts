
var exec = require("child_process").exec;

module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*scharts started*/',
    distRoot: 'build',
    docsRoot: 'docs',

    coffee: {
      compile: {
        expand: true
        ,cwd: 'coffee'
        ,src: ['**/*.coffee']
        ,dest: 'js'
        ,ext: '.js'   
      }
    },
    browserify: {
      build: {
        expand: true
        ,cwd: 'js'
        ,src: './*.js'
        ,dest: '<%= distRoot %>/js'
        ,ext: '.js'
      }
    },

    uglify: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= distRoot %>/js/',
          src: ['**/*.js', '!*.min.js'],
          dest: '<%= distRoot %>/js/',
          ext: '.min.js'
        }]
      }
    },

    less: {
      options: {
        compile: true
      },
      scharts: {
        options: {
          compress: true
        }
        ,expand: true
        ,cwd: 'less/'
        ,src: ['**/*.less']
        ,dest: 'build/css'
        ,ext: '.min.css'
      },

      docs: {
        files: [{
          expand: true,
          cwd: '<%= docsRoot %>/assets/less/',
          src: ['**/*.less'],
          dest: '<%= docsRoot %>/assets/css/',
          ext: '.css'
        }]
      }
    },
    jade: {
      docs: {
        options: {
          pretty: true
        },
        files: [
          {
          expand: true,
          cwd: '<%= docsRoot %>/templates',
          src: ['**/*.jade', '!base.jade', '!sidenav.jade', '!header.jade', '!com-*', '!*-com.jade'],
          dest: '<%= docsRoot %>',
          ext: '.html'
        },
        ],
      }
    },
    watch: {
      options: {
        livereload: 3456
      },
      css: {
        files: 'less/*.less',
        tasks: ['less']
      },
      coffee: {
        files: ['coffee/**/*.coffee'],
        tasks: ['coffee', 'browserify']
      },
      docs: {
        files: '<%= docsRoot %>/templates/**/*.jade',
        tasks: ['newer:jade:docs']
      },
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-coffee')

  // JS distribution task.
  grunt.registerTask('dist-js', ['coffee', 'browserify', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['less']);


  // Full distribution task.
  grunt.registerTask('dist', ['dist-css', 'dist-js']);
  grunt.registerTask('docs', ['jade']); //必须先执行dist才能执行此任务

  // Default task.
  grunt.registerTask('default', ['dist', 'docs']);
}
