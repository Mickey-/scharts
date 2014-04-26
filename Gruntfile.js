
var exec = require("child_process").exec;

module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*scharts started*/',
    distRoot: 'build',
    docsRoot: 'docs',

    browserify: {
      build: {
        files: {
          '<%= distRoot %>/js/<%= pkg.name %>.js': ['js/<%= pkg.name %>.js'],
          '<%= distRoot %>/js/<%= pkg.name %>-extends.js': ['js/<%= pkg.name %>-extends.js'],
          '<%= distRoot %>/js/<%= pkg.name %>-all.js': ['js/<%= pkg.name %>-all.js']
        }
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
      }

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
        tasks: ['less:sui', 'less:extends', 'less:all', 'newer:copy']
      },
      js: {
        files: 'js/**/*.js',
        tasks: ['browserify', 'newer:copy']
      },
      docs: {
        files: '<%= docsRoot %>/templates/**/*.jade',
        tasks: ['newer:jade:docs']
      },
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-newer');

  // JS distribution task.
  grunt.registerTask('dist-js', ['browserify', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['less']);


  // Full distribution task.
  grunt.registerTask('dist', ['dist-css', 'dist-js']);
  grunt.registerTask('docs', ['jade']); //必须先执行dist才能执行此任务

  // Default task.
  grunt.registerTask('default', ['test', 'dist', 'docs']);
}
