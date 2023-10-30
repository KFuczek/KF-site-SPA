/* eslint-env node */
module.exports = {
    env: {
        "es6": true
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: __dirname,
            },
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',

                //declaring 'next/core-web-vitals' and 'prettier' again in case
                //the two plugin:... configs above overrode any of their rules
                //Also, 'prettier' needs to be last in any extends array
                'next/core-web-vitals',
                'prettier',
            ],
            rules: {'@typescript-eslint/unbound-method': 'off'}
        },
    ],
    ignorePatterns: [
        "/.cache",
        "/node_modules",
        "/node_modules/",
        "/.git",
        "/.husky",
        "/.yarn",
        "/*/dist",
        "/app/queries",
        "node_modules/",
        "**/node_modules/",
        "/**/node_modules/*",
        "out/",
        "dist/",
        "build/",
    ],
};
