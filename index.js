fs = require('fs');

module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('requireconfig', 'Prepends a require.js config file.', function () {

    var options = this.options();
    var done = this.async();

    if (fs.existsSync(this.configFile)) {

    } else {
      grunt.log.error('No file found at: ' + this.configFile);
    }

  });

};
