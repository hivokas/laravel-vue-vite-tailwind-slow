module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      // Prettier config
      {
        singleQuote: true,
        arrowParens: 'avoid',
        // htmlWhitespaceSensitivity: 'ignore',
      },
    ],
    'no-unused-vars': 'off', // todo: turn on and fix
    'no-prototype-builtins': 'off', // todo: turn on and fix
    'no-useless-escape': 'off', // todo: turn on and fix
    'vue/no-v-html': 'off',
    'vue/no-unused-vars': 'off', // todo: turn on and fix
    'vue/multi-word-component-names': 'off', // todo: turn on and fix
    'vue/v-on-event-hyphenation': 'off', // todo: turn on and fix
    'vue/require-explicit-emits': 'off', // todo: turn on and fix
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'SLOT',
          'OTHER_DIRECTIVES',
          ['TWO_WAY_BINDING', 'OTHER_ATTR'],
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
  },
};
