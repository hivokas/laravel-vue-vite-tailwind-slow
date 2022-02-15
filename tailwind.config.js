const defaultTheme = require('tailwindcss/defaultTheme.js');
const lineClampPlugin = require('@tailwindcss/line-clamp');
const typographyPlugin = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    './resources/js/**/*.js',
  ],
  darkMode: 'class',
  plugins: [
    lineClampPlugin,
    typographyPlugin,
    // Zoom plugin
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        zoom: value => ({
          zoom: value,
        }),
      });
    }),
  ],
};
