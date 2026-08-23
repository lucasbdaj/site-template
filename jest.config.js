const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

module.exports = createJestConfig({
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Jest roda APENAS os testes unit — ignora a pasta e2e
  testMatch: ['**/__tests__/unit/**/*.test.{js,jsx,ts,tsx}'],
  // Garante que arquivos do Playwright não são processados pelo Jest
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/e2e/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
})
