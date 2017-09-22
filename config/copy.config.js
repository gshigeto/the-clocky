var path = require('path');
var defaultConfig = require('@ionic/app-scripts/config/copy.config.js');

module.exports = function () {
  defaultConfig.AnimateCSS = {
    src: ['{{ROOT}}/node_modules/animate.css/animate.min.css'],
    dest: '{{BUILD}}'
  };

  return defaultConfig;
};
