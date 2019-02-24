import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import { withAnimationKnobs } from './utils.js';

import PrimitivesNumber from './PrimitivesNumber.vue';

storiesOf('Primitives', module)
  .addDecorator(withKnobs)
  // .add('Number', () => ({
  //   render: h => h(PrimitivesNumber),
  // }))
  .add('Number', withAnimationKnobs(PrimitivesNumber))
;

import Sandbox from './Sandbox.vue';

storiesOf('Sandbox', module)
  .add('nothing to see here', () => ({
    render: h => h(Sandbox),
  }))
;
