export default {
    semi: true,
    trailingComma: 'none',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    quoteProps: 'as-needed',
    endOfLine: 'lf',
    arrowParens: 'avoid',
    bracketSpacing: true,
    bracketSameLine: false,
    htmlWhitespaceSensitivity: 'css',

    // Angular specific overrides
    overrides: [
        {
            files: '*.html',
            options: {
                parser: 'angular',
                printWidth: 120,
                htmlWhitespaceSensitivity: 'ignore',
            },
        },
        {
            files: '*.scss',
            options: {
                parser: 'scss',
                singleQuote: false,
            },
        },
        {
            files: '*.json',
            options: {
                parser: 'json',
                trailingComma: 'none',
            },
        },
    ],
};
