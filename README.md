# Template for

commonjs + eslint + jest + supertest project

# Compatible Versions:

### Node

- v19.7.0

### ESLint

- 8.48.0

### Jest

- 29.6.4

### TS-Jest

- 29.1.1

### Supertest

- 6.3.3

# Initialise project

```bash
npm init
```

# nodemon

- Watches files and restarts the server in case of changes.

## Install

```jsx
npm i nodemon
```

## nodemon.json

- Sample configuration

```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": ["test/fixtures/", "test/samples/"],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json"
}
```

# ESLint

## Install

```bash
npm i eslint
```

## Configure eslint

```bash
npm init @eslint/config
```

✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · YAML

## Add Scripts

- Add scripts in `package.json`

```json
"scripts": {
    "lint:setup": "npm init @eslint/config",
    "lint:check": "eslint .",
    "lint:fix": "eslint --fix .",
  },
```

## Debug

- check logs in `output` ⇒ `Eslint`

# Add pre-commit hook

- Adding this hook ensures that eslint or any other custom script runs before code commit.

## Install husky

- creates a pre-commit hook to run `npm run lint:check`

```bash
npm i -D husky
```

- Install config package
  - creates a `.husky` folder with `git pre-commit hook`

```bash
npx husky-init
```

- Configure `pre-commit` in `.husky` folder

```yaml
npm run lint:check
npm run lint:fix
# npx lint-staged
```

### Add Scripts

- Run this script after `npm i` to setup husky

```json
"scripts": {
    "prepare": "husky install"
  },
```

## Install lint-staged

- adds capability to run `npm run lint:check` only on staged files

```bash
npm i -D lint-staged
```

- create `.lintstagedrc.yml` for configuration

```yaml
"*":
  - npm run lint:check
  - npm run lint:fix
```

# Jest

## Install

```bash
npm install --save-dev jest
```

## Install jest Types

```bash
npm install --save-dev @types/jest @jest/globals
```

## Install jest eslint plugin

```bash
npm i --save-dev eslint-plugin-jest
```

## eslintrc

### env

```yaml
env:
  jest: true
```

### files

- register rules for test related files

```yaml
- files:
	- "./src/**/__tests__/*.test.*"
	- "./src/**/__mocks__/**/*.js"
	- "./jest/**/*.js"
```

### rules

```yaml
rules:
  global-require: off
```

## Add Scripts

- Add scripts in `package.json`

```json
"scripts": {
    "test:setup": "jest --init",
    "test:clear": "jest --clear-cache",
    "test": "cross-env NODE_ENV=development jest --config ./jest/setup/jest.config.js --runInBand",
  },
```

# Supertest

## Install

```bash
npm install supertest --save-dev
```

## eslintrc

### global variables

- created variables in `global` for `supertest` **request** and **closing server** after all tests end.
- adding these in globals will pass lint checks.

```yaml
- files:
      - "./src/**/__tests__/*.test.*"
    globals:
      request: readonly
      closeServer: readonly
```

## jest.config

### globalSetup

- used to put inject new variables in globals along with jest.

```yaml
globalSetup: '<rootDir>/jest/setup/global.js',
```

# Final Configuration

## nodemon.json

```bash
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/**/node_modules"],
  "verbose": true,
  "watch": ["src/"],
  "ext": "js,json"
}
```

## package.json

```bash
{
  "name": "with-commonjs-eslint-jest-supertest",
  "version": "1.0.0",
  "description": "template project for express + nodejs + commonjs + eslint + jest + supertest",
  "main": "src/app.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon",
    "prod": "cross-env NODE_ENV=production nodemon",
    "lint:setup": "npm init @eslint/config",
    "lint:check": "eslint .",
    "lint:fix": "eslint --fix .",
    "test:setup": "jest --init",
    "test:clear": "jest --clear-cache",
    "test": "cross-env NODE_ENV=development jest --config ./jest/setup/jest.config.js --runInBand",
    "prepare": "husky install"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "keywords": [
    "express",
    "nodejs",
    "dotenv",
    "crossenv",
    "commonjs",
    "eslint",
    "jest",
    "supertest"
  ],
  "author": "deltacap019",
  "license": "ISC",
  "dependencies": {
    "axios": "1.5.0",
    "cross-env": "7.0.3",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "express-async-handler": "1.2.0",
    "joi": "17.10.1",
    "mongoose": "7.5.0",
    "node-cache": "5.1.2"
  },
  "devDependencies": {
    "@jest/globals": "29.6.4",
    "@types/jest": "29.5.4",
    "eslint": "8.48.0",
    "eslint-config-airbnb-base": "15.0.0",
    "eslint-plugin-import": "2.28.1",
    "eslint-plugin-security": "1.7.1",
    "husky": "8.0.3",
    "jest": "29.6.4",
    "lint-staged": "14.0.1",
    "nodemon": "3.0.1",
    "supertest": "6.3.3"
  }
}
```

## husky pre-commit

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint:check
npm run lint:fix
npm run test
# npx lint-staged
```

## .eslintrc.yml

```yaml
env:
  browser: true
  commonjs: true
  es2021: true
extends:
  - airbnb-base
  - plugin:security/recommended
  - plugin:import/recommended
parserOptions:
  ecmaVersion: latest
rules: {}
overrides:
  # project
  - files:
      - "*.js"
      - "*.mjs"
    rules:
      no-underscore-dangle:
        - error
        - allow:
            - _id
      linebreak-style: off
      import/prefer-default-export: off
      import/no-extraneous-dependencies: off
      arrow-body-style: off
  # jest
  - files:
      - "./src/**/__tests__/*.test.*"
      - "./src/**/__mocks__/**/*.js"
      - "./jest/**/*.js"
    env:
      jest: true
    globals:
      request: readonly
      closeServer: readonly
    rules:
      global-require: off
      max-len: off
```

## Jest Config

```jsx
const config = {
  rootDir: "../../",
  roots: ["<rootDir>"],
  setupFiles: [
    "<rootDir>/jest/setup/jest.setup.js",
    "<rootDir>/jest/setup/globals.js",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest/setup/jest.setup.after-env.js"],
  globalSetup: "<rootDir>/jest/setup/global.js",
  testMatch: ["<rootDir>/src/**/__tests__/**/*.[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**"],
  coverageDirectory: "./jest/coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  testTimeout: 60 * 1000,
};
```

# Template

```bash
npx degit "https://github.com/templates-deltacap019/with-commonjs-eslint-jest-supertest.git" "my_proj"
```
