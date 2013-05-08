module.exports = function(grunt) {

  var requireShim = {
    underscore: {
      exports: '_'
    }
  };

  var requirePaths = {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore'
  };

  grunt.initConfig({
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'nyan'
      },
      all: {
        src: ['test/test.js']
      }
    },
    requirejsconfig: {
      dev: {
        src: 'test/fixtures/fixture.js',
        dest: 'test/main.js',
        options: {
          shim: requireShim,
          paths: requirePaths
        }
      }
    }
  });

  grunt.registerTask('default', ['requirejsconfig']);
  grunt.registerTask('test', ['simplemocha']);
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadTasks('tasks');
};

