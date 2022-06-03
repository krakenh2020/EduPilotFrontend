process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({
    //basePath: 'dist',
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-chai',
      'karma-sourcemap-loader',
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher')
    ],
    client: {
      mocha: {
        ui: 'tdd',
        timeout : 10000, // 10 seconds - upped from 2 seconds
      },
    },
    files: [
      {pattern: 'dist/unit.js', included: true, watched: true, served: true, type: 'module'},
      {pattern: 'test/unit.js', included: false, watched: true, served: true},
    ],
    preprocessors: {
      'dist/*.js': ['sourcemap', 'coverage']
    },
    autoWatch: true,
    //browsers: ['FirefoxHeadless'], 
    //browsers: ['ChromeHeadless'],
    browsers: ['ChromeHeadless',  'FirefoxHeadless'],
    customLaunchers: {
        ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: false,
    logLevel: config.LOG_INFO,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    }
  });
}
