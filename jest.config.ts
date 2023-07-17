import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@compounds/(.*)$': '<rootDir>/src/compounds/$1',
    '^@contexts': '<rootDir>/src/contexts/index.ts',
    '^@hooks': '<rootDir>/src/hooks/index.ts',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@services': '<rootDir>/src/services/index.ts',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@tests/(.*)$': '<rootDir>/src/__tests__/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/src/__tests__/'],
};

module.exports = createJestConfig(customJestConfig);
