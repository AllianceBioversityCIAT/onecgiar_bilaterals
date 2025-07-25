import angular from 'angular-eslint';
import typescriptEslint from 'typescript-eslint';
import globals from 'globals';

export default typescriptEslint.config(
    // Global ignores
    {
        ignores: [
            'dist/',
            'out-tsc/',
            'node_modules/',
            'coverage/',
            '**/*.d.ts',
            '*.js',
            '*.mjs'
        ],
    },

    // Global language options
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2022,
            },
        },
    },

    // TypeScript files configuration
    {
        files: ['**/*.ts'],
        extends: [
            ...typescriptEslint.configs.recommended,
            ...typescriptEslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        languageOptions: {
            parser: typescriptEslint.parser,
            parserOptions: {
                project: ['./tsconfig.app.json', './tsconfig.spec.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Angular 20 specific rules
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
            '@angular-eslint/prefer-standalone': 'warn',
            '@angular-eslint/prefer-signals': 'warn',
            '@angular-eslint/prefer-inject': 'error',
            '@angular-eslint/no-output-on-prefix': 'error',
            '@angular-eslint/no-input-rename': 'error',
            '@angular-eslint/no-output-rename': 'error',
            '@angular-eslint/use-lifecycle-interface': 'error',
            '@angular-eslint/prefer-on-push-component-change-detection': 'warn',

            // TypeScript rules optimized for Angular 20
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-inferrable-types': 'error',
            '@typescript-eslint/prefer-readonly': 'warn',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',

            // General best practices for Angular 20
            'prefer-const': 'error',
            'no-var': 'error',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'error',
        },
    },

    // Angular HTML template files
    {
        files: ['**/*.html'],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            // Template specific rules for Angular 20
            '@angular-eslint/template/prefer-control-flow': 'warn',
            '@angular-eslint/template/use-track-by-function': 'warn',
            '@angular-eslint/template/conditional-complexity': ['error', { maxComplexity: 3 }],
            '@angular-eslint/template/cyclomatic-complexity': ['error', { maxComplexity: 5 }],
            '@angular-eslint/template/no-any': 'warn',
            '@angular-eslint/template/no-duplicate-attributes': 'error',
            '@angular-eslint/template/prefer-self-closing-tags': 'warn',
        },
    },

    // Test files configuration
    {
        files: ['**/*.spec.ts', '**/*.test.ts'],
        rules: {
            // Relaxed rules for test files
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            'no-console': 'off',
        },
    }
);
