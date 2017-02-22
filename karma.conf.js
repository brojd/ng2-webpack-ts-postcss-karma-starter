// Karma configuration
// Generated on Wed Feb 22 2017 12:54:29 GMT+0100 (Środkowoeuropejski czas stand.)

module.exports = function(config) {
  config.set({
    mime: { 'text/x-typescript': ['ts','tsx'] },
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './src/**/*.test.ts', watched: false }
    ],
    exclude: [
    ],
    preprocessors: {
      './src/**/*.test.ts': ['webpack', 'sourcemap']
    },
    webpack: require('./webpack.test.js'),
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
};
