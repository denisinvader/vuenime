const rollup = require('rollup');
const configFactory = require('./rollup.config');

async function build (option) {
  const bundle = await rollup.rollup(option.input)
  await bundle.write(option.output)
}

(async () => {
  try {
    await build(configFactory({
      input: `./src/main.js`,
      output: `./vuenime.js`,
    }));

    await build(configFactory({
      input: `./src/main.js`,
      output: `./vuenime.min.js`,
      minify: true,
    }));
  } catch (e) {
    console.error(e);
  }
})();
