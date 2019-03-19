module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': ['off'],
    'import/no-extraneous-dependencies': context => [
      'error',
      { devDependencies: true, packageDir: [context.getFilename(), __dirname] }
    ]
  }
};
