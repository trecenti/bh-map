// Karma configuration
// Generated on Mon Jun 01 2015 14:50:52 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'tests/**/*.spec.js'
    ],
    exclude: [
      '**/*.swp'
    ],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack']
    },
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-safari-launcher'),
      require('karma-firefox-launcher')
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],
    singleRun: false
  });
};
