module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true,
        'cypress/globals': true
    },
    Plugin: [
        'cypress'
    ],
    extends: [
        // vue
        // 'plugin:vue/vue3-essential' LV1,
        'plugin:vue/vue3-strongly-recommended-', //LV2
        // 'plugin:vue/vue3-recommended'LV3,
        // js
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always"
        }],
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "never",
                "normal": "never",
                "component": "always"
            },
            "svg": "always",
            "math":"always"
        }]
    }
}