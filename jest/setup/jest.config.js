/* eslint-disable max-len */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const { setupConfig } = require('./configs/setup.config');
const { globalConfig } = require('./configs/global.config');
const { filesConfig } = require('./configs/files.config');
const { mockConfig } = require('./configs/mock-config');
const { testConfig } = require('./configs/test.config');
const { coverageConfig } = require('./configs/coverage-config');

const config = {
  ...setupConfig,
  ...globalConfig,
  ...filesConfig,
  ...mockConfig,
  ...testConfig,
  ...coverageConfig,
};

module.exports = config;
