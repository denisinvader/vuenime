import { addDecorator, configure } from '@storybook/vue';
import { withOptions } from '@storybook/addon-options';

addDecorator (
  withOptions({
    name: 'Vuenime',
    url: 'https://github.com/denisinvader/vuenime',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: true,
    enableShortcuts: false,
  })
);

configure(() => require('./stories'), module);
