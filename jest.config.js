module.exports = {
  coverageReporters: ['lcov'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest.transform.js',
  },
};
