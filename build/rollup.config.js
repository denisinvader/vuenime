const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const vue = require('rollup-plugin-vue');
const { uglify } = require('rollup-plugin-uglify');

module.exports = ({ input, output, name, minify }) => {
  const plugins = [
    commonjs(),
    vue(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      sourceMap: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
  ];

  if (minify) {
    plugins.push(uglify());
  }

  return {
    input: {
      input,
      external: ['animejs'],
      plugins: plugins,
    },
    output: {
      file: output,
      exports: 'named',
      format: 'umd',
      name: name || 'vuenime',
      globals: {
        'animejs': 'animejs',
        'vuenime': 'vuenime',
      },
    },
  }
};
