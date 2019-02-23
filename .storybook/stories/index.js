import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Sandbox from './Sandbox.vue';

storiesOf('Sandbox', module)
  .add('nothing to see here', () => ({
    render: h => h(Sandbox),
  }))
;
