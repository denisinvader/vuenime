import { addDecorator, configure } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';

import './stories/theme.css';

import Vue from 'vue';
import Vuenime from '../src/main.js';

Vue.use(Vuenime);

addDecorator (
  withOptions({
    name: 'Vuenime',
    url: 'https://github.com/denisinvader/vuenime',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    enableShortcuts: false,
  })
);

configure(() => require('./stories'), module);
