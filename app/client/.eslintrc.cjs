module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['google', 'plugin:react/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            rules: {
                'react/no-unescaped-entities': 'off',
                'react/display-name': 'off',
                'react/prop-types': 'off'
            },
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {}
};
