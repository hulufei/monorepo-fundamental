module.exports = {
  setupFilesAfterEnv: [
    // react-testing-library renders your components to document.body,
    // this will ensure they're removed after each test.
    'react-testing-library/cleanup-after-each',
    // this adds jest-dom's custom assertions
    'jest-dom/extend-expect'
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
};
