import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

import { withAnimationKnobs } from './utils';

import PrimitivesNumber from './PrimitivesNumber.vue';
import PrimitivesColor from './PrimitivesColor.vue';
import PrimitivesPath from './PrimitivesPath.vue';

import ArraysNumber from './ArraysNumber.vue';
import ArraysColor from './ArraysColor.vue';
import ArraysDynamic from './ArraysDynamic.vue';
import ArraysTransitionGroup from './ArraysTransitionGroup.vue';

import ObjectsNumber from './ObjectsNumber.vue';
import ObjectsColor from './ObjectsColor.vue';
import ObjectsMixed from './ObjectsMixed.vue';

storiesOf('Primitives', module)
  .addDecorator(withKnobs)
  .add('Number', withAnimationKnobs(PrimitivesNumber))
  .add('Color', withAnimationKnobs(PrimitivesColor))
  .add('SVG path', withAnimationKnobs(PrimitivesPath));

storiesOf('Arrays', module)
  .addDecorator(withKnobs)
  .add('Of numbers', withAnimationKnobs(ArraysNumber, { round: 100 }))
  .add('Of colors', withAnimationKnobs(ArraysColor))
  .add('Dynamic length', withAnimationKnobs(ArraysDynamic, { round: 100 }))
  .add('Enter/leave with <transition-group>', withAnimationKnobs(
    ArraysTransitionGroup,
    { round: 100 },
  ));

storiesOf('Objects', module)
  .addDecorator(withKnobs)
  .add('With numbers', withAnimationKnobs(ObjectsNumber, { round: 100 }))
  .add('With colors', withAnimationKnobs(ObjectsColor))
  .add('Mixed', withAnimationKnobs(ObjectsMixed, { round: 100 }));
