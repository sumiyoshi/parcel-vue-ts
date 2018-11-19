module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        "parser": "typescript-eslint-parser"
    },
    extends: [
        "eslint:recommended",
        "typescript",
        "plugin:vue/recommended"
    ],
    plugins: [
        'html',
        'vue',
        'typescript'
    ],
    rules: {
        'semi': 0,
        "typescript/member-delimiter-style": 0,
        "vue/html-self-closing": 0,
    }
}