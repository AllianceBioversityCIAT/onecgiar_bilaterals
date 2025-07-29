import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|mjs|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$'
      }
    ]
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'json', 'mjs'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: ['node_modules/(?!@angular|rxjs|primeng|@primeuix)'],
  collectCoverageFrom: ['src/**/*.ts', '!src/main.ts', '!src/**/*.d.ts', '!src/**/environment*.ts']
};

export default config;
