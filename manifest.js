const policyLogger = require('express-gateway/lib/logger').policy;

module.exports = {
  version: '1.0.0',
  policies: ['requestid'],
  init: function (pluginContext) {
    pluginContext.registerPolicy(require('./policies/requestid-policy')(policyLogger));
  }
};