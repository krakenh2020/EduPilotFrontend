process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
  config.set({
    basePath: 'dist',
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-chai',
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-sonarqube-reporter'),
    ],
    client: {
      mocha: {
        ui: 'tdd',
      },
    },
    files: [
      {pattern: './*.js', included: true, watched: true, served: true, type: 'module'},
      {pattern: './**/*', included: false, watched: true, served: true},
    ],
    preprocessors: {
      'src/**/*.js': ['coverage']
    },
    autoWatch: true,
    browsers: ['ChromeHeadless', 'FirefoxHeadless'],
    customLaunchers: {
        ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: false,
    logLevel: config.LOG_ERROR,
    sonarqubeReporter: {
      basePath: 'test',        // test files folder
      filePattern: '*.js', // test files glob pattern
      encoding: 'utf-8',          // test files encoding
      outputFolder: 'reports',    // report destination
      legacyMode: false,          // report for Sonarqube < 6.2 (disabled)
      reportName: (metadata) => { // report name callback, but accepts also a 
                                  // string (file name) to generate a single file
        /**
         * Report metadata array:
         * - metadata[0] = browser name
         * - metadata[1] = browser version
         * - metadata[2] = plataform name
         * - metadata[3] = plataform version
         */
         return metadata.concat('xml').join('.');
      }
    },
    reporters: ['progress', 'coverage', 'sonarqube']
  });
}
