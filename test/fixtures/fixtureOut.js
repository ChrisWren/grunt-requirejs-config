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
