// module.exports = {
//   rootDir: './',

//   testEnvironment: 'node',

//   testMatch: ["**/**/*.test.ts"],

//   moduleDirectories: ['node_modules'],

//   moduleNameMapper: {
//   },

//   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

//   clearMocks: true,

//   collectCoverage: true,

//   coverageDirectory: 'coverage',

//   roots: ['<rootDir>/src'],

//   testTimeout: 30000, 

// };

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  resetMocks: true,
  restoreMocks: true,
  clearMocks: true,
};

