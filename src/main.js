import _vuenime from './Vuenime.vue';

export const Vuenime = _vuenime.default || _vuenime;

export default {
  install (Vue) {
    Vue.component('vuenime', Vuenime);
  },
};
