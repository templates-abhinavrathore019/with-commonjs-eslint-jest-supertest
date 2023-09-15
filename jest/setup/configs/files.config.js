/* eslint-disable max-len */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const filesConfig = {

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   'node_modules',
  // ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'json',
  ],
  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // A preset that is used as a base for Jest's configuration
  // preset: 'ts-jest/presets/default-esm',

  // A map from regular expressions to paths to transformers
  // transform: {},

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$',
  ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {
  //   '(../.*).js': '$1.ts',
  // },

  // A path to a custom resolver
  // resolver: '',

  // extensionsToTreatAsEsm: [],

  // Reset the module registry before running each individual test
  // resetModules: false,
};

module.exports = { filesConfig };
