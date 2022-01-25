module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],
    'comma-dangle': ['warn', 'always-multiline'],
  },
};
