import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Sandbox from './Sandbox.vue';

storiesOf('MyButton', module)
  .add('sandbox', () => ({
    render: h => h(Sandbox),
  }))
;
