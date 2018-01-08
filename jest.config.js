module.exports = {
  coverageReporters: ['lcov'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js(x)',
  ],
  transform: {
    '^.+\\.js(x)$': '<rootDir>/jest.transform.js',
  },
};
