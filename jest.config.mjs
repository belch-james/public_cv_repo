import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  cache: false,

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleNameMapper: {
    "^@features/(.*)$": "<rootDir>/features/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@components$": "<rootDir>/components/index.ts",
    "^@data/(.*)$": "<rootDir>/data/$1",
    "^@theme/(.*)$": "<rootDir>/theme/$1",
    "\\.(css|scss|sass)$": "identity-obj-proxy"
  },

  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  transform: {}
};

export default createJestConfig(customJestConfig);
