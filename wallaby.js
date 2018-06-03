module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'config/**/*.js',
      '!src/**/*.test.js?(x)'
    ],

    tests: ['src/**/*.test.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({})
    },

    workers: {
      recycle: true,
    },

    filesWithNoCoverageCalculated: [
      'src/registerServiceWorker.js',
      'src/index.js',
      'config/**/*.js',
      'src/AppE2ETest.test.js',
    ],

    setup: function(wallaby) {
      const jestConfig = require('./package.json').jest;
      delete jestConfig.transform['^.+\\.(js|jsx)$'];
      delete jestConfig.testEnvironment;
      wallaby.testFramework.configure(jestConfig);
    },
  
    hints: {
      ignoreCoverage: /ignore coverage/ // or /istanbul ignore next/, or any RegExp
    },
  
    testFramework: 'jest'
  };
};