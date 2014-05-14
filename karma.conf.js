module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'lib/binary_add.js',
      'lib/curriedaccumulator.js',
      'lib/point.js',
      'lib/object_reduce.js',
      'spec/binary_add_spec.js',
      // 'spec/curriedaccumulator_spec.js'
      'spec/point_spec.js',
      'spec/object_reduce_spec.js'
    ],
    exclude: [
    ],
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};