# Eslint Config

This folder provides default eslint configuration for our projects. Our linting is based on [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) with our own custom rules defined in [rules/default.js](./rules/default.js).

### Publishing
Publishing for this project is handled by our [Github workflow](/.github/workflows/publish-eslint-config) on merge into the master branch.

Manual publishing is not recommended but if we need to try the following (provided you are logged into npm and authorized):
```
npm publish --access public
```
_Remember to increment the version number in package.json_