const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const vue = require('rollup-plugin-vue');
const { uglify } = require('rollup-plugin-uglify');
const meta = require('./package.json');

const config = {
  input: './src/main.js',
  external: ['animejs'],
  output: {
    file: `dist/${meta.name}.js`,
    name: meta.name,
    format: 'umd',
    globals: { 'animejs': 'anime' },
    exports: 'named',
  },
  plugins: [
    commonjs(),
    vue(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue'],
    }),
  ],
};

module.exports = [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `dist/${meta.name}.min.js`,
    },
    plugins: [
      ...config.plugins,
      uglify(),
    ],
  },
];
