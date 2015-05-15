// Config added by grunt-requirejs-config
require.config({
  "shim": {
    "underscore": {
      "exports": "_"
    },
    "foo": {
      "exports": "module",
      "deps": [
        "bar"
      ],
      "init": function (bar) {
        return this.Foo.noConflict();
      }
    },
    "bar-complex": {
      "exports": "module"
    }
  },
  "paths": {
    "jquery": "libs/jquery",
    "underscore": "libs/underscore",
    "foo": "libs/foo",
    "bar": "libs/bar"
  }
}
);
require(['appController'], function (AppController) {
  AppController();
});
