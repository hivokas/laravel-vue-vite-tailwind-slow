module.exports = {
  extends: 'stylelint-config-standard',
  overrides: [
    { files: ['**/*.vue'], customSyntax: 'postcss-html' },
    { files: ['**/*.scss'], customSyntax: 'postcss-scss' },
  ],
  rules: {
    'no-eol-whitespace': null, // disabled to prevent bad formatting inside style attributes in .vue files
    'rule-empty-line-before': null, // let it be up to the developer
    'selector-list-comma-newline-after': null, // let it be up to the developer
    'declaration-colon-newline-after': null, // let it be up to the developer
    'value-list-comma-newline-after': null, // let it be up to the developer
    'declaration-empty-line-before': null, // let it be up to the developer
    'at-rule-empty-line-before': null, // let it be up to the developer
    'comment-empty-line-before': null, // let it be up to the developer
    'comment-whitespace-inside': null, // let it be up to the developer
    'selector-class-pattern': null, // let it be up to the developer
    'keyframes-name-pattern': null, // let it be up to the developer
    'alpha-value-notation': null, // let it be up to the developer
    'max-line-length': null, // let it be up to the developer
    'function-url-quotes': null, // let it be up to the developer
    'font-family-name-quotes': null, // let it be up to the developer
    'declaration-block-trailing-semicolon': null, // disabled to prevent conflicts with prettier
    'string-quotes': 'single', // changed to prevent conflicts with prettier
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'screen',
        ],
      },
    ], // updated to work fine with tailwind directives
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'theme', // tailwindcss
          'l', // postcss-color-function
          'a', // postcss-color-function
          'hue', // postcss-color-function
          'transparentize', // sass
        ],
      },
    ], // updated to work fine with tailwind directives
    'no-descending-specificity': null, // disabled (but should probably be enabled)
    'number-max-precision': null, // disabled (but should probably be enabled)
    'property-no-vendor-prefix': null, // disabled (but should probably be enabled)
    'at-rule-no-vendor-prefix': null, // disabled (but should probably be enabled)
    'value-no-vendor-prefix': null, // disabled (but should probably be enabled)
  },
};
