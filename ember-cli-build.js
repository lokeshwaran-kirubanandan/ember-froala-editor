'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {

    'ember-froala-editor': {
      plugins  : [
        'align','char_counter','colors','emoticons','entities','font_family','font_size',
        'line_breaker','link','lists','paragraph_format','special_characters','table','url'
      ],
      languages: false,
      themes   : true
    },

    // Use Bootswatch in the "dummy" app
    // to resemble the Froala Editor Website
    'ember-cli-bootswatch': {
      theme: 'materia',
      importJS: ['util','collapse']
    }

  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
