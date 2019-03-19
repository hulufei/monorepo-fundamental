# Fundamental Architecture

We'll build with [Next.js](https://nextjs.org/).

Using [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to manage projects and packages.

- `./packages` will be the common packages directory.
- `./apps` will be the projects directory.

## Code formatting and linting

- [Prettier](https://prettier.io) to format code
- [ESLint](https://eslint.org) to lint code with [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

Please config your editor integration.

## Testing

- [Jest](https://jestjs.io/docs/en/getting-started)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) testing components.
- [jest-dom](https://github.com/gnapse/jest-dom) for improved components testing assertions.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

Files with .js suffix in `__tests__` folders.
Files with .test.js suffix.
Files with .spec.js suffix.
The .test.js / .spec.js files (or the `__tests__` folders) can be located at any depth under the src top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if App.test.js and App.js are in the same folder, the test just needs to import App from './App' instead of a long relative path. Collocation also helps find tests more quickly in larger projects.

Just put `{"test": "jest"}` in `package.json` inside sub workspaces to add `test` command.

1. Create `babel.config.js` inside sub workspaces like this:

```
module.exports = {
  ...require('../../babel.config.base.js') // eslint-disable-line global-require
};
```

2. Create `jest.config.js` inside sub workspaces like this:

```
module.exports = {
  ...require('../../jest.config.base'), // eslint-disable-line global-require
  displayName: 'custom display name of your projects'
};
```

## References

- https://medium.com/@luisvieira_gmr/building-large-scale-react-applications-in-a-monorepo-91cd4637c131
