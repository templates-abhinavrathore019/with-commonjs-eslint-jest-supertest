/* eslint-disable max-len */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const globalConfig = {

  // A path to a module which exports an async function that is triggered once before all test suites
  globalSetup: '<rootDir>/jest/setup/global.js',

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: undefined,

};

module.exports = { globalConfig };
