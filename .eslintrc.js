module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    //prettierでエラーになるからコメントしとく
    //'plugin:prettier/recommended',
    //'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
}
