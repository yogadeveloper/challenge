module.exports = {
  verbose: true,
  roots: [
    "./app/javascript"
  ],
  transform: {
    "^.+\\.js$": "./node_modules/babel-jest",
    "^.+\\.svg$": "jest-transform-stub",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  setupFilesAfterEnv: [
    "jest-enzyme"
  ],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
    enzymeAdapter: "react16"
  },
  moduleDirectories: [
    "./node_modules"
  ],
  moduleNameMapper: {
    "^Helpers(.*)$": "<rootDir>/app/javascript/app/helpers$1",
    "^Components(.*)$": "<rootDir>/app/javascript/app/components$1",
    "^Shared(.*)$": "<rootDir>/app/javascript/app/components/shared$1",
    "^Icons(.*)$": "<rootDir>/app/javascript/app/assets/icons/$1",
    "^Mocks(.*)$": "<rootDir>/app/javascript/tests/mocks/$1"
  }
}
