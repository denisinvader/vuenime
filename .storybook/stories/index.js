import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import { withAnimationKnobs } from './utils.js';

import PrimitivesNumber from './PrimitivesNumber.vue';
import PrimitivesColor from './PrimitivesColor.vue';
import PrimitivesPath from './PrimitivesPath.vue';

storiesOf('Primitives', module)
  .addDecorator(withKnobs)
  .add('Number', withAnimationKnobs(PrimitivesNumber))
  .add('Color', withAnimationKnobs(PrimitivesColor))
  .add('SVG path', withAnimationKnobs(PrimitivesPath))
;

import ArraysNumber from './ArraysNumber.vue';

storiesOf('Arrays', module)
  .addDecorator(withKnobs)
  .add('Of numbers', withAnimationKnobs(ArraysNumber, { round: 100 }))
;

import Sandbox from './Sandbox.vue';

storiesOf('Sandbox', module)
  .add('nothing to see here', () => ({
    render: h => h(Sandbox),
  }))
;
