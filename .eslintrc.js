module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: "module",
        ecmaVersion: 2015,
        allowImportExportEverywhere: true
    },
    env: {
        browser: true,
        es6: true
    },
    globals: {},
    extends: ['plugin:vue/essential', 'airbnb-base'],
      // required to lint *.vue files
    plugins: [
        'vue'
    ],
    rules: {
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-console": "off",
        "arrow-parens": 0,
        "max-len": ["error", { "code": 400 ,"ignoreComments": true}],
        "import/no-unresolved": "off",
        "import/first" : 0,
        "import/extensions": ["off", "never"],
        "no-param-reassign": 0,
        "no-restricted-syntax": 0,
        "no-plusplus": 0,
        "no-mixed-operators": 0,
        "consistent-return": 0,
        "no-underscore-dangle": 0,
        "no-bitwise": ["error", { "allow": ["~"] }],
        "no-fallthrough": 0,
        "no-unused-expressions": 0,
        "no-tabs":0,
        "no-debugger": 0,
        "no-shadow": 0,
        "no-control-regex": 0,
        "radix": 0,
        "func-names": 0,
        "no-new": 0,
    }
}



