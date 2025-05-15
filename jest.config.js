/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/modules", "<rootDir>/core"],
  moduleFileExtensions: ["ts", "js", "json"],
  testMatch: ["**/?(*.)+(spec|test).ts"],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
