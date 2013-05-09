# grunt-requirejs-config
[![NPM version](https://badge.fury.io/js/grunt-requirejs-config.png)](http://badge.fury.io/js/grunt-requirejs-config)
[![Dependency Status](https://gemnasium.com/ChrisWren/grunt-requirejs-config.png)](https://gemnasium.com/ChrisWren/grunt-requirejs-config)
[![Build Status](https://travis-ci.org/ChrisWren/grunt-requirejs-config.png)](https://travis-ci.org/ChrisWren/grunt-requirejs-config)

> Write your require.js config once in your Gruntfile and prepend it to files for development

## Getting Started
If you haven't used grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a gruntfile as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:
```shell
npm install grunt-requirejs-config --save-dev
```

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-requirejs-config');
```

## Documentation

### Usage
Here is an example usage which allows you to set your require.js configuration once for your whole Gruntfile:
```js
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
  requirejsconfig: {
    dev: {
      src: 'src/scripts/main.js',
      dest: 'dev/scripts/main.js',
      options: {
        shim: requireShim,
        paths: requirePaths
      }
    }
  }
});
```
This is what a sample `src` file would look like:
```javascript
require(['appController'], function (AppController) {
  AppController();
});
```
The output `dest` file looks like:
```javascript
// Config added by grunt-requirejs-config
require.config({
  "shim": {
    "underscore": {
      "exports": "_"
    }
  },
  "paths": {
    "jquery": "libs/jquery",
    "underscore": "libs/underscore"
  }
});

require(['appController'], function (AppController) {
  AppController();
});
```
This file starts the app after the config has been set.
## Required fields
### src
Type: `string`

This is file that require-config uses as your base file to prepend the configuration.

### dest
Type: `string`

This is the destination of the generated config file.

## Options

Any option will be used as a property passed to the require.js config. [Here](https://github.com/jrburke/r.js/blob/master/build/example.build.js) is a page describing all of the options.

# Changelog

**0.0.0** - Initial release

**0.0.1** - Fixed registered task name

**0.0.2** - Called `done()` on async task
